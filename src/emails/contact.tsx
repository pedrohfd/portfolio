import {
  Body,
  Preview,
  Section,
  Text,
  Tailwind,
  Hr,
} from '@react-email/components'

interface AirbnbReviewEmailProps {
  authorName?: string
  authorImage?: string
  reviewText?: string
}

export const ContactEmail = () => {
  const authorName = 'Pedro'
  const reviewText = `“Zeno was a great guest! Easy communication, the apartment was left
    in great condition, very polite, and respectful of all house rules.
    He’s welcome back anytime and would easily recommend him to any
    host!”`
  const previewText = `Leia o email de ${authorName}`

  return (
    <Tailwind>
      <Preview>{previewText}</Preview>

      <Body
        style={main}
        className='flex flex-col items-center justify-center pt-24 bg-zinc-50'
      >
        <Section style={main}>
          <Text className='text-4xl font-bold text-left mx-auto text-zinc-700 w-[40rem]'>
            Aqui está o que {authorName} escreveu
          </Text>
          <Text className='w-[40rem] text-justify mx-auto mt-8 bg-zinc-200 rounded text-zinc-800 p-4 text-lg '>
            {reviewText}
          </Text>

          <Hr className='w-[42rem]' />
        </Section>
        <Section className='flex justify-center mt-4'>
          <Text className='inline text-4xl font-bold text-zinc-800'>ph</Text>
          <Text className='inline -ml-1 text-4xl font-bold text-violet-500'>
            .
          </Text>
        </Section>
      </Body>
    </Tailwind>
  )
}

export default ContactEmail

const main = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}
