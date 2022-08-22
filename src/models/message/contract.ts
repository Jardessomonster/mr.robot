import { PeopleModel } from "../people/model"

export namespace MessageContract {
  export namespace Inputs {
    export interface ToSend {
      person: PeopleModel.Base
      msg: string
      file?: string
      fileMsg?: string
    }

    export interface ToSendAllContacts {
      campaignId: number
      msg: string
      file?: string
      fileMsg?: string
    }
  }

  export namespace Outputs {
  }

  export interface SendMessageService {
    execute(input: Inputs.ToSend): Promise<void>
  }

  export interface SendMessageToAllService {
    execute(input: Inputs.ToSendAllContacts): Promise<void>
  }
}
