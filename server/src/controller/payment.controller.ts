import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async createPayment(@Body() body: { userId: number; amount: number; method: string; status: string; paymentDate: Date; createdAt?: Date }) {
    return await this.prisma.payment.create({ data: body });
  }

  @Get()
  async getPayments() {
    return await this.prisma.payment.findMany();
  }

  @Get(':id')
  async getPayment(@Param('id') id: string) {
    return await this.prisma.payment.findUnique({ where: { paymentId: parseInt(id, 10) } });
  }

  @Put(':id')
  async updatePayment(@Param('id') id: string, @Body() body: Partial<{ amount: number; method: string; status: string; createdAt?: Date }>) {
    return await this.prisma.payment.update({ where: { paymentId: parseInt(id, 10) }, data: body });
  }

  @Delete(':id')
  async deletePayment(@Param('id') id: string) {
    return await this.prisma.payment.delete({ where: { paymentId: parseInt(id, 10) } });
  }
}