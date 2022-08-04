export type BaseCommands = 
  | 'create'
  | 'list'
  | 'send'

export type Args = 
  | '-f'
  | '-n'
  | '-m'
  | '--id'

export type Value = string

export type CommandFromTerminal = [
  BaseCommands,
  Args?,
  Value?,
  Args?,
  Value?,
]

export type Command = {
  create?: Create
  list?: List
  send?: Send
}

export type Create = {
  file?: string
  name?: string
}

export type List = 'list'

export type Send = {
  id?: number
  msg?: string
}
