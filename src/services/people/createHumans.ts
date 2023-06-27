import { PeopleContracts } from '../../models/people/contract'

import logger from '../../utils/logger'

import { createManyPeopleQueue } from '../../helpers/createManyPeopleQueue'
import { DefaultIds } from '../../models/campaign/model'

export class CreateHumansService implements PeopleContracts.CreateHuman {
  async execute({ humansToCreate }: PeopleContracts.Inputs.ToCreateHuman): Promise<void> {
    try {
      logger.log('Creating humans')
      await createManyPeopleQueue({
        peopleToCreate: humansToCreate,
        campaignId: DefaultIds.humans
      })
      logger.log('Humans inserted on queue...')
    }
    catch(error) {
      logger.error('Something went wrong: ', error)
    }
  }
}
