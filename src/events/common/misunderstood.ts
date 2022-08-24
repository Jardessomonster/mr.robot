import { Whatsapp } from 'venom-bot'
import logger from '../../utils/logger'


export const misunderstood = (client: Whatsapp, to: string) => {
  client.sendText(
    to,
    'Desculpe mas não fui capaz de entender...'
  )
  .then((msg) => logger.success('Message sended', msg))
  .catch(error => logger.error('Error: ', error))
}
