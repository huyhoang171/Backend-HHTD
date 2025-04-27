import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('achievements')
export class AchievementController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createAchievement(@Body() body: { title: string; description: string; expReward: number }) {
    return await this.prisma.achievement.create({ data: body });
  }

  @Get()
  async getAchievements() {
    return await this.prisma.achievement.findMany();
  }

  @Get(':id')
  async getAchievement(@Param('id') id: string) {
    return await this.prisma.achievement.findUnique({ where: { achievementId: parseInt(id, 10) } });
  }

  @Put(':id')
  async updateAchievement(@Param('id') id: string, @Body() body: Partial<{ title: string; description: string; expReward: number }>) {
    return await this.prisma.achievement.update({ where: { achievementId: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deleteAchievement(@Param('id') id: string) {
    return await this.prisma.achievement.delete({ where: { achievementId: parseInt(id, 10) } });
  }
}