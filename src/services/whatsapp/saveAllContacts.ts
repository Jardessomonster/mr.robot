import { Whatsapp } from 'venom-bot'

import { PeopleModel } from '../../models/people/model'

import { createManyPeopleQueue } from '../../helpers/createManyPeopleQueue'

export const saveAllContacts = async (client: Whatsapp) => {
  const contacts = await client.getAllContacts()

  const peopleToCreate: PeopleModel.ToCreate[] = contacts.map(contact => {
    const number = contact.id.user.slice(2)
    return {
      name: contact.name,
      phone: number
    }
  })

  await createManyPeopleQueue({
    peopleToCreate,
    campaignId: 1
  })
}
