import { PeopleModel } from '../../models/people/model'

import { BaseRepository } from '../common/baseRepository'

import { mapKeys, camelCase } from 'lodash'

export class ListPeopleRepository extends BaseRepository {
  async execute(campaign_id: number): Promise<[] | PeopleModel.Base[]>{
    const sql = `
      SELECT
        *
      FROM
        people
      WHERE
        campaign_id = ?
    `
    
    let people: any[] = await this.all<PeopleModel.Base>(sql, [campaign_id])
    if (people.length) 
      people = people.map(person =>  mapKeys(person, (v, k) => camelCase(k)))
    
    return people
  }
}
