import { greetings } from '../../events/greetings'
import { formatToWpp } from '../../helpers/formatPhoneNumber'

import { MessageContract } from '../../models/message/contract'

import { WhatsappService } from './base'

export class SendMessageService extends WhatsappService 
implements MessageContract.SendMessageService {
  async execute({ person, msg, file, fileMsg }: MessageContract.Inputs.ToSend): Promise<void> {
    const phone = formatToWpp(person.phone)

    if (!person.isAllowed) {
      if (person.isAllowed == false)
        return 

      greetings(this.client, phone)
      throw new Error('Not a accepted contact')
    }

    await this.client.sendText(
      phone,
      msg
    )
    .then(msg => console.log(msg))
    .catch(error => console.error(error))

    if (file) 
      await this.client.sendImage(
        phone,
        file,
        'image',
        fileMsg
      )
      .then(msg => console.log(msg))
      .catch(error => console.error(error))
  }
}
