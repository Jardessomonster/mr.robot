import { BaseTwilioService } from './baseTwilio'

export class SendMessageService extends BaseTwilioService{
  execute(): void {
    this.client.messages
      .create({
        from: 'whatsapp:+14155238886',
        body: 'Hello world!',
        to: 'whatsapp:+556899652210'
      }).then(msg => console.log(msg))
  }
}
