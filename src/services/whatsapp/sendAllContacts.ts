import { MessageContract } from '../../models/message/contract'

import { GetCampaignRepository } from '../../repositories/campaign/get'
import { ListPeopleRepository } from '../../repositories/people/list'

import { WhatsappService } from './base'

import { sendMessegeToAllQueue } from '../../helpers/sendMessegeToAllQueue'

export class SendMessageToAllService extends WhatsappService 
implements MessageContract.SendMessageToAllService {
  async execute({ campaignId, msg, file, fileMsg }: MessageContract.Inputs.ToSendAllContacts): Promise<void> {
    const campaign = await new GetCampaignRepository().execute(campaignId)
    if (!campaign)
      throw new Error(`Campaign of campaignId: ${campaignId} does not exist`)

    const people = await new ListPeopleRepository().execute(campaign.id)

    people.forEach(async (person) => {
      const msgData = {
        person,
        msg,
        file,
        fileMsg
      }

      await sendMessegeToAllQueue({
        client: this.client,
        msgData
      })
    })
  }
}
