export interface HomeProps {
  handleToggleTheme: () => void
  theme: 'light' | 'dark'
  translation: Translations
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

interface Language {
  language: string
  header: {
    home: string
    projects: string
    about: string
    resume: string
  }
}

export interface Translations {
  pt: Language
  en: Language
}
