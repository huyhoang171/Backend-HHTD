import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('leaderboards')
export class LeaderboardController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createLeaderboard(@Body() body: { userId: number; score: number; rank: number; week: number }) {
    return await this.prisma.leaderboard.create({ data: body });
  }

  @Get()
  async getLeaderboards() {
    return await this.prisma.leaderboard.findMany();
  }

  @Get(':id')
  async getLeaderboard(@Param('id') id: string) {
    return await this.prisma.leaderboard.findUnique({ where: { leaderboardId: parseInt(id, 10) } });
  }

  @Put(':id')
  async updateLeaderboard(@Param('id') id: string, @Body() body: Partial<{ userId: number; score: number; rank: number }>) {
    return await this.prisma.leaderboard.update({ where: { leaderboardId: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deleteLeaderboard(@Param('id') id: string) {
    return await this.prisma.leaderboard.delete({ where: { leaderboardId: parseInt(id, 10) } });
  }
}