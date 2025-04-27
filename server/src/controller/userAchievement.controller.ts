import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('user-achievements')
export class UserAchievementController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createUserAchievement(@Body() body: { userId: number; achievementId: number; unlockedAt: Date }) {
    return await this.prisma.userAchievement.create({ data: body });
  }

  @Get()
  async getUserAchievements() {
    return await this.prisma.userAchievement.findMany();
  }

  @Get(':userId/:achievementId')
  async getUserAchievement(@Param('userId') userId: string, @Param('achievementId') achievementId: string) {
    return await this.prisma.userAchievement.findUnique({
      where: {
        userId_achievementId: {
          userId: parseInt(userId, 10),
          achievementId: parseInt(achievementId, 10),
        },
      },
    });
  }

  @Put(':userId/:achievementId')
  async updateUserAchievement(
    @Param('userId') userId: string,
    @Param('achievementId') achievementId: string,
    @Body() body: Partial<{ unlockedAt: Date }>,
  ) {
    return await this.prisma.userAchievement.update({
      where: {
        userId_achievementId: {
          userId: parseInt(userId, 10),
          achievementId: parseInt(achievementId, 10),
        },
      },
      data: body,
    });
  }

  @Delete(':userId/:achievementId')
  async deleteUserAchievement(@Param('userId') userId: string, @Param('achievementId') achievementId: string) {
    return await this.prisma.userAchievement.delete({
      where: {
        userId_achievementId: {
          userId: parseInt(userId, 10),
          achievementId: parseInt(achievementId, 10),
        },
      },
    });
  }
}