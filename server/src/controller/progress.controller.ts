import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('progress')
export class ProgressController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createProgress(@Body() body: { userId: number; lessonId: number; status: string; score: number; completedAt?: Date }) {
    return await this.prisma.progress.create({ data: body });
  }

  @Get()
  async getProgresses() {
    return await this.prisma.progress.findMany();
  }

  @Get(':id')
  async getProgress(@Param('id') id: string) {
    return await this.prisma.progress.findUnique({ where: { progressId: parseInt(id, 10) } });
  }

  @Put(':id')
  async updateProgress(@Param('id') id: string, @Body() body: Partial<{ userId: number; lessonId: number; status: string; score: number; completedAt?: Date }>) {
    return await this.prisma.progress.update({ where: { progressId: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deleteProgress(@Param('id') id: string) {
    return await this.prisma.progress.delete({ where: { progressId: parseInt(id, 10) } });
  }
}