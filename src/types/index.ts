export interface HomeProps {
  handleToggleTheme: () => void
  theme: 'light' | 'dark'
}

export interface ThemeProps {
  actualTheme: 'light' | 'dark'
  theme: {
    logoWeb: string
    logoMobile: string
    headerTextColor: string
    bgColor: string
  }
}
