import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

import ContactEmail from '../emails/contact'

export const GET = async () => {
  const email = ''
  const name = ''
  const message = ''

  await resend.sendEmail({
    from: 'pedrohenriquededeus@hotmail.com',
    to: 'pedrohfd.dev@gmail.com',
    subject: `Mensagem de ${name} - ${email}`,
    react: ContactEmail(),
  })

  return JSON.stringify({ message: 'Email sent' })
}
