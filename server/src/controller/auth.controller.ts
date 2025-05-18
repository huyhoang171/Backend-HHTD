import { Test } from '@nestjs/testing';
import { Controller, Query } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Post, Get, Body } from '@nestjs/common';
import { Public } from 'generated/prisma/runtime/library';
import { MailerService } from '@nestjs-modules/mailer';
import { PrismaService } from '../services/prisma.service';
import * as bcrypt from 'bcrypt';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly prisma: PrismaService,
    private readonly mailerService: MailerService
  ) {}

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    if (loginDto.username) {
      return this.authService.validateUser(loginDto.username, loginDto.password);
    } else {
      return { success: false, message: 'Username is required' };
    }
  }

  @Post('register')
  async register(@Body() registerDto: { username: string; email: string; password: string }) {
    return this.authService.registerUser(registerDto);
  }

  @Post('send-verification-code')
  async sendVerificationCode(@Body() emailDto: { email: string }) {
    try {
      await this.authService.sendVerificationCode(emailDto.email);
      return { message: 'Verification code sent successfully' };
    } catch (error) {
      return { message: 'Failed to send verification code', error };
    }
  }

  @Post('verify-code')
  async verifyCode(@Body() verifyDto: { email: string; code: string }) {
    return this.authService.verifyCode(verifyDto.email, verifyDto.code);
  }

  @Post('verify-and-register')
  async verifyAndRegister(@Body() verifyDto: { email: string; code: string; username: string; password: string }) {
    return this.authService.verifyAndRegisterUser(verifyDto);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() forgotPasswordDto: { email: string }) {
    const user = await this.prisma.user.findUnique({ where: { email: forgotPasswordDto.email } });

    if (!user) {
      return { success: false, message: 'Email not found' };
    }

    const tempPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    await this.prisma.user.update({
      where: { email: forgotPasswordDto.email },
      data: { password: hashedPassword },
    });

    try {
      await this.mailerService
      .sendMail({
        to: `${forgotPasswordDto.email}`, 
        subject: 'Password Reset',
            text: `Your temporary password is: ${tempPassword}`, 
            html: `Your temporary password is: ${tempPassword}`, 
          });
          console.log('Password reset email sent successfully');
        } catch (error) {
          console.error('Error sending password reset email:', error);
          throw new Error('Failed to send password reset email');
        }
    
        return { success: true, message: 'Temporary password sent to your email' };
  }

  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: { email: string; passwordold: string ; passwordnew: string }) {
    try {
      await this.authService.resetPasswordService(resetPasswordDto.email, resetPasswordDto.passwordold, resetPasswordDto.passwordnew);
      return { success: true, message: 'Password reset successfully' };
    } catch (error) {
      console.error('Error resetting password:', error);
      return { success: false, message: 'Failed to reset password' };
    }
  }
 
  @Get('get-user-progress')
  async getUserProgress(@Body() userIdDto: { userId: number }) {
    try {
      const userProgress = await this.authService.getUserProgress(userIdDto.userId);
      return { message: 'User progress retrieved successfully', data: userProgress };
    } catch (error) {
      console.error('Error retrieving user process:', error);
      return { message: 'Failed to retrieve user process' };
    }
  }
  @Post('progress-save-topic')
  async saveTopicProgress(@Body() progressDto: { userId: number; topicname: string; progress: number }) {
    try {
    const userId = Number(progressDto.userId);
    const progress = Number(progressDto.progress);
    const result = await this.authService.saveTopicProgress(userId, progressDto.topicname, progress);
    return { success: true};
  } catch (error) {
    console.error('Error saving topic progress:', error);
    return { success: false };
  }
  }
  @Post('progress-save-grammar')
  async saveGrammarProgress(@Body() progressDto: { userId: number; grammarid: number; progress: number }) {
    try {
      const userId = Number(progressDto.userId);
      const grammarid = Number(progressDto.grammarid);
      const progress = Number(progressDto.progress);
      const result = await this.authService.saveGrammarProgress(userId, grammarid + 70, progress);
      return { success: true };
    } catch (error) {
      console.error('Error saving grammar progress:', error);
      return { success: false };
    }
  }

  @Post('progress-save-speaking')
  async saveSpeakingProgress(@Body() progressDto: { userId: number; speakingname: string; progress: number }) {
    try {
      const userId = Number(progressDto.userId);
      const speakingname = progressDto.speakingname;
      const progress = Number(progressDto.progress);
      const result = await this.authService.saveSpeakingProgress(userId, speakingname, progress);
      return { success: true };
    } catch (error) {
      console.error('Error saving speaking progress:', error);
      return { success: false };
      }
    }
  @Post('get-study-calendar')
  async getStudyCalendar(@Body() userIdDto: { userid: number }) {
    try {
      const studyCalendar = await this.authService.getStudyCalendar(userIdDto.userid);
      return { success : true,message: 'Study calendar retrieved successfully', data: studyCalendar };
    } catch (error) {
      console.error('Error retrieving study calendar:', error);
      return { success: false, message: 'Failed to retrieve study calendar' };
    }
  }
  @Post('save-study-calendar')
  async saveStudyCalendar(@Body() calendarDto: { userid: number; date: string; }) {
    try {
      const userId = Number(calendarDto.userid);
      const date = calendarDto.date;
      const result = await this.authService.saveStudyCalendar(userId, date);
      return { success: true };
    } catch (error) {
      console.error('Error saving study calendar:', error);
      return { success: false };
    }
  }
}

