import { Home } from './pages/Home'
import { useState } from 'react'
import { Header } from './components/Header'
import { Projects } from './pages/Projects'
import './styles/global.css'

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
    <>
      <Header handleToggleTheme={handleToggleTheme} theme={theme} />
      <Home />

      <Projects />
    </>
  )
}

export default App
