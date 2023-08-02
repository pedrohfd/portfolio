import { Home } from './pages/Home'
import { useState } from 'react'
import translation from '../language.json'
import { Language } from './types'
import { Header } from './components/Header'
import { Projects } from './pages/Projects'
import './styles/global.css'

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [language, setLanguage] = useState<Language>(translation.pt)

  const handleToggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle('dark')

    if (html.classList.contains('dark')) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const handleSelectLanguage = (language: string) => {
    switch (language) {
      case 'PT':
        setLanguage(translation.pt)
        break
      case 'EN':
        setLanguage(translation.en)
        break
      default:
        setLanguage(translation.pt)
    }
  }

  return (
    <>
      <Header
        handleToggleTheme={handleToggleTheme}
        theme={theme}
        translation={language}
        handleChangeLanguage={handleSelectLanguage}
      />
      <Home translation={language} />

      <Projects translation={language} />
    </>
  )
}

export default App
