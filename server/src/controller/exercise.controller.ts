import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('exercises')
export class ExerciseController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createExercise(@Body() body: { lessonId: number; question: string; type: string; choices: any; correctAnswer: string; audio?: string; image?: string }) {
    return await this.prisma.exercise.create({ data: body });
  }

  @Get()
  async getExercises() {
    return await this.prisma.exercise.findMany();
  }

  @Get(':id')
  async getExercise(@Param('id') id: string) {
    return await this.prisma.exercise.findUnique({ where: { exerciseId: parseInt(id, 10) } });
  }

  @Put(':id')
  async updateExercise(@Param('id') id: string, @Body() body: Partial<{ lessonId: number; question: string; type: string; choices: any; correctAnswer: string; audio?: string; image?: string }>) {
    return await this.prisma.exercise.update({ where: { exerciseId: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deleteExercise(@Param('id') id: string) {
    return await this.prisma.exercise.delete({ where: { exerciseId: parseInt(id, 10) } });
  }
}