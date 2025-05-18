
import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from '../services/ai.service';

@Controller('ai')
export class AIController {
  constructor(private readonly aiService: AiService) {}

  @Post('process')
  async processRequest(@Body() body: { input: string }): Promise<{ result: string }> {
    const result = await this.aiService.askOpenRouter(body.input);
    return {  result };
  }
}
