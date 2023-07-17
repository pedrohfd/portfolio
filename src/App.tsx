import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { darkTheme, lightTheme } from './styles/theme'
import { useState } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import data from '../language.json'

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const handleToggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Home
        handleToggleTheme={handleToggleTheme}
        theme={theme}
        translation={data}
      />
    </ThemeProvider>
  )
}

export default App
