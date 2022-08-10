import { randomBytes } from 'crypto'

import { CsvFileDto } from '../dto/csv/csvFile.dto'

import { PeopleContracts } from '../models/people/contract'

import { CreateManyPeopleRepository } from '../repositories/people/createMany'
import { CreateCampaignRepostiory } from '../repositories/campaign/create'

import logger from '../helpers/logger'

export class CreateService implements PeopleContracts.CreateNumbersByCsv {
  async execute({ file, name }: PeopleContracts.Inputs.ToCreateNumbers): Promise<void> {
    logger.log('Creating people by csv...')
    const peopleToCreate = CsvFileDto.read(file)

    const campaign = await new CreateCampaignRepostiory().execute({
      name: name ?? randomBytes(20).toString('hex')
    })
    
    new CreateManyPeopleRepository().execute({
      peopleToCreate,
      campaignId: campaign.id
    })
    logger.success('People created successfully')
  }
}
