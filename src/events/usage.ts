import { Whatsapp } from 'venom-bot'

import logger from '../utils/logger'

const USAGE_MESSAGE = `COMANDOS DISPONÍVEIS:

!AJUDA: Escrevendo esse comando você receberá uma lista com os comandos disponíveis\r\n
!HUMANO: Escrevendo esse comando um humano será acionado para lhe ajudar\r\n
!INCRICAO: Escrevendo esse comando você receberá a opção de se inscrever ou desinscrever do recebimento de mensagens\r\n`

export const usage = (client: Whatsapp, to: string) => {
  client.sendText(
    to,
    USAGE_MESSAGE
  )
  .then(msg => logger.success('Message sended: ', msg))
  .catch(error => logger.error('Error: ', error))
}
