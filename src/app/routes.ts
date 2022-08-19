import multer from 'multer'
import path from 'path'
import Router from 'express-promise-router'
import { Whatsapp } from 'venom-bot'

import { MakeRequest } from '../middlewares/makeRequest'

import { 
  CreateDto,
  SendDto
} from '../dto'

import { 
  CreateController,
  ListCampaignController,
  SendController
} from '../controllers'

const config = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './tmp/img/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: config
})

export const entryPoint = (client: Whatsapp) => {
  const router = Router()

  router.get('/health', (_, res) => {
    res.status(200).json('Ok')
  })

  router.get(
    '/list',
    new ListCampaignController().handler
  )

  router.post(
    '/people',
    MakeRequest.make(CreateDto),
    new CreateController().handler
  )

  router.post(
    '/send-to-campaign',
    upload.single('file'),
    MakeRequest.make(SendDto),
    new SendController(client)
      .handler
      .bind(new SendController(client))
  )

  // router.get('/get-all', async (_, res) => {
  //   const people = await new ListPeopleRepository().execute()
  //   if (!people.length)
  //     return res.status(404)

  //   const contacts = people.map(async (person) => {
  //     const number = person.phone.slice(0, 2).concat(person.phone.slice(3, person.phone.length - 2))

  //     if (number.length >= 10) {
  //      const contact = await client.getNumberProfile(`55${number}@c.us`)
  //      return contact
  //     }
  //   })

  //   let response = await Promise.all(contacts)
  //   response = response.filter((resp: any | undefined) => !(resp && resp?.erro ))
    
  //   return res.status(200).json({ body: response })
  // })

  return router
}
