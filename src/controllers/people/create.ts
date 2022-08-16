import { Response } from 'express'

import { BaseRequest } from '../../middlewares/makeRequest'

import { CreateDto } from '../../dto'

import { CreateService } from '../../services/create'

export class CreateController {
  async handler(req: BaseRequest<CreateDto>, res: Response) {
    await new CreateService().execute(req.body)
    return res.status(204).json()
  }
}
