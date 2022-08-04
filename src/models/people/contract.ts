export namespace PeopleContracts {
  export namespace Inputs {
    export interface ToCreateNumbers {
      file: string
      name?: string
    }
  }

  export namespace Outputs {
  }

  export interface CreateNumbersByCsv {
    execute(input: Inputs.ToCreateNumbers): Promise<void>
  }
}
