import { PeopleContracts } from '../models/people/contract'

import { ListCampaignRepository } from '../repositories/campaign/list'

import logger from '../helpers/logger'

export class ListService implements PeopleContracts.ListCreated {
  async execute(): Promise<void> {
    const campaign = await new ListCampaignRepository().execute()
    logger.success('Found campaigns: \n', campaign)
  }
}
