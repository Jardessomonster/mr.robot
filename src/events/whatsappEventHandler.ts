import { Whatsapp } from 'venom-bot'

import { misunderstood } from './common/misunderstood'
import { greetings } from './greetings'
import { replyGreetings } from './replyGreetings'

export const eventHandler = async (client: Whatsapp) => {
  await client.onMessage(async (msg) => {
    if (msg.isGroupMsg)
      return

    const conversations = await client.getAllMessagesInChat(msg.from, true, true)

    if (conversations?.length < 3)
      return greetings(client, msg.from)

    if (msg.quotedMsgObj?.isDynamicReplyButtonsMsg)
      return replyGreetings(client, msg)

    return misunderstood(client, msg.from)
  })
}
