import { Response } from 'express'
import { Whatsapp } from 'venom-bot'

import { BaseRequest } from '../../middlewares/makeRequest'

import { SendDto } from '../../dto'

import { SendMessageService } from '../../services/sendMessage'

export class SendController {
  constructor (
    private client: Whatsapp
  ) {}

  async handler(req: BaseRequest<SendDto>, res: Response) {
    const sendMessageService = new SendMessageService(this.client)
    await sendMessageService.execute(req.body)
    
    return res.status(204).json()
  }
}
