import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('user-daily-challenges')
export class UserDailyChallengeController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createUserDailyChallenge(@Body() body: { userId: number; challengeId: number; completed: boolean; completedAt: Date }) {
    return await this.prisma.userDailyChallenge.create({ data: body });
  }

  @Get()
  async getUserDailyChallenges() {
    return await this.prisma.userDailyChallenge.findMany();
  }

  @Get(':userId/:challengeId')
  async getUserDailyChallenge(@Param('userId') userId: string, @Param('challengeId') challengeId: string) {
    return await this.prisma.userDailyChallenge.findUnique({
      where: {
        userId_challengeId: {
          userId: parseInt(userId, 10),
          challengeId: parseInt(challengeId, 10),
        },
      },
    });
  }

  @Put(':userId/:challengeId')
  async updateUserDailyChallenge(
    @Param('userId') userId: string,
    @Param('challengeId') challengeId: string,
    @Body() body: Partial<{ completed: boolean; completedAt: Date }>,
  ) {
    return await this.prisma.userDailyChallenge.update({
      where: {
        userId_challengeId: {
          userId: parseInt(userId, 10),
          challengeId: parseInt(challengeId, 10),
        },
      },
      data: body,
    });
  }

  @Delete(':userId/:challengeId')
  async deleteUserDailyChallenge(@Param('userId') userId: string, @Param('challengeId') challengeId: string) {
    return await this.prisma.userDailyChallenge.delete({
      where: {
        userId_challengeId: {
          userId: parseInt(userId, 10),
          challengeId: parseInt(challengeId, 10),
        },
      },
    });
  }
}