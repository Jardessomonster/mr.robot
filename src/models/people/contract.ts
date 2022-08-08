import { PeopleModel } from "./model"

export namespace PeopleContracts {
  export namespace Inputs {
    export interface ToCreateNumbers {
      file: string
      name?: string
    }

    export interface ToCreatePeople {
      peopleToCreate: PeopleModel.ToCreate[]
      campaignId: number
    }
  }

  export namespace Outputs {
  }

  export interface CreateNumbersByCsv {
    execute(input: Inputs.ToCreateNumbers): Promise<void>
  }
}
