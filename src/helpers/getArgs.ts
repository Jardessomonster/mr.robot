import { Args, Create, Send } from "../app/@types/commands"
import { buildCreateArgs, buildSendArgs } from "./buildArgObject"

export const getCreateArgs = (
  arg1?: Args, 
  value1?: string,
  arg2?: Args,
  value2?: string
): Create => {
  let firstArg
  let secondArg
  if (!arg1 || !value1) {
    throw new Error()
  }
  firstArg = buildCreateArgs(arg1, value1)
  if (arg2 && value2) {
    secondArg = buildCreateArgs(arg2, value2)
  }
  return {
    ...firstArg,
    ...secondArg
  }
}

export const getSendArgs = (
  arg1?: Args, 
  value1?: string,
  arg2?: Args,
  value2?: string
): Send | undefined => {
  let firstArg
  let secondArg
  if (!arg1 || !value1) {
    throw new Error()
  }
  firstArg = buildSendArgs(arg1, value1)
  if (arg2 && value2) {
    secondArg = buildSendArgs(arg2, value2)
  }
  return {
    ...firstArg,
    ...secondArg
  }
}
