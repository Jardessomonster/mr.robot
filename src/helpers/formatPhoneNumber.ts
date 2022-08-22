export const formatToWpp = (phone: string) => {
  return `55${phone}@c.us`
}

export const formatFromWpp = (phone: string) => {
  const [_, formatedPhone] = phone.split('@')[0].split('55')
  return formatedPhone
}
