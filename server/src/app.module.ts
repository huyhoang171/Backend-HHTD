import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from './controller/controller.controller';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './services/auth.service';
import { PrismaModule } from './services/prisma.module';
import { AiService } from './services/ai.service';
import { AIController } from './controller/ai.controller';
@Module({
  imports: [PrismaModule],
  controllers: [AppController, ControllerController, AuthController, AIController],
  providers: [AppService, AuthService, AiService],
})
export class AppModule {}
