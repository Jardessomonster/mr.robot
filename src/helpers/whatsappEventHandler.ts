import { Whatsapp } from 'venom-bot'

const buttons = [
  {
    "buttonText": {
      "displayText": "Sim"
      }
    },
  {
    "buttonText": {
      "displayText": "Não"
      }
    }
]

export const eventHandler = async (client: Whatsapp) => {
 await client.onMessage(async (msg) => {
    if (msg.isGroupMsg)
      return

    const conversations = await client.getAllMessagesInChat(msg.from, true, true)

    if (conversations.length < 3)
      client.sendButtons(
        msg.from,
        'Olá, me chamo Mr Robot, sou um robô de propaganda', 
        buttons,
        'Deseja receber minhas mensagens?'
      )

    if (msg.quotedMsgObj?.isDynamicReplyButtonsMsg) {
      msg.body === 'Sim'
        ? client.sendText(msg.from, 'Maravilha, fico muito feliz que queira ser meu amigo :)')
        : client.sendText(msg.from, 'Que triste, irei superar ;-;')
    }
  })
}
