import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { darkTheme, lightTheme } from './styles/theme'
import { useState } from 'react'
import { GlobalStyle } from './styles/globalStyles'

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const handleToggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Home handleToggleTheme={handleToggleTheme} theme={theme} />
    </ThemeProvider>
  )
}

export default App
