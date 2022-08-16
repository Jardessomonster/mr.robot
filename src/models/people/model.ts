export namespace PeopleModel {
  export interface Base {
    name: string
    phone: string
  }

  export type ToCreate = Base

  export type FromCsv = Partial<Base>
}
