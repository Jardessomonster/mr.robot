import { CampaignModel } from "../campaign/model"
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

    export interface ToCreatePerson {
      personToCreate: PeopleModel.ToCreate
      campaignId: number
    }

    export interface ToSetAllow {
      isAllowed: boolean
      phone: string
      campaignId: number
    }
  }

  export namespace Outputs {
  }

  export interface CreateNumbersByCsv {
    execute(input: Inputs.ToCreateNumbers): Promise<void>
  }

  export interface ListCreated {
    execute(): Promise<CampaignModel.Base[]>
  }

  export interface CreatePerson {
    execute(input: Inputs.ToCreatePerson): Promise<void>
  }
}
