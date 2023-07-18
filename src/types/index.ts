export interface HomeProps {
  handleToggleTheme: () => void
  theme: 'light' | 'dark'
  translation: Translations
}

export interface HeaderProps {
  handleToggleTheme: () => void
  handleChangeLanguage: (state: string) => void
  theme: 'light' | 'dark'
  translation: Language
}

export interface ThemeProps {
  actualTheme: 'light' | 'dark'
  theme: {
    logoWeb: string
    logoMobile: string
    headerTextColor: string
    bgColor: string
    titleTextColor: string
    roleTextColor: string
  }
}

export interface Language {
  language: string
  header: {
    home: string
    projects: string
    about: string
    contact: string
  }
  presentation: string
  role: string
}

export interface Translations {
  pt: Language
  en: Language
}
