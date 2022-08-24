import { number, object, string } from 'yup'

const CreateSchema = object({
  phone: string().required(),
  name: string().required(),
})

interface Create {
  phone: string
  name: string
}

export class CreateHumanDto {
  constructor (
    public phone: string,
    public name: string,

  ) {}
  
  static from (data: Create) {
    const { phone, name } = CreateSchema.validateSync(data)
    return new CreateHumanDto(phone, name)
  }
}
