import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createSubscription(@Body() body: { userId: number; plan: string; type: string; startDate: Date; endDate: Date }) {
    return await this.prisma.subscription.create({ data: body });
  }

  @Get()
  async getSubscriptions() {
    return await this.prisma.subscription.findMany();
  }

  @Get(':id')
  async getSubscription(@Param('id') id: string) {
    return await this.prisma.subscription.findUnique({ where: { subscriptionId: parseInt(id, 10) } });
  }

  @Put(':id')
  async updateSubscription(@Param('id') id: string, @Body() body: Partial<{ plan: string; startDate: Date; endDate: Date }>) {
    return await this.prisma.subscription.update({ where: { subscriptionId: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deleteSubscription(@Param('id') id: string) {
    return await this.prisma.subscription.delete({ where: { subscriptionId: parseInt(id, 10) } });
  }
}