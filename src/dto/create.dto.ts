import { object, string } from 'yup'

const CreateSchema = object({
  file: string().required(),
  name: string().optional(),
})

interface Create {
  file?: string
  name?: string
}

export class CreateDto {
  constructor (
    public file: string,
    public name?: string
  ) {}
  
  static from (data: Create) {
    const { file, name } = CreateSchema.validateSync(data)
    return new CreateDto(file, name)
  }
}
