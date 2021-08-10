import { Consumer, Topics, SendMailEvent } from '@uomlms/common';
import { Message } from 'node-rdkafka';
import { sendMail } from '../../controllers/send-mail';

export class SendMailConsumer extends Consumer<SendMailEvent> {
  readonly topic = Topics.SendMailTopic;

  async onMessage(data: SendMailEvent['data'], message: Message) {
    sendMail({
      from: data.from || process.env.NO_REPLY_EMAIL!,
      to: data.to,
      subject: data.subject,
      text: data.text
    });
  }
}