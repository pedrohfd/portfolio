import { HeroSection } from './pages/HeroSection'
import { useState } from 'react'
import { Header } from './components/Header'
import { Projects } from './pages/Projects'
import './styles/global.css'
import { GoToTopButton } from './components/GoToTopButton'

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const handleToggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle('dark')

    if (html.classList.contains('dark')) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <main className='transition-colors bg-zinc-50 dark:bg-zinc-800'>
      <Header handleToggleTheme={handleToggleTheme} theme={theme} />
      <HeroSection />

      <Projects />

      <GoToTopButton theme={theme} />
    </main>
  )
}

export default App
