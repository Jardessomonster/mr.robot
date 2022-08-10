import logger from '../helpers/logger'

export class HelpCommand {
  execute(): void {
    logger.log('\nThis is a simple CLI program to send people messages through Whatsapp.')
    logger.log('\ncreate:')
    logger.log('\r\n      -f Indicates the csv file path     -n Indicates the name of the campaign')
    
    logger.log('\r\nlist:')
    logger.log('\r\n      No args required')

    logger.log('\r\nsend:')
    logger.log('\r\n      --id Indicates the id campaign      -m Indicates the messege you wanna send (dont forget using "")')
  }
}
