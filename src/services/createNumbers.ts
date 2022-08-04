import { PeopleContracts } from '../models/people/contract'

export class CreateNumebersService implements PeopleContracts.CreateNumbersByCsv{
  async execute({ file, name }: PeopleContracts.Inputs.ToCreateNumbers): Promise<void> {
    
  }
}
