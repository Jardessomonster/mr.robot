import { object, string, number } from 'yup'

const SendSchema = object({
  id: number().required(),
  msg: string().required(),
  file: string().notRequired()
})

interface SendData {
  id: number
  msg: string
  file?: string
}

export class SendDto {
  constructor (
    public id: number,
    public msg: string,
    public file?: string
  ) {}
  
  static from (data: SendData) {
    const { id, msg, file } = SendSchema.validateSync(data)
    return new SendDto(id, msg, file)
  }
}
