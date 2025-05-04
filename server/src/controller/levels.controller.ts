import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('levels')
export class LevelsController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createLevel(@Body() body: { level_name: string; exp_required: number }) {
    return await this.prisma.levels.create({
      data: {
        level_name: body.level_name,
        exp_required: body.exp_required,
      },
    });
  }

  @Get()
  async getLevels() {
    return await this.prisma.levels.findMany();
  }

  @Get(':id')
  async getLevel(@Param('id') id: string) {
    return await this.prisma.levels.findUnique({ where: { level_id: parseInt(id, 10) } });
  }

  @Put(':id')
  async updateLevel(@Param('id') id: string, @Body() body: Partial<{ name: string; description: string; difficulty: string }>) {
    return await this.prisma.levels.update({ where: { level_id: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deleteLevel(@Param('id') id: string) {
    return await this.prisma.levels.delete({ where: { level_id: parseInt(id, 10) } });
  }
}