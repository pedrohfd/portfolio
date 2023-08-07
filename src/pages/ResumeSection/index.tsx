import resume from '../../assets/svg/resume.svg'

export const ResumeSection = () => {
  return (
    <div className='flex flex-col items-center pt-24'>
      <h1 className='mb-12 text-4xl transition-colors lg:mb-28 font-familjen text-neutral-800 dark:text-zinc-50'>
        My resume
      </h1>

      <section className='flex justify-center w-full px-5'>
        <img
          src={resume}
          alt='resume'
          className='lg:w-[60rem] transition-colors shadow-lg dark:shadow-zinc-600'
        />
      </section>
    </div>
  )
}
