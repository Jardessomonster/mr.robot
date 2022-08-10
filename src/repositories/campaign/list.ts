import { CampaignModel } from '../../models/campaign/model'

import { BaseRepository } from '../common/baseRepository'

export class ListCampaignRepository extends BaseRepository {
  async execute() {
    const sql = `
      SELECT
        *
      FROM
        campaign
    `
    const campaign = await this.all<CampaignModel.Base>(sql)

    return campaign
  }
}
