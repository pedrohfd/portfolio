import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { darkTheme, lightTheme } from './styles/theme'
import { useState } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import translation from '../language.json'
import { Language } from './types'
import { Header } from './components/Header'

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [language, setLanguage] = useState<Language>(translation.pt)

  const handleToggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header
        handleToggleTheme={handleToggleTheme}
        theme={theme}
        translation={language}
        handleChangeLanguage={handleSelectLanguage}
      />
      <Home translation={language} />
    </ThemeProvider>
  )
}

export default App
