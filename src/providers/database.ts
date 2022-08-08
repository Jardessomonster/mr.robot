import { Database, OPEN_READWRITE } from 'sqlite3'

import { CreateDatabaseRepository } from '../repositories/createDatabase'

import logger from '../helpers/logger'

export class SqliteDB {
  constructor(
    private readonly databasePath = process.env.DATABASE_PATH ?? './messenger.db'
  ) {

  }
  private connect(): Database {
    const db = new Database(
      this.databasePath,
      OPEN_READWRITE,
      (err) => {
        if (err) {
          logger.error(`Database not found`)
          logger.log(`Creating one...`)
          return new CreateDatabaseRepository().execute()
        }
        logger.success(`Connected to the database`)
      }
    )

    return db
  }

  get connection() {
    return this.connect()
  }
}
