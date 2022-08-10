import { BaseTwilioService } from './baseTwilio'

import { MessageContract } from '../../models/message/contract'

import { GetCampaignRepository } from '../../repositories/campaign/get'

export class SendMessageService extends BaseTwilioService
implements MessageContract.SendMessageService {
  async execute({ id, msg }: MessageContract.Inputs.ToSend): Promise<void> {
    const campaign = await new GetCampaignRepository().execute(id)
    
    if (!campaign)
      throw new Error(`Campaign of id: ${id} does not exist`)
    
    this.client.messages
      .create({
        from: `whatsapp:${process.env.SENDER}`,
        body: msg,
        to: 'whatsapp:+556899652210'
      }).then(msg => console.log(msg))
  }
}
