import resume from '../../assets/svg/resume.svg'
import { Root, Trigger, Portal, Content, Arrow } from '@radix-ui/react-popover'

export const ResumeSection = () => {
  return (
    <div className='flex flex-col items-center pt-24'>
      <h1 className='mb-12 text-4xl transition-colors lg:mb-28 font-familjen text-neutral-800 dark:text-zinc-50'>
        My resume
      </h1>

      <section className='flex flex-col w-full px-5'>
        <img
          src={resume}
          alt='resume'
          className='lg:w-[60rem] transition-colors self-center shadow-lg dark:shadow-zinc-600'
        />

        <Root>
          <Trigger asChild>
            <button className='relative lg:w-[60rem] lg:self-center text-lg text-center transition-colors rounded-full shadow-lg mt-14 h-11 font-inter font-medium bg-neutral-800 group dark:shadow-zinc-600 dark:bg-zinc-50'>
              <div className='absolute top-0 left-0 w-full h-full overflow-hidden text-zinc-50 dark:text-neutral-800'>
                <p className='absolute top-0 flex items-center justify-center w-full h-full overflow-hidden transition-all group-hover:-top-full '>
                  Download CV
                </p>
                <span className='absolute left-0 flex items-center justify-center w-full h-full overflow-hidden transition-all group-hover:top-0 top-full'>
                  <svg
                    aria-hidden='true'
                    role='img'
                    width='2rem'
                    height='2rem'
                    preserveAspectRatio='xMidYMid meet'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17'
                    ></path>
                  </svg>
                </span>
              </div>
            </button>
          </Trigger>

          <Portal>
            <Content
              side='bottom'
              className='flex flex-col p-4 transition-colors rounded-lg shadow-lg bg-neutral-800 dark:bg-zinc-50 dark:shadow-zinc-700 will-change-[transform,opacity] data-[state=open]:animate-slideUpAndFade'
              sideOffset={16}
            >
              <Arrow className='-mt-px transition-colors fill-neutral-800 dark:fill-zinc-50' />
              <button className='px-16 py-2 text-lg font-medium text-center transition-colors rounded-full font-inter dark:bg-neutral-800 dark:text-zinc-50 bg-zinc-50 text-zinc-800 hover:bg-zinc-200 dark:hover:bg-neutral-700'>
                PT-BR
              </button>
              <button className='px-16 py-2 mt-3 text-lg font-medium text-center transition-colors rounded-full font-inter dark:bg-neutral-800 dark:text-zinc-50 bg-zinc-50 text-zinc-800 hover:bg-zinc-200 dark:hover:bg-neutral-700'>
                EN
              </button>
            </Content>
          </Portal>
        </Root>
      </section>
    </div>
  )
}
