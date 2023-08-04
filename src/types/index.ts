export interface Draft {
  title: string
  description: string
  image: string
  source: {
    text: string
    link: string
  }
  technologies: string[]
  demo: {
    text: string
    link: string
  }
}

export interface HeaderProps {
  handleToggleTheme: () => void
  theme?: 'light' | 'dark'
}

export interface ThemeProps {
  actualTheme?: 'light' | 'dark'
  theme: Theme
}

interface Theme {
  // responsive breakpoints
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  }

  // background and logo
  logoWeb: string
  logoMobile: string
  bgColor: string

  // header
  headerTextColor: string
  headerTextHover: string
  headerDropdown: string

  // texts
  titleTextColor: string
  roleTextColor: string
  summaryTextColor: string

  // buttons
  buttonTextPrimary: string
  buttonTextSecondary: string
  buttonColor: string
  buttonColorHover: string

  // projects
  projectCardBorder: string
  projectCardIcon: string
  projectCardButtonBorder: string
}
