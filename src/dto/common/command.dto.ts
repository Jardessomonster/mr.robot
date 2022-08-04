import { Command, CommandFromTerminal } from '../../app/@types/commands'
import { getCreateArgs, getSendArgs } from '../../helpers/getArgs'

export class CommandDto {
  
  static from (commands: CommandFromTerminal): Command {
    const command = {} as Command
    const [
      base,
      arg1,
      value1,
      arg2,
      value2
    ] = commands

    switch (base) {
      case 'create':
        command.create = getCreateArgs(arg1, value1, arg2, value2)
        break
      case 'send':
        command.send = getSendArgs(arg1, value1, arg2, value2)
        break
      case 'list':
        command.list = 'list'
        break
    }

    return command
  }
}
