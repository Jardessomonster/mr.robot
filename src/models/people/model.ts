export namespace PeopleModel {
  export interface Base {
    id: number
    name: string
    phone: string
    isAllowed?: boolean
  }

  export type ToCreate = Omit<Base, 'id'>

  export type FromCsv = Partial<Base>
}
