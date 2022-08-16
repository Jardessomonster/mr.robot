export const format = (phone: string) => {
  const number = phone.slice(0, 2).concat(phone.slice(3))
  return `55${number}@c.us`
}
