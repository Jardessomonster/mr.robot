import { PeopleModel } from '../../models/people/model'

import { BaseRepository } from '../common/baseRepository'

export class ListPeopleRepository extends BaseRepository {
  async execute(campaign_id: number) {
    const sql = `
      SELECT
        *
      FROM
        people
      WHERE
        campaign_id = ?
    `
    
    const people = await this.all<PeopleModel.Base>(sql, [campaign_id])
    return people
  }
}
