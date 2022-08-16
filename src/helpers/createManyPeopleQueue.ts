import { promise } from 'fastq'

import { CreateManyPeopleRepository } from '../repositories/people/createMany'

export const createManyPeopleQueue = async (data: any) => {
  const queue = promise(worker, 1)
  await queue.push(data)
}

const worker = async (data: any) => {
  const createManyPeople = new CreateManyPeopleRepository()
  await createManyPeople.execute(data)
}
