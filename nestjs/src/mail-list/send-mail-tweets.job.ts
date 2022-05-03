import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { MailListService } from './mail-list.service';

@Processor('emails')
export class SendMailTweetJob {
  constructor(private mailListService: MailListService) {}
  @Process()
  async handle(job: Job) {
    const mailList = await this.mailListService.findOne();

    console.log(mailList.emails.length);

    console.log('kafka envia a mensagem para o wesley');
  }
}
