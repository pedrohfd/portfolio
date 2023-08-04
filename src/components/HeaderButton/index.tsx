import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const HeaderButton = (props: ButtonProps) => {
  const Component = props.asChild ? Slot : 'button'

  return (
    <Component
      {...props}
      className='flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-neutral-800 dark:bg-zinc-50'
    />
  )
}
