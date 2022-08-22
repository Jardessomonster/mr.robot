import { Database } from 'sqlite3'

import logger from '../utils/logger'

export class CreateDatabaseRepository {
  private createCampaign(db: Database) {
    const sql = `
      CREATE TABLE IF NOT EXISTS
        campaign (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT
        )
    `

    return db.run(sql)
  }

  private createPeople(db: Database) {
    const sql = `
      CREATE TABLE IF NOT EXISTS 
        people (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          phone TEXT,
          is_allowed BOOLEAN,
          campaign_id INTEGER NOT NULL,
          FOREIGN KEY (campaign_id)
            REFERENCES campaign (id)
        )
    `
    
    return db.run(sql)
  }

  public execute(): Database {
    const db = new Database(
      process.env.DATABASE_PATH ?? './messenger.db',
      (err) => {
        if (err) 
          logger.error(`Couldn't create the database`)
        
        this.createCampaign(db)
        this.createPeople(db)
        logger.success(`Database created successfully`)
      }
    )

    return db
  }
}
