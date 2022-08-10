import { Create } from '../app/@types/commands'

import { CreateDto } from '../dto/create.dto'

import { CreateService } from '../services/create'

export class CreateCommand {
  async execute (data: Create): Promise<void> {
    const { file, name } = CreateDto.from(data)
    await new CreateService().execute({ file, name })
  }
}
