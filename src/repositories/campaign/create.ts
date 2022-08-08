import { CampaignModel } from '../../models/campaign/model'

import { BaseRepository } from '../common/baseRepository'

export class CreateCampaignRepostiory extends BaseRepository {
  private async getCreated(): Promise<CampaignModel.Base> {
    const sql = `
      SELECT 
        *
      FROM
        campaign
      ORDER BY
        id
        DESC
    `
    const campaign = await this.get<CampaignModel.Base>(sql)
    if (!campaign) 
      throw new Error('Not found')
    
    return campaign
  }

  async execute({ name }: CampaignModel.ToCreate): Promise<CampaignModel.Base> {
    const sql = `
      INSERT INTO 
        campaign (name)
        values(?)
    `
    this.run(sql, [name])
    const campaign = await this.getCreated()

    return campaign
  }
}
