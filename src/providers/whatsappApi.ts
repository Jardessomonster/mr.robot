import twilio from 'twilio'

export class WhatsappClient {

  private readonly authToken: string

  private readonly sid: string

  constructor() {
    this.authToken = process.env.AUTH_TOKEN ?? 'twilioToken'
    this.sid = process.env.ACCOUNT_SID ?? 'twilioSid'
  }

  private connect (): twilio.Twilio {
    const client = twilio(this.sid, this.authToken)
    return client
  }

  get connection () {
    return this.connect()
  }
}
