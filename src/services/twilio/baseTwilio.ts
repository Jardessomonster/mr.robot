import { Twilio } from 'twilio'
import { WhatsappClient } from '../../providers/whatsappApi'

export class BaseTwilioService {
  public client: Twilio

  constructor() {
    this.client = new WhatsappClient().connection
  }
}
