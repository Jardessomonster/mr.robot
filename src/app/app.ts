import { CreateNumbersCommand } from '../commands/createNumbers'

import { CommandDto } from '../dto/common/command.dto'

import { SqliteDB } from '../providers/database'

import { Command } from './@types/commands'

import logger from '../helpers/logger'

import { SendMessageService } from '../services/twilio/sendMessage'

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
        new SendMessageService().execute()
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
  const db = new SqliteDB().connection
  db.close()
  // wait in case of first run
  await new Promise(resolve => setTimeout(resolve, 1000))

  const commandFromTerminal: any = process.argv.splice(2)
  const command = CommandDto.from(commandFromTerminal)

  const mapper = new CliMapper()
  await mapper.getCommand(command)
}) ()
