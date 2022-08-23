export enum DefaultIds {
  default = 1,
  humans = 2,
  newContacts = 3
}

export namespace CampaignModel {
  export interface Base {
    id: number
    name: string
  }

  export type ToCreate = Pick<Base, 'name'>
}