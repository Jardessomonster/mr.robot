import { Whatsapp } from 'venom-bot'

const DEFAULT_MSG = `Meus amigos, minhas amigas quero humildemente de forma oficial dizer-lhes que fui desafiado, e como não costumo fugir da luta, coloquei meu nome para ser apreciado nas urnas eletrônicas. 

Sou candidato a deputado estadual nesta eleição. Sei que posso dar minha contribuição na educação, na saúde, na cultura, no esporte, na agricultura, e também com as crianças com necessidades especiais e principalmente com o povo murbanense de forma geral. 

Sou candidato para atuar como representante da população no legislativo estadual,  a vontade do povo é soberana e deve ser respeitada, foi isso que sempre fiz na minha carreira política. 

Estou pronto pro desafio, com muita humildade peço um voto de confiança do adolescente; do jovem; do senhor; da senhora; peço voto daqueles que ainda não têm candidato. Porém, caso você já tenha feito sua escolha, respeito e agradeço pela atenção. Democracia é isso, saber respeitar o contraditório. 

Vamos a luta, com a  benção de Deus e a força do povo. Izaute Vaz 51555`

const DEFAULT_IMG = 'tmp/img/default.jpeg'

export const defaultMsg = async (client: Whatsapp, to: string) => {
  await client.sendImage(
    to,
    DEFAULT_IMG,
    'izaute',
    DEFAULT_MSG
  )
}
