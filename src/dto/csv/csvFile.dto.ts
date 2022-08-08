import { readFileSync } from 'fs'

import { PeopleModel } from '../../models/people/model'

export class CsvFileDto {
  // TODO: remove recol name mock
  static read(path: string): PeopleModel.ToCreate[] {
    const file = readFileSync(path, 'utf-8')
    const numbers = file.split('\n').map(
      (number): PeopleModel.ToCreate => {
        const phone = Number(number.trim())
        return {
          phone,
          name: 'Recol Customer'
        }
      }
    )

    return numbers    
  }
}
