import { motion, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import lightArrow from '../../assets/lotties/arrow/light-arrow.json'
import darkArrow from '../../assets/lotties/arrow/dark-arrow.json'
import { isMobile } from 'react-device-detect'

interface GoToTopButtonProps {
  theme: 'light' | 'dark'
}

export const GoToTopButton = ({ theme }: GoToTopButtonProps) => {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  const arrowLottie = useRef<LottieRefCurrentProps>(null)

  const handleHoverEnter = () => {
    if (isMobile) {
      return
    }

    arrowLottie.current?.playSegments([70, 150], true)
  }

  const handleHoverLeave = () => {
    if (isMobile) {
      return
    }

    arrowLottie.current?.setDirection(-1)
    arrowLottie.current?.play()
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleGetScrollPosition = () => {
    const scrolled = document.documentElement.scrollTop

    if (scrolled > 600) {
      setIsVisible(true)
    } else if (scrolled <= 600) {
      setIsVisible(false)
    }
  }

  window.addEventListener('scroll', handleGetScrollPosition)

  return (
    <motion.button
      className='fixed z-10 flex items-center justify-center w-16 h-16 rounded-full bottom-6 right-6 bg-neutral-800 dark:bg-zinc-50'
      style={{ translateX: 100 }}
      animate={{ translateX: isVisible ? 0 : 100 }}
      onClick={handleScrollToTop}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <motion.svg
        width='64'
        height='64'
        viewBox='0 0 64 64'
        className='bottom-6 right-6'
      >
        <motion.circle
          cx='32'
          cy='32'
          r='30'
          fill='none'
          className='stroke-2 stroke-zinc-50 dark:stroke-neutral-800'
          style={{ pathLength: scrollYProgress }}
        ></motion.circle>
      </motion.svg>
      <Lottie
        className='absolute rotate-[-90deg] h-9 w-9'
        animationData={theme === 'light' ? lightArrow : darkArrow}
        autoPlay={false}
        loop={false}
        lottieRef={arrowLottie}
      />
    </motion.button>
  )
}
