import { Whatsapp, Message } from 'venom-bot'

import { buttons } from './common/button'

const introduction = 'Olá, me chamo Mr Robot, sou um robô de propaganda'
const question = 'Deseja receber minhas mensagens?'

export const greetings = (client: Whatsapp, to: string) => {
  client.sendButtons(
    to,
    introduction, 
    buttons,
    question
  )

  return
}
