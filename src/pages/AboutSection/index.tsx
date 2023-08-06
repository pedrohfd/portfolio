import { HandwriteArrow } from '../../assets/svg/HandwriteArrow'

export const AboutSection = () => {
  return (
    <div className='px-12 pt-20 transition-colors bg-zinc-50 dark:bg-neutral-800'>
      <section>
        <h1 className='w-24 text-4xl transition-colors font-familjen text-zinc-800 dark:text-zinc-50'>
          A bit about me
        </h1>

        <HandwriteArrow className='h-12 transition-colors w-44 text-zinc-800 dark:text-zinc-50' />
      </section>

      <p className='mt-10 text-xl transition-colors font-inter text-zinc-700 dark:text-zinc-100'>
        Hey! I'm a 22-year-old frontend developer with 3 years of experience. I
        specialize in React.js and React Native, crafting smooth animations with
        Framer Motion, Moti, and Keyframes. I'm all about responsive design and
        use Redux and Zustand for state management. Clean code, agile practices,
        and Styled Components with Tailwind are my go-to. Testing is crucial to
        me, covering both unit tests and E2E. Let's create something awesome
        together!
      </p>
    </div>
  )
}
