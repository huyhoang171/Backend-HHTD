import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from './controller/controller.controller';

@Module({
  imports: [],
  controllers: [AppController, ControllerController],
  providers: [AppService],
})
export class AppModule {}
