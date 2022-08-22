import { mapKeys, camelCase } from 'lodash'

import { BaseRepository } from '../common/baseRepository'

import { PeopleContracts } from '../../models/people/contract'
import { PeopleModel } from '../../models/people/model'

export class CreatePersonRepository extends BaseRepository {
  private async getCreated(): Promise<PeopleModel.Base> {
    const sql = `
      SELECT 
        *
      FROM
        people
      ORDER BY
        id
      DESC
      LIMIT 1
    `
    let person: any = await this.get<PeopleModel.Base>(sql)
    if (!person) 
      throw new Error('Not found')

    person = mapKeys(person, (v, k) => camelCase(k))
    
    
    return person
  }

  async execute({ personToCreate, campaignId }: PeopleContracts.Inputs.ToCreatePerson): Promise<PeopleModel.Base> {
    const sql = `
      INSERT INTO 
        people (name, phone, campaign_id, is_allowed)
        values (?, ?, ?, ?)
    `
    this.run(sql, [personToCreate.name, personToCreate.phone, campaignId, personToCreate.isAllowed])
    const person = await this.getCreated()

    return person
  }
}