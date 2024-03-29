import { object, string, mixed, number } from 'yup'

const SendSchema = object({
  id: number().required(),
  phone: string().required(),
  msg: string().required(),
  file: mixed().notRequired(),
  fileMsg: string().notRequired()
})

interface SendData {
  id: number
  phone: string
  msg: string
  file?: Express.Multer.File
  fileMsg?: string
}

export class SendDto {
  constructor (
    public id: number,
    public phone: string,
    public msg: string,
    public file?: Express.Multer.File,
    public fileMsg?: string
  ) {}
  
  static from (data: SendData) {
    const { id, phone, msg, file, fileMsg } = SendSchema.validateSync(data)
    return new SendDto(id, phone, msg, file, fileMsg)
  }
}
