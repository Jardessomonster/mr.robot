import { Create } from '../app/@types/commands'

import { CreateNumbersDto } from '../dto/createNumbers.dto'
import logger from '../helpers/logger'

import { CreateNumebersService } from '../services/createNumbers'

export class CreateNumbersCommand {
  async execute (data: Create): Promise<void> {
    const { file, name } = CreateNumbersDto.from(data)
    const createService = new CreateNumebersService()
  }
}