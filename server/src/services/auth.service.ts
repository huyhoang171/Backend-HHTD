import * as bcrypt from 'bcrypt';
import { Injectable, NotFoundException } from '@nestjs/common'; 
import { PrismaService } from './prisma.service';
import { MailerService } from '@nestjs-modules/mailer';

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});


export interface UserProgressDetails {
  userId: number;
  username: string;
  topicProgress: any[];
  grammarLessonProgress: any[];
}

@Injectable()
export class AuthService {
  private verificationCodes: Record<string, { code: string; expiresAt: number }> = {};

  constructor(
    private readonly prisma: PrismaService,
    private readonly mailerService: MailerService
  ) {}

  async validateUser(username: string, password: string): Promise<{ success: boolean; message: string; createAt?: Date;username? : string ; email?: string; userid?: number; progress?: { topicProgress: { topicName: string; learnedWords: number }[]; grammarLessonProgress: { id: number; status: number }[] ; speakingProgress : {title : String; learnedWords : number } []} | null }> {
    const user = await this.prisma.user.findUnique({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return { success: false, message: 'Invalid username or password' };
    }

    const progress = await this.getUserProgress(user.id);

    return {
      success: true,
      username: user.username,
      message: 'Login successful',
      createAt: user.createdAt,
      email: user.email ?? undefined,
      userid: user.id ?? undefined,
      progress : progress ?? null
    };
  }

  async registerUser(registerDto: { username: string; email: string; password: string }): Promise<{ success: boolean; message: string }> {
    const { username, email, password } = registerDto;

    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existingUser) {
      return { success: false, message: 'Username or email already exists' };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      },
    });

    await this.initializeUserProgress(user.id);

    return { success: true, message: 'User registered successfully' };
  }

  async sendVerificationCode(email: string): Promise<{ success: boolean; message: string }> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    this.verificationCodes[email] = { code, expiresAt: Date.now() + 10 * 60 * 1000 }; // 10 minutes

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Verification Code',
      text: `Your verification code is: ${code}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Verification email sent successfully');
      return { success: true, message: 'Verification code sent successfully' };
    } catch (error) {
      console.error('Error sending verification email:', error);
      // throw new Error('Failed to send verification email'); // Trong service, nên throw lỗi của NestJS
      throw new Error('Failed to send verification email. Please try again later.');
    }
  }

  async verifyCode(email: string, code: string): Promise<{ success: boolean; message: string }> {
    const record = this.verificationCodes[email];
    if (!record || record.code !== code || record.expiresAt < Date.now()) {
      return { success: false, message: 'Invalid or expired verification code' };
    }
    delete this.verificationCodes[email];
    return { success: true, message: 'Verification successful' };
  }

  async verifyAndRegisterUser(verifyDto: { email: string; code: string; username: string; password: string }): Promise<{ success: boolean; message: string }> {
    const { email, code, username, password } = verifyDto;

    const verificationResult = await this.verifyCode(email, code); 
    if (!verificationResult.success) {
        return verificationResult;
    }
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existingUser) {
      return { success: false, message: 'Username or email already exists' };
    }


    const hashedPassword = await bcrypt.hash(password, 10);
    await this.prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return { success: true, message: 'User registered successfully' };
  }

  async handleForgotPassword(email: string): Promise<{ success: boolean; message: string }> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      console.warn(`Attempt to reset password for non-existent email: ${email}`);
      return { success: true, message: 'If your email is registered, you will receive a password reset link.' };
    }

    const tempPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    await this.prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });
  
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Password Reset',
        text: `Your temporary password is: ${tempPassword}. Please change it after logging in.`,
        html: `Your temporary password is: <b>${tempPassword}</b>. Please change it after logging in.`,
      });
      console.log('Password reset email sent successfully to', email);
      return { success: true, message: 'Temporary password sent to your email' };
    } catch (error) {
      console.error('Error sending password reset email:', error);
      return { success: false, message: 'Failed to send password reset email, but password has been reset. Please contact support if you do not receive it.' };
    }
  }

  async resetPasswordService(email: string, passwordold: string, passwordnew: string): Promise<void> {
  const user = await this.prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new NotFoundException('User with this email not found.');
  }

  const isOldPasswordCorrect = await bcrypt.compare(passwordold, user.password);
  if (!isOldPasswordCorrect) {
    throw new NotFoundException('Old password is incorrect.');
  }

  const isSameAsOld = await bcrypt.compare(passwordnew, user.password);
  if (isSameAsOld) {
    throw new NotFoundException('New password must be different from the old password.');
  }

  const hashedPassword = await bcrypt.hash(passwordnew, 10);

  await this.prisma.user.update({
    where: { email },
    data: { password: hashedPassword },
  });
  }

  async getUserProgress(userId: number): Promise<{
    topicProgress: { topicName: string; learnedWords: number }[];
    grammarLessonProgress: { id: number; status: number }[];
    speakingProgress: { title: string; learnedWords: number }[];
  } | null> {
    try {
      const userWithProgress = await this.prisma.user.findUnique({
        where: { id: userId },
        include: {
          topicProgress: {
            include: { topic: true },
            orderBy: { lastAccessedAt: 'desc' },
          },
          grammarLessonProgress: {
            include: { grammarLesson: true },
            orderBy: { lastAccessedAt: 'desc' },
          },
          userSpeakingProgress: {
            include: { speaking: true },
          },
        },
      });

      if (!userWithProgress) {
        console.log(`User with ID ${userId} not found for progress tracking.`);
        return null;
      }

      // Map topicProgress
      const topicProgress = userWithProgress.topicProgress.map(tp => ({
        topicName: tp.topic?.name || '',
        learnedWords: tp.learnedWords || 0
      }));

      // Map grammarLessonProgress
      const grammarLessonProgress = userWithProgress.grammarLessonProgress.map(glp => ({
        id: (glp.grammarLessonId || 0) - 70,
        status: glp.status === 'COMPLETED' ? 1 : 0
      }));

      // Map userSpeakingProgress
      const speakingProgress = userWithProgress.userSpeakingProgress.map(spk => ({
        title: spk.speaking?.title || '',
        learnedWords: spk.learnedWords || 0
      }));

      return {
        topicProgress,
        grammarLessonProgress,
        speakingProgress
      };
    } catch (error) {
      console.error(`Error fetching user progress for userId ${userId}:`, error);
      throw new Error(`An error occurred while fetching user progress.`);
    }
  }

  private getUserIdFromToken(request: any): number | null {

    return null; 
  }

  async initializeUserProgress(userId: number): Promise<void> {
    // 1. Lấy tất cả sub-topic (parent_id != null)
    const subTopics = await this.prisma.topic.findMany({
      where: { parent_id: { not: null } },
      select: { id: true }
    });
    // 2. Lấy tất cả grammar lesson
    const grammarLessons = await this.prisma.grammarLesson.findMany({
      select: { id: true }
    });
    // 3. Lấy tất cả speaking
    const speakings = await this.prisma.speaking.findMany({
      select: { id: true }
    });
    // 4. Tạo UserTopicProgress cho từng sub-topic
    await this.prisma.userTopicProgress.createMany({
      data: subTopics.map(topic => ({
        userId,
        topicId: topic.id,
        status: 'NOT_STARTED',
        learnedWords: 0
      })),
      skipDuplicates: true
    });
    // 5. Tạo UserGrammarLessonProgress cho từng grammar lesson
    await this.prisma.userGrammarLessonProgress.createMany({
      data: grammarLessons.map(lesson => ({
        userId,
        grammarLessonId: lesson.id,
        status: 'NOT_STARTED'
      })),
      skipDuplicates: true
    });
    // 6. Tạo UserSpeakingProgress cho từng speaking
    await this.prisma.userSpeakingProgress.createMany({
      data: speakings.map(spk => ({
        userId,
        spkId: spk.id,
        learnedWords: 0
      })),
      skipDuplicates: true
    });
  
  }
  async saveTopicProgress(userId: number, topicName: string, progress: number): Promise<void> {
    if (typeof userId !== 'number' || isNaN(userId)) {
      throw new NotFoundException('UserId is invalid');
    }
    if (typeof progress !== 'number' || isNaN(progress)) {
      throw new NotFoundException('Progress is invalid');
    }
    const topic = await this.prisma.topic.findFirst({ where: { name: topicName } });
    if (!topic) {
      throw new NotFoundException(`Topic with name ${topicName} not found`);
    }

    await this.prisma.userTopicProgress.update({
      where: { userId_topicId: { userId, topicId: topic.id } },
      data: { learnedWords: progress }
    });
  }
  async saveGrammarProgress(userId: number, grammarid: number, progress: number): Promise<void> {
    if (typeof userId !== 'number' || isNaN(userId)) {
      throw new NotFoundException('UserId is invalid');
    }
    if (typeof grammarid !== 'number' || isNaN(grammarid)) {
      throw new NotFoundException('GrammarId is invalid');
    }
    if (typeof progress !== 'number' || isNaN(progress)) {
      throw new NotFoundException('Progress is invalid');
    }

    await this.prisma.userGrammarLessonProgress.update({
      where: { userId_grammarLessonId: { userId, grammarLessonId: grammarid } },
      data: {
        status: progress === 1 ? 'COMPLETED' : 'IN_PROGRESS'
      }
    });
  }
  async saveSpeakingProgress(userId: number, speakingname: string, progress: number): Promise<void> {
    if (typeof userId !== 'number' || isNaN(userId)) {
      throw new NotFoundException('UserId is invalid');
    }
    if (typeof speakingname !== 'string' || speakingname.trim() === '') {
      throw new NotFoundException('SpeakingName is invalid');
    }
    if (typeof progress !== 'number' || isNaN(progress)) {
      throw new NotFoundException('Progress is invalid');
    }

    // Lấy spkId từ speakingname
    const speaking = await this.prisma.speaking.findFirst({ where: { title: speakingname } });
    if (!speaking) {
      throw new NotFoundException(`Speaking with title ${speakingname} not found`);
    }
    const spkId = speaking.id;

    await this.prisma.userSpeakingProgress.update({
      where: { userId_spkId: { userId, spkId } },
      data: { learnedWords: progress }
    });
  }
  async getStudyCalendar(userId: number): Promise<string[]> {
    // Lấy ngày hiện tại theo định dạng DD-MM-YYYY
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const todayStr = `${dd}-${mm}-${yyyy}`;

    // Kiểm tra xem đã có bản ghi cho ngày hôm nay chưa
    const existing = await this.prisma.dayLearned.findFirst({
      where: { userId, date: todayStr }
    });
    if (!existing) {
      await this.prisma.dayLearned.create({
        data: { userId, date: todayStr }
      });
    }
    const studyCalendar = await this.prisma.dayLearned.findMany({
      where: { userId },
      orderBy: { date: 'asc' },
      select: { date: true }
    });
    return studyCalendar.map(item => item.date);
  }
  async saveStudyCalendar(userId: number, date: string): Promise<void> {
    const parts = date.split('-');
    if (parts.length !== 3) throw new NotFoundException('Date format must be dd-mm-yyyy');
    const [dd, mm, yyyy] = parts;
    if (dd.length !== 2 || mm.length !== 2 || yyyy.length !== 4) throw new NotFoundException('Date format must be dd-mm-yyyy');

    const dateStr = `${dd}-${mm}-${yyyy}`;
    const existingRecord = await this.prisma.dayLearned.findFirst({
      where: { userId, date: dateStr }
    });

    if (!existingRecord) {
      await this.prisma.dayLearned.create({
        data: { userId, date: dateStr }
      });
    }
  }
}