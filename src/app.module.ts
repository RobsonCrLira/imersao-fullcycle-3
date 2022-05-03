import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
import { MailListModule } from './mail-list/mail-list.module';
import { BullModule } from '@nestjs/bull';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TweetsModule,
    MongooseModule.forRoot(process.env.MONGO_DSN),
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: +process.env.REDIS_PORT,
      },
    }),
    MailListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
