import { object, string, mixed, number } from 'yup'

const SendAllContactsSchema = object({
  id: number().required(),
  msg: string().required(),
  file: mixed().notRequired(),
  fileMsg: string().notRequired()
})

interface SendData {
  id: number
  msg: string
  file?: Express.Multer.File
  fileMsg?: string
}

export class SendAllContactsDto {
  constructor (
    public id: number,
    public msg: string,
    public file?: Express.Multer.File,
    public fileMsg?: string
  ) {}
  
  static from (data: SendData) {
    const { id, msg, file, fileMsg } = SendAllContactsSchema.validateSync(data)
    return new SendAllContactsDto(id, msg, file, fileMsg)
  }
}
