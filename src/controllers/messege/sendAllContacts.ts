import { Response } from 'express'
import { Whatsapp } from 'venom-bot'

import { BaseRequest } from '../../middlewares/makeRequest'

import { SendAllContactsDto } from '../../dto'

import { SendMessageToAllService } from '../../services/whatsapp/sendAllContacts'

export class SendAllContactsController {
  constructor (
    private client: Whatsapp
  ) {}

  async handler(req: BaseRequest<SendAllContactsDto>, res: Response) {
    const sendMessageService = new SendMessageToAllService(this.client)
    await sendMessageService.execute({
      ...req.body,
      campaignId: req.body.id,
      file: req.file?.path
    })
    
    return res.status(204).json()
  }
}
