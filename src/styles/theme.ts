import logoWebLight from '../assets/logo-web-light.svg'
import logoWebDark from '../assets/logo-web-dark.svg'
import logoMobileLight from '../assets/logo-mob-light.svg'
import logoMobileDark from '../assets/logo-mob-dark.svg'
import { colors } from './colors'

export const darkTheme = {
  // responsive breakpoints
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },

  // background and logo
  logoWeb: `url(${logoWebDark})`,
  logoMobile: `url(${logoMobileDark})`,
  bgColor: colors.neutral[900],

  // header
  headerTextColor: colors.neutral[50],
  headerTextHover: colors.neutral[500],
  headerDropdown: colors.neutral[700],

  // texts
  titleTextColor: colors.neutral[100],
  roleTextColor: colors.purple[300],
  summaryTextColor: colors.neutral[200],

  // buttons
  buttonTextPrimary: colors.neutral[50],
  buttonTextSecondary: colors.neutral[900],
  buttonColor: colors.purple[300],
  buttonColorHover: colors.neutral[700],

  // projects
  projectCardBorder: colors.neutral[600],
  projectCardIcon: colors.neutral[50],
  projectCardButtonBorder: colors.neutral[500],
}

export const lightTheme = {
  // responsive breakpoints
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },

  // background and logo
  logoWeb: `url(${logoWebLight})`,
  logoMobile: `url(${logoMobileLight})`,
  bgColor: colors.neutral[50],

  // header
  headerTextColor: colors.neutral[800],
  headerTextHover: colors.neutral[500],
  headerDropdown: colors.neutral[200],

  // texts
  titleTextColor: colors.neutral[800],
  roleTextColor: colors.purple[900],
  summaryTextColor: colors.neutral[700],

  // buttons
  buttonTextPrimary: colors.neutral[900],
  buttonTextSecondary: colors.neutral[50],
  buttonColor: colors.purple[500],
  buttonColorHover: colors.neutral[300],

  // projects
  projectCardBorder: colors.neutral[200],
  projectCardIcon: colors.neutral[800],
  projectCardButtonBorder: colors.purple[500],
}
