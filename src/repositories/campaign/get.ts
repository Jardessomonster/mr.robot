import { CampaignModel } from '../../models/campaign/model'

import { BaseRepository } from '../common/baseRepository'

export class GetCampaignRepository extends BaseRepository {
  async execute(id: number) {
    const sql = `
      SELECT
        *
      FROM
        campaign
      WHERE
        id = ?
    `
    const campaign = await this.get<CampaignModel.Base>(sql, [id])

    return campaign
  }
}
