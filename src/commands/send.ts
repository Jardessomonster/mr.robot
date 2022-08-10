import { Send } from '../app/@types/commands'

import { SendDto } from '../dto/send.dto'

import { SendMessageService } from '../services/twilio/sendMessage'

export class SendCommand {
  async execute (data: Send): Promise<void> {
    const { id, msg } = SendDto.from(data)
    await new SendMessageService().execute({ id, msg })
  }
}
