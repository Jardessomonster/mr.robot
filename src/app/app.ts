import { CreateCommand } from '../commands/create'

import { CommandDto } from '../dto/common/command.dto'

import { SqliteDB } from '../providers/database'

import { Command } from './@types/commands'

import logger from '../helpers/logger'

import { SendCommand } from '../commands/send'
import { ListCommand } from '../commands/list'
import { HelpCommand } from '../commands/help'

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
        await new CreateCommand().execute(create)
        return
      }
      else if (send) {
        await new SendCommand().execute(send)
        return
      }
      else if (list) {
        await new ListCommand().execute()
        return
      }

      new HelpCommand().execute()
    }
    catch (err) {
      logger.error('Error: ', err)
      new HelpCommand().execute()
    }
  }
}

;(async () => {
  const db = new SqliteDB().connection
  logger.success(`Connected to the database`)
  db.close()
  // wait in case of first run
  await new Promise(resolve => setTimeout(resolve, 1000))

  const commandFromTerminal: any = process.argv.splice(2)
  const command = CommandDto.from(commandFromTerminal)

  const mapper = new CliMapper()
  await mapper.getCommand(command)
}) ()
