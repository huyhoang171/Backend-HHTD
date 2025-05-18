

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { ControllerController } from './controller/controller.controller';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './services/auth.service';
import { PrismaModule } from './services/prisma.module';
import { AiService } from './services/ai.service';
import { AIController } from './controller/ai.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [PrismaModule,
    MailerModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: async (ConfigService: ConfigService) => ({
        transport: {
        host: 'smtp.gmail.com',
        port: 465,
        //ignoreTLS: true,
        secure: true,
        auth: {
          user: ConfigService.get<string>('EMAIL_USER'),
          pass: ConfigService.get<string>('EMAIL_PASS'),
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@localhost>',
      },
      preview: true,
      template: {
        dir: process.cwd() + '/template/',
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, ControllerController, AuthController, AIController],
  providers: [AppService, AuthService, AiService],
})
export class AppModule {}
