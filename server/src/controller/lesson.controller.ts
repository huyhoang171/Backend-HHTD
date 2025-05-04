import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('lessons')
export class LessonController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createLesson(@Body() body: { title: string; description?: string; levelRequired: number; order: number; image?: string }) {
    return await this.prisma.lesson.create({ data: body });
  }

  @Get()
  async getLessons() {
    return await this.prisma.lesson.findMany();
  }

  @Get(':id')
  async getLesson(@Param('id') id: string) {
    return await this.prisma.lesson.findUnique({ where: { lessonId: parseInt(id, 10) } });
  }

  @Put(':id')
  async updateLesson(@Param('id') id: string, @Body() body: Partial<{ title: string; description?: string; levelRequired: number; order: number; image?: string }>) {
    return await this.prisma.lesson.update({ where: { lessonId: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deleteLesson(@Param('id') id: string) {
    return await this.prisma.lesson.delete({ where: { lessonId: parseInt(id, 10) } });
  }
}