import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('daily-challenges')
export class DailyChallengeController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createDailyChallenge(@Body() body: { title: string; description: string; reward: number; expReward: number; date: Date }) {
    return await this.prisma.dailyChallenge.create({ data: body });
  }

  @Get()
  async getDailyChallenges() {
    return await this.prisma.dailyChallenge.findMany();
  }

  @Get(':id')
  async getDailyChallenge(@Param('id') id: string) {
    return await this.prisma.dailyChallenge.findUnique({ where: { challengeId: parseInt(id, 10) } });
  }

  @Put(':id')
  async updateDailyChallenge(@Param('id') id: string, @Body() body: Partial<{ title: string; description: string; reward: number; expReward: number; date: Date }>) {
    return await this.prisma.dailyChallenge.update({ where: { challengeId: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deleteDailyChallenge(@Param('id') id: string) {
    return await this.prisma.dailyChallenge.delete({ where: { challengeId: parseInt(id, 10) } });
  }
}