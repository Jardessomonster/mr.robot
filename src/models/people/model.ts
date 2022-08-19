export namespace PeopleModel {
  export interface Base {
    id: number
    name: string
    phone: string
  }

  export type ToCreate = Base

  export type FromCsv = Partial<Base>
}
