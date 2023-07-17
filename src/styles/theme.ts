import logoWebLight from '../assets/logo-web-light.svg'
import logoWebDark from '../assets/logo-web-dark.svg'
import logoMobileLight from '../assets/logo-mob-light.svg'
import logoMobileDark from '../assets/logo-mob-dark.svg'
import { colors } from './colors'

export const darkTheme = {
  logoWeb: `url(${logoWebDark})`,
  logoMobile: `url(${logoMobileDark})`,

  headerTextColor: colors.neutral[50],
  bgColor: colors.neutral[900],
}

export const lightTheme = {
  logoWeb: `url(${logoWebLight})`,
  logoMobile: `url(${logoMobileLight})`,

  headerTextColor: colors.neutral[800],
  bgColor: colors.neutral[50],
}
