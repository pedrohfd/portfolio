import {
  Root,
  Field,
  Label,
  Control,
  Message,
  Submit,
} from '@radix-ui/react-form'

export const EmailSection = () => {
  const inputStyles =
    'border rounded-lg text-neutral-800 dark:text-zinc-50 border-neutral-800 outline-none transition-colors bg-zinc-50 dark:bg-neutral-800 dark:border-zinc-50'

  const labelStyles =
    'text-lg font-inter font-medium text-neutral-800 dark:text-zinc-50 transition-colors'

  return (
    <div id='email-section' className='px-12 pb-16'>
      <h1 className='mb-16 text-4xl text-center transition-colors font-familjen text-neutral-800 dark:text-zinc-50'>
        Contact me
      </h1>

      <Root className='flex flex-col gap-4'>
        <Field name='name' className='flex flex-col gap-1'>
          <section className='flex items-center justify-between'>
            <Label className={labelStyles}>Full name</Label>

            <Message
              className={`${labelStyles} text-base text-red-500`}
              match='valueMissing'
            >
              Enter your name
            </Message>

            <Message
              className={`${labelStyles} text-base text-red-500`}
              match='patternMismatch'
            >
              Please provide a valid name
            </Message>
          </section>

          <Control type='text' required asChild>
            <input
              type='text'
              pattern="[A-Za-zÀ-ÿ\s']+"
              className={`${inputStyles} py-2`}
            />
          </Control>
        </Field>

        <Field name='email' className='flex flex-col gap-1'>
          <section className='flex items-center justify-between'>
            <Label className={labelStyles}>Email</Label>

            <Message
              className={`${labelStyles} text-base text-red-500`}
              match='valueMissing'
            >
              Enter your email
            </Message>
          </section>

          <Control type='email' required asChild>
            <input type='text' className={`${inputStyles} py-2`} />
          </Control>
        </Field>

        <Field name='message' className='flex flex-col gap-1'>
          <section className='flex items-center justify-between'>
            <Label className={labelStyles}>Message</Label>

            <Message
              className={`${labelStyles} text-base text-red-500`}
              match='valueMissing'
            >
              Enter your message
            </Message>
          </section>

          <Control type='message' required asChild>
            <textarea className={`${inputStyles} resize-none h-28`} />
          </Control>
        </Field>

        <Submit asChild>
          <button
            type='submit'
            className='py-4 mt-6 text-lg font-medium transition-colors rounded-lg font-inter bg-neutral-800 text-zinc-50 dark:bg-zinc-50 dark:text-neutral-800'
          >
            Send
          </button>
        </Submit>
      </Root>
    </div>
  )
}
