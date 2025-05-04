import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('users')
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createUser(@Body() body: { username: string; password: string; email: string; role: string; exp: number; streak: number; level_id: number }) {
    return await this.prisma.user.create({ data: body });
  }

  @Get()
  async getUsers() {
    return await this.prisma.user.findMany();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.prisma.user.findUnique({ where: { userId: parseInt(id, 10) } });
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() body: Partial<{ username: string; password: string; email: string; role: string }>) {
    return await this.prisma.user.update({ where: { userId: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.prisma.user.delete({ where: { userId: parseInt(id, 10) } });
  }
}