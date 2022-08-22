import { Whatsapp, Message } from 'venom-bot'

import { defaultMsg } from './common/defaultMsg'

import { CreateService } from '../services/people/create'

import { IsAllowedRepository } from '../repositories/people/isAllowed'

import { formatFromWpp, formatToWpp } from '../helpers/formatPhoneNumber'

export const replyGreetings = async (client: Whatsapp, msg: Message) => {
  const phone = formatFromWpp(msg.from)

  await new CreateService().execute({
    personToCreate: {
      name: msg.notifyName ?? 'Sem nome',
      phone,
    },
    campaignId: 2
  })

  msg.body === 'Sim'
    ? await affirmative(client, msg, phone)
    : await negative(client, msg, phone)
}

const affirmative = async (client: Whatsapp, msg: Message, phone: string) => { 
  await new IsAllowedRepository().execute({
    isAllowed: true,
    phone,
    campaignId: 2
  })

  await defaultMsg(client, msg.from)

  await client.sendContactVcard(
    msg.from,
    formatToWpp('6899652210')
  )
}

const negative = async (client: Whatsapp, msg: Message, phone: string) => {
  await new IsAllowedRepository().execute({
    isAllowed: false,
    phone,
    campaignId: 2
  })

  await client.sendText(
    msg.from,
    'Caso mude de ideia, você ainda pode apertar sim! ;)'
  )
}
