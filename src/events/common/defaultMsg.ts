import { Whatsapp } from 'venom-bot'

import logger from '../../utils/logger'

const DEFAULT_MSG = `Fico feliz em saber que tens interesse em conhecer mais sobre o robô.

Por favor, entre em contato comigo, me chamo Jardesson Eduardo, tenho 21 anos sou original do estado do Acre e criador do Mr Robot,
caso tenha interesse em conhecer melhor o produto e talvez negociar essa solução para o seu negócio, é só chamar ;)

* email: jrjardeson@gmail.com
`

const DEFAULT_IMG = 'tmp/img/default.jpg'

export const defaultMsg = async (client: Whatsapp, to: string) => {
  await client.sendImage(
    to,
    DEFAULT_IMG,
    'image',
    DEFAULT_MSG
  )
  .then((msg) => logger.success('Message sended', msg))
  .catch(error => logger.error('Error: ', error))
}
