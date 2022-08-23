import { Whatsapp, Message } from 'venom-bot'

import {  
  greetings,
  replyGreetings, 
  misunderstood,
  usage
} from './'

export const eventHandler = async (client: Whatsapp) => {
  await client.onMessage(async (msg) => {
    if (msg.isGroupMsg)
      return

    let myMsgs: Message[] | undefined
    let myLastMsg: Message | undefined
    
    const conversations = await client.getAllMessagesInChat(msg.from, true, true)
    if (conversations?.length) {
      myMsgs = conversations.filter(msg => msg.fromMe)
      myLastMsg = myMsgs[myMsgs.length - 1]
    }

    if (conversations?.length < 3)
      return greetings(client, msg.from)

    if (msg.quotedMsgObj?.isDynamicReplyButtonsMsg)
      return replyGreetings(client, msg)

    if (msg.body.toUpperCase() === '!HUMANO')
      return 

    if (msg.body.toUpperCase() === '!INSCRICAO')
      return greetings(client, msg.from)

    if (myLastMsg?.body === 'Desculpe mas não fui capaz de entender...')
      return usage(client, msg.from)    

    return misunderstood(client, msg.from)
  })
}
