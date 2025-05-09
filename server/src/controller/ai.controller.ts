import { Controller } from '@nestjs/common';
import { AiService } from '../services/ai.service';
import { Post, Body } from '@nestjs/common';

@Controller('ai')
export class AIController {
  constructor(private readonly aiService: AiService) {}

  @Post('ask')
  async login(@Body() prompt: { prompt: string; }) {
    return this.aiService.askOpenRouter(prompt.prompt);
  }

  
}
