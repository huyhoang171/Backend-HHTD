import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('vocabularies')
export class VocabularyController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createVocabulary(@Body() body: { word: string; meaning: string; pronunciation: string; lessonId: number; example?: string; image?: string }) {
    const data = {
      word: body.word,
      meaning: body.meaning,
      pronunciation: body.pronunciation,
      Lesson: { connect: { lessonId: body.lessonId } },
      example: body.example,
      image: body.image,
    };
    return await this.prisma.vocabulary.create({ data });
  }

  @Get()
  async getVocabularies() {
    return await this.prisma.vocabulary.findMany();
  }

  @Get(':id')
  async getVocabulary(@Param('id') id: string) {
    return await this.prisma.vocabulary.findUnique({ where: { vocabId: parseInt(id, 10) } });
  }

  @Put(':id')
  async updateVocabulary(@Param('id') id: string, @Body() body: Partial<{ word: string; meaning: string; example?: string; image?: string }>) {
    return await this.prisma.vocabulary.update({ where: { vocabId: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deleteVocabulary(@Param('id') id: string) {
    return await this.prisma.vocabulary.delete({ where: { vocabId: parseInt(id, 10) } });
  }
}