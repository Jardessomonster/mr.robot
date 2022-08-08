export namespace PeopleModel {
  export interface Base {
    name: string
    phone: number
  }

  export type ToCreate = Base

  export type FromCsv = Partial<Base>
}
