import { randomBytes } from 'crypto'

import { CsvFileDto } from '../dto/csv/csvFile.dto'

import { PeopleContracts } from '../models/people/contract'

import { CreateCampaignRepostiory } from '../repositories/campaign/create'

import logger from '../helpers/logger'

import { createManyPeopleQueue } from '../helpers/createManyPeopleQueue'

export class CreateService implements PeopleContracts.CreateNumbersByCsv {
  async execute({ file, name }: PeopleContracts.Inputs.ToCreateNumbers): Promise<void> {
    try {
      logger.log('Creating people by csv...')
      const peopleToCreate = CsvFileDto.read(file)
      const campaign = await new CreateCampaignRepostiory().execute({
        name: name ?? randomBytes(20).toString('hex')
      })
      
      await createManyPeopleQueue({
        peopleToCreate,
        campaignId: campaign.id
      })
      logger.log('People inserted on queue...')
    }
    catch(error) {
      logger.error('Something went wrong: ', error)
    }

  }
}
