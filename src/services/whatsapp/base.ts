import { Whatsapp } from 'venom-bot'

export abstract class WhatsappService {
  public client: Whatsapp

  constructor(client: Whatsapp) {
    this.client = client
  }
}
