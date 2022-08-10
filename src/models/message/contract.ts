export namespace MessageContract {
  export namespace Inputs {
    export interface ToSend {
      id: number
      msg?: string
    }
  }

  export namespace Outputs {
  }

  export interface SendMessageService {
    execute(input: Inputs.ToSend): Promise<void>
  }
}
