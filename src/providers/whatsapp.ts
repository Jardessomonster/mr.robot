import { create , Whatsapp } from 'venom-bot'

export class WhatsappProvider {

  async connect(): Promise<Whatsapp> {
    const client = await create(
      'mr_robot', 
      (base64Qrimg, asciiQR, attempts) => {}, 
      undefined,
      { useChrome: false, headless: true } 
    )

    return client
  }
}
