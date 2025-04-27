import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('user-vocabularies')
export class UserVocabularyController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createUserVocabulary(@Body() body: { userId: number; vocabId: number; mastered: boolean; learnedAt: Date }) {
    return await this.prisma.userVocabulary.create({ data: body });
  }

  @Get()
  async getUserVocabularies() {
    return await this.prisma.userVocabulary.findMany();
  }

  @Get(':userId/:vocabId')
  async getUserVocabulary(@Param('userId') userId: string, @Param('vocabId') vocabId: string) {
    return await this.prisma.userVocabulary.findUnique({
      where: {
        userId_vocabId: {
          userId: parseInt(userId, 10),
          vocabId: parseInt(vocabId, 10),
        },
      },
    });
  }

  @Put(':userId/:vocabId')
  async updateUserVocabulary(
    @Param('userId') userId: string,
    @Param('vocabId') vocabId: string,
    @Body() body: Partial<{ mastered: boolean; learnedAt: Date }>,
  ) {
    return await this.prisma.userVocabulary.update({
      where: {
        userId_vocabId: {
          userId: parseInt(userId, 10),
          vocabId: parseInt(vocabId, 10),
        },
      },
      data: body,
    });
  }

  @Delete(':userId/:vocabId')
  async deleteUserVocabulary(@Param('userId') userId: string, @Param('vocabId') vocabId: string) {
    return await this.prisma.userVocabulary.delete({
      where: {
        userId_vocabId: {
          userId: parseInt(userId, 10),
          vocabId: parseInt(vocabId, 10),
        },
      },
    });
  }
}