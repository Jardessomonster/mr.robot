import { Create } from '../app/@types/commands'

import { CreateNumbersDto } from '../dto/createNumbers.dto'

import { CreateNumebersService } from '../services/createNumbers'

export class CreateNumbersCommand {
  async execute (data: Create): Promise<void> {
    const { file, name } = CreateNumbersDto.from(data)
    new CreateNumebersService().execute({ file, name })
  }
}
