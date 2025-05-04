import { Controller } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    return this.authService.validateUser(loginDto.username, loginDto.password);
  }

  @Post('register')
  async register(@Body() registerDto: { username: string; email: string; password: string }) {
    return this.authService.registerUser(registerDto);
  }
}
