import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('feedbacks')
export class FeedbackController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createFeedback(@Body() body: { userId: number; content: string; lessonId: number; rating: number; createdAt?: Date }) {
    return await this.prisma.feedback.create({ data: body });
  }

  @Get()
  async getFeedbacks() {
    return await this.prisma.feedback.findMany();
  }

  @Get(':id')
  async getFeedback(@Param('id') id: string) {
    return await this.prisma.feedback.findUnique({ where: { feedbackId: parseInt(id, 10) } });
  }

  @Put(':id')
  async updateFeedback(@Param('id') id: string, @Body() body: Partial<{ content: string; createdAt?: Date }>) {
    return await this.prisma.feedback.update({ where: { feedbackId: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deleteFeedback(@Param('id') id: string) {
    return await this.prisma.feedback.delete({ where: { feedbackId: parseInt(id, 10) } });
  }
}