import { PeopleContracts } from '../../models/people/contract'

import { FindPeopleRepository } from '../../repositories/people/find'
import { CreatePersonRepository } from '../../repositories/people/create'

export class CreateService implements PeopleContracts.CreatePerson {
  async execute({ personToCreate, campaignId }: PeopleContracts.Inputs.ToCreatePerson): Promise<void> {
    const checkPerson = await new FindPeopleRepository().execute(personToCreate.phone, campaignId)

    if (checkPerson) 
      return

    await new CreatePersonRepository().execute({
      personToCreate,
      campaignId
    })
  }
}
