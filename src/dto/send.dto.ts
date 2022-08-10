import { object, string, number } from 'yup'

const SendSchema = object({
  id: number().required(),
  msg: string().required(),
})

interface SendData {
  id?: number
  msg?: string
}

export class SendDto {
  constructor (
    public id: number,
    public msg?: string
  ) {}
  
  static from (data: SendData) {
    const { id, msg } = SendSchema.validateSync(data)
    return new SendDto(id, msg)
  }
}
