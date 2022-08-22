import { readFileSync } from 'fs'

import { PeopleModel } from '../../models/people/model'

export class CsvFileDto {
  static read(path: string): PeopleModel.ToCreate[] {
    const file = readFileSync(path, 'utf-8')
    const numbers = file.split('\n').map(
      (number): PeopleModel.ToCreate => {
        const phone = number.trim()
        return {
          phone,
          name: 'Sem Nome'
        }
      }
    )

    return numbers    
  }
}
