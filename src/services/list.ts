import { PeopleContracts } from '../models/people/contract'
import { CampaignModel } from '../models/campaign/model'

import { ListCampaignRepository } from '../repositories/campaign/list'

import logger from '../helpers/logger'

export class ListService implements PeopleContracts.ListCreated {
  async execute(): Promise<CampaignModel.Base[]> {
    const campaign = await new ListCampaignRepository().execute()
    logger.success('Found campaigns')
    return campaign
  }
}
