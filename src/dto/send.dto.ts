import { object, string, number, mixed } from 'yup'

const SendSchema = object({
  id: number().required(),
  msg: string().required(),
  file: mixed().notRequired()
})

interface SendData {
  id: number
  msg: string
  file?: Express.Multer.File
}

export class SendDto {
  constructor (
    public id: number,
    public msg: string,
    public file?: Express.Multer.File
  ) {}
  
  static from (data: SendData) {
    const { id, msg, file } = SendSchema.validateSync(data)
    return new SendDto(id, msg, file)
  }
}
