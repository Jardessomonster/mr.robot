import { Response } from 'express'

import { BaseRequest } from '../../middlewares/makeRequest'


import { CreateService } from '../../services/people/create'
import { CreateHumanDto } from '../../dto/createHuman.dto'
import { DefaultIds } from '../../models/campaign/model'

export class CreateHumanController {
  async handler(req: BaseRequest<CreateHumanDto>, res: Response) {
    await new CreateService().execute({ personToCreate: req.body, campaignId: DefaultIds.humans})
    return res.status(204).json()
  }
}
