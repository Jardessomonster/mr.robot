import { format } from '../helpers/formatPhoneNumber'

import { MessageContract } from '../models/message/contract'

import { GetCampaignRepository } from '../repositories/campaign/get'
import { ListPeopleRepository } from '../repositories/people/list'

import { WhatsappService } from './whatsapp/base'

export class SendMessageService extends WhatsappService 
implements MessageContract.SendMessageService {
  async execute({ id, msg, file }: MessageContract.Inputs.ToSend): Promise<void> {
    const campaign = await new GetCampaignRepository().execute(id)
    if (!campaign)
      throw new Error(`Campaign of id: ${id} does not exist`)

    const people = await new ListPeopleRepository().execute(campaign.id)

    people.forEach(async (person) => {
      const phone = format(person.phone)

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
        )
        .then(msg => console.log(msg))
        .catch(error => console.error(error))
    })
  }
}
