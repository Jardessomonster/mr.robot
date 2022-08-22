import { Whatsapp } from 'venom-bot'

export const misunderstood = (client: Whatsapp, to: string) => {
  client.sendText(
    to,
    'Desculpe mas não fui capaz de entender...'
  ).then((resp) => console.log(resp))
}
