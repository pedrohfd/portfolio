import Lottie from 'lottie-react'
import avatar from '../../assets/images/avatar.png'
import pattern from '/pattern/pattern.svg'
import darkPatter from 'pattern/darkPattern.svg'

import confetti from '../../assets/lotties/confetti/confetti.json'

export const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen transition-all bg-center bg-pattern dark:bg-darkPattern'>
      <Lottie animationData={confetti} className='absolute' loop={false} />
      <section className='flex items-center justify-center w-32 h-32 rounded-full shadow-lg bg-zinc-50 dark:shadow-zinc-600'>
        <img src={avatar} alt='avatar' className='w-28 h-28' />
      </section>

      <h1 className='mt-4 text-5xl font-bold tracking-tight text-center transition-colors font-familjen text-neutral-800 dark:text-zinc-50'>
        Hey, I'm Pedro Henrique
      </h1>
      <h2 className='mt-4 text-2xl font-medium text-center transition-colors font-inter text-neutral-800 dark:text-zinc-50'>
        Front-end Developer
      </h2>
    </div>
  )
}
