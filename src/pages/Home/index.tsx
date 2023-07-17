import { Header } from '../../components/Header'
import { HomeProps } from '../../types'
import { HomeContainer } from './styles'

export const Home = ({ handleToggleTheme, theme, translation }: HomeProps) => {
  return (
    <HomeContainer>
      <Header
        handleToggleTheme={handleToggleTheme}
        theme={theme}
        translation={translation}
      />
    </HomeContainer>
  )
}
