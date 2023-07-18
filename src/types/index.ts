export interface Translations {
  pt: Language
  en: Language
}

export interface Language {
  language: string
  header: {
    home: string
    projects: string
    about: string
    contact: string
  }
  home: {
    presentation: string
    role: string
    summary: string
    getInTouch: string
    resume: string
  }
  projects: {
    title: string
    drafts: Draft[]
  }
}

interface Draft {
  title: string
  description: string
  image: string
  link: string
  github: string
  technologies: string[]
  demo: string
}

export interface PageProps {
  translation: Language
}

export interface HeaderProps {
  handleToggleTheme: () => void
  handleChangeLanguage: (state: string) => void
  theme: 'light' | 'dark'
  translation: Language
}

export interface ThemeProps {
  actualTheme: 'light' | 'dark'
  theme: Theme
}

interface Theme {
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
}
