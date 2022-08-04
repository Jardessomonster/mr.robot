import { object, string } from 'yup'

const CreateNumberSchema = object({
  file: string().required(),
  name: string().optional(),
})

interface CreateNumber {
  file?: string
  name?: string
}

export class CreateNumbersDto {
  constructor (
    public file: string,
    public name?: string
  ) {}
  
  static from (data: CreateNumber) {
    const { file, name } = CreateNumberSchema.validateSync(data)
    return new CreateNumbersDto(file, name)
  }
}
