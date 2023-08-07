import devLinks from '../../assets/devLinks.svg'
import spaceTourism from '../../assets/spaceTourism.svg'

export const ProjectsSection = () => {
  return (
    <div className='px-12'>
      <h1 className='pt-20 text-4xl font-bold transition-colors font-familjen dark:text-zinc-50 text-neutral-800'>
        Projects
      </h1>

      <section className='mt-20'>
        <img src={devLinks} alt='devLinks project' />

        <h2 className='mt-8 text-2xl font-semibold transition-colors text-neutral-800 font-familjen dark:text-zinc-50'>
          Dev Links
        </h2>

        <p className='my-6 text-xl transition-colors font-inter text-zinc-700 dark:text-zinc-100'>
          A linktree project developed using React.js and TypeScript, featuring
          light and dark modes, and fully responsive.
        </p>

        <span>
          <a
            href='https://dev-links-pedrohfd.vercel.app'
            target='__blank'
            className='text-xl transition-colors font-inter text-zinc-700 dark:text-zinc-100'
          >
            View project
          </a>
          <a
            href='https://github.com/pedrohfd/devLinks'
            target='__blank'
            className='ml-6 text-xl transition-colors font-inter text-zinc-700 dark:text-zinc-100'
          >
            View code
          </a>
        </span>
      </section>

      <section className='pb-32 mt-20'>
        <img src={spaceTourism} alt='spaceTourism project' />

        <h2 className='mt-8 text-2xl font-semibold transition-colors text-neutral-800 font-familjen dark:text-zinc-50'>
          Space Tourism
        </h2>

        <p className='my-6 text-xl transition-colors font-inter text-zinc-700 dark:text-zinc-100'>
          A project developed to study the implementation of responsiveness for
          desktop, tablet, and mobile devices.
        </p>

        <span>
          <a
            href='https://space-tourism-pedrohfd.vercel.app'
            target='__blank'
            className='text-xl transition-colors font-inter text-zinc-700 dark:text-zinc-100'
          >
            View project
          </a>
          <a
            href='https://github.com/pedrohfd/space-tourism'
            target='__blank'
            className='ml-6 text-xl transition-colors font-inter text-zinc-700 dark:text-zinc-100'
          >
            View code
          </a>
        </span>
      </section>
    </div>
  )
}
