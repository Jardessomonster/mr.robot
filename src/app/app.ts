import { CreateNumbersCommand } from '../commands/createNumbers'
import { CommandDto } from '../dto/common/command.dto'
import logger from '../helpers/logger'
import { Command } from './@types/commands'

export class CliMapper {
  async getCommand(command: Command): Promise<void> {
    const {
      create,
      send,
      list
    } = command
    // mapping all actions
    try {
      if (create) {
        await new CreateNumbersCommand().execute(create)
      }
      else if (send) {
        
      }
      else if (list) {

      }
    }
    catch (err: any) {
      logger.error(`${err.message}`)
    }
  }
}

;(async () => {
  const commandFromTerminal: any = process.argv.splice(2)
  const command = CommandDto.from(commandFromTerminal)

  const mapper = new CliMapper()
  await mapper.getCommand(command)
}) ()
