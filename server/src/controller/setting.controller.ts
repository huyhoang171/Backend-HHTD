import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('settings')
export class SettingController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createSetting(@Body() body: { userId: number; key: string; value: string; language: string; notificationEnabled: boolean }) {
    return await this.prisma.setting.create({ data: body });
  }

  @Get()
  async getSettings() {
    return await this.prisma.setting.findMany();
  }

  @Get(':id')
  async getSetting(@Param('id') id: string) {
    return await this.prisma.setting.findUnique({ where: { userId: parseInt(id, 10) } });
  }

  @Put(':id')
  async updateSetting(@Param('id') id: string, @Body() body: Partial<{ language: string; notificationEnabled: boolean }>) {
    return await this.prisma.setting.update({ where: { userId: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deleteSetting(@Param('id') id: string) {
    return await this.prisma.setting.delete({ where: { userId: parseInt(id, 10) } });
  }
}