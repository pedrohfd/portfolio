import { createGlobalStyle } from 'styled-components'
import { ThemeProps } from '../types'

export const GlobalStyle = createGlobalStyle<Partial<ThemeProps>>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background-color: ${({ theme }) => theme.bgColor};
    transition: all .2s;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`
