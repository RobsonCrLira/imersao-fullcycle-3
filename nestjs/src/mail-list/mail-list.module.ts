import { Module } from '@nestjs/common';
import { MailListService } from './mail-list.service';
import { MailListController } from './mail-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MailList, MailListSchema } from './schemas/mail-list.schema';
import { SendMailTweetJob } from './send-mail-tweets.job';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MailList.name, schema: MailListSchema },
    ]),
  ],
  controllers: [MailListController],
  providers: [MailListService, SendMailTweetJob],
})
export class MailListModule {}
