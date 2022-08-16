import logger from '../../helpers/logger'
import { PeopleContracts } from '../../models/people/contract'

import { BaseRepository } from '../common/baseRepository'

export class CreateManyPeopleRepository extends BaseRepository {
  async execute({ peopleToCreate, campaignId }: PeopleContracts.Inputs.ToCreatePeople): Promise<void> {
    const stmt = this.db.prepare('INSERT INTO people (name, phone, campaign_id) VALUES (?, ?, ?)')
    peopleToCreate.forEach((person) => {
      logger.log(`creating person: `, person)
      stmt.run([person.name, person.phone, campaignId])
    })
  }
}
