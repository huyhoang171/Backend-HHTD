import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validateUser(username: string, password: string): Promise<{ success: boolean; message: string; role?: string }> {
    const user = await this.prisma.user.findUnique({ where: { username } });
    //await bcrypt.compare(password, user.password
    if (!user || (user.password !== password)) {
      return { success: false, message: 'Invalid username or password' };
    }

    return { success: true, message: 'Login successful', role: user.role };
  }

  async registerUser(registerDto: { username: string; email: string; password: string }): Promise<{ success: boolean; message: string }> {
    const { username, email, password } = registerDto;

    // Check if the username or email already exists
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existingUser) {
      return { success: false, message: 'Username or email already exists' };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user with default values for exp and streak
    await this.prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role: 'User',
        level_id: 1,
        exp: 0, 
        streak: 0, 
      },
    });

    return { success: true, message: 'User registered successfully' };
  }
}