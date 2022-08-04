import { Args, Create, Send } from '../app/@types/commands'

export const buildCreateArgs = (args: Args, value: string): Create | undefined => {
  const createArg = {} as Create

  switch (args) {
    case '-f':
      createArg.file = value
      break
    case '-n':
      createArg.name = value
      break   
  }

  return createArg
}
  

export const buildSendArgs = (args: Args, value: string): Send | undefined => {
  const sendArg = {} as Send

  switch (args) {
    case '--id':
      sendArg.id = Number(value)
      break
    case '-m':
      sendArg.msg = value
      break
  }

  return sendArg
}
