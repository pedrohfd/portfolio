import { useEffect, useRef } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'

import { HeaderProps } from '../../types'

import lightLinkedinIcon from '../../assets/lotties/linkedin/light-linkedin.json'
import darkLinkedinIcon from '../../assets/lotties/linkedin/dark-linkedin.json'
import lightGithubIcon from '../../assets/lotties/github/light-github.json'
import darkGithubIcon from '../../assets/lotties/github/dark-github.json'
import lightWppIcon from '../../assets/lotties/wpp/light-wpp.json'
import darkWppIcon from '../../assets/lotties/wpp/dark-wpp.json'
import lightMailIcon from '../../assets/lotties/mail/light-mail.json'
import darkMailIcon from '../../assets/lotties/mail/dark-mail.json'
import lightSunMoonIcon from '../../assets/lotties/sun-moon/light-sun-moon.json'
import darkSunMoonIcon from '../../assets/lotties/sun-moon/dark-sun-moon.json'
import { isMobile } from 'react-device-detect'
import { HeaderButton } from '../HeaderButton'

export const Header = ({ handleToggleTheme, theme }: HeaderProps) => {
  const linkedinLottie = useRef<LottieRefCurrentProps>(null)
  const githubLottie = useRef<LottieRefCurrentProps>(null)
  const wppLottie = useRef<LottieRefCurrentProps>(null)
  const mailLottie = useRef<LottieRefCurrentProps>(null)
  const themeLottie = useRef<LottieRefCurrentProps>(null)

  const handleHoverEnter = (icon: string) => {
    if (isMobile) {
      return
    }

    switch (icon) {
      case 'linkedin':
        linkedinLottie.current?.setDirection(1)
        linkedinLottie.current?.play()
        break

      case 'github':
        githubLottie.current?.setDirection(1)
        githubLottie.current?.play()
        break

      case 'wpp':
        wppLottie.current?.setDirection(1)
        wppLottie.current?.play()
        break

      case 'mail':
        mailLottie.current?.setDirection(1)
        mailLottie.current?.play()
        break

      case 'theme':
        if (theme === 'light') {
          themeLottie.current?.setDirection(-1)
          themeLottie.current?.play()
        } else {
          themeLottie.current?.setDirection(1)
          themeLottie.current?.play()
        }
        break

      default:
        break
    }
  }

  const handleHoverLeave = (icon: string) => {
    if (isMobile) {
      return
    }

    switch (icon) {
      case 'linkedin':
        linkedinLottie.current?.setDirection(-1)
        linkedinLottie.current?.play()
        break

      case 'github':
        githubLottie.current?.setDirection(-1)
        githubLottie.current?.play()
        break

      case 'wpp':
        wppLottie.current?.setDirection(-1)
        wppLottie.current?.play()
        break

      case 'mail':
        mailLottie.current?.setDirection(-1)
        mailLottie.current?.play()
        break

      case 'theme':
        if (theme === 'light') {
          themeLottie.current?.setDirection(1)
          themeLottie.current?.play()
        } else {
          themeLottie.current?.setDirection(-1)
          themeLottie.current?.play()
        }
        break

      default:
        break
    }
  }

  useEffect(() => {
    linkedinLottie.current?.stop()
    githubLottie.current?.stop()
    wppLottie.current?.stop()
    mailLottie.current?.stop()

    if (theme === 'light') {
      themeLottie.current?.goToAndStop(14, true)
    }

    if (theme === 'dark') {
      themeLottie.current?.goToAndStop(0, true)
    }
  }, [theme])

  return (
    <header className='fixed flex justify-center w-full mt-2'>
      <div className='flex items-center gap-4 p-2 transition-colors border border-gray-200 rounded-full shadow-md bg-zinc-100 dark:bg-neutral-800'>
        <HeaderButton
          onMouseEnter={() => handleHoverEnter('linkedin')}
          onMouseLeave={() => handleHoverLeave('linkedin')}
          asChild
        >
          <a href='https://linkedin.com/in/pedrohfd' target='_blank'>
            <Lottie
              animationData={
                theme === 'light' ? lightLinkedinIcon : darkLinkedinIcon
              }
              lottieRef={linkedinLottie}
              autoPlay={false}
              loop={false}
              className='w-8 h-8'
            />
          </a>
        </HeaderButton>

        <HeaderButton
          onMouseEnter={() => handleHoverEnter('github')}
          onMouseLeave={() => handleHoverLeave('github')}
          asChild
        >
          <a href='https://github.com/pedrohfd' target='_blank'>
            <Lottie
              animationData={
                theme === 'light' ? lightGithubIcon : darkGithubIcon
              }
              lottieRef={githubLottie}
              autoPlay={false}
              loop={false}
              className='pt-1 w-9 h-9'
            />
          </a>
        </HeaderButton>

        <HeaderButton
          onMouseEnter={() => handleHoverEnter('wpp')}
          onMouseLeave={() => handleHoverLeave('wpp')}
          asChild
        >
          <a href='https://wa.me/5515991082862' target='_blank'>
            <Lottie
              animationData={theme === 'light' ? lightWppIcon : darkWppIcon}
              lottieRef={wppLottie}
              autoPlay={false}
              loop={false}
              className='w-7 h-7'
            />
          </a>
        </HeaderButton>

        <HeaderButton
          onMouseEnter={() => handleHoverEnter('mail')}
          onMouseLeave={() => handleHoverLeave('mail')}
        >
          <Lottie
            animationData={theme === 'light' ? lightMailIcon : darkMailIcon}
            lottieRef={mailLottie}
            autoPlay={false}
            loop={false}
            className='w-9 h-9'
          />
        </HeaderButton>

        <HeaderButton
          onClick={handleToggleTheme}
          onMouseEnter={() => handleHoverEnter('theme')}
          onMouseLeave={() => handleHoverLeave('theme')}
        >
          <Lottie
            animationData={
              theme === 'light' ? lightSunMoonIcon : darkSunMoonIcon
            }
            lottieRef={themeLottie}
            autoPlay={false}
            loop={false}
            className='w-7 h-7'
          />
        </HeaderButton>
      </div>
    </header>
  )
}
