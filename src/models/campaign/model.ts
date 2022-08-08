export namespace CampaignModel {
  export interface Base {
    id: number
    name: string
  }

  export type ToCreate = Pick<Base, 'name'>
}