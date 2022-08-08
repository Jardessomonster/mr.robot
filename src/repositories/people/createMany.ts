import { PeopleContracts } from '../../models/people/contract'

import { BaseRepository } from '../common/baseRepository'

export class CreateManyPeopleRepository extends BaseRepository {
  execute({ peopleToCreate, campaignId }: PeopleContracts.Inputs.ToCreatePeople): void {
    this.db.run('BEGIN TRANSACTION;')
    const stmt = this.db.prepare('INSERT INTO people (name, phone, campaign_id) VALUES (?, ?, ?)')
    peopleToCreate.forEach(person => {
      stmt.run([person.name, person.phone, campaignId])
    })
    this.run('COMMIT;')
  }
}
