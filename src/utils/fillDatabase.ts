import { SqliteDB } from '../providers/database'

import { DefaultIds } from '../models/campaign/model'

import { CreateManyService } from '../services/people/createMany'

export const fillDatabase = async () => {
  const db = new SqliteDB().connection

  let defaultNames = Object.keys(DefaultIds)
  defaultNames = defaultNames.slice(defaultNames.length / 2)

  new CreateManyService().execute({
    file: 'tmp/phones.csv', 
    name: defaultNames[0]
  }).then(() => {
    const sql = `
      INSERT INTO
        campaign (name)
        values (?)
    `

    defaultNames = defaultNames.slice(1)
    defaultNames.forEach(name => {
      db.run(sql, [name])
    })
  })
}

fillDatabase()