import { Header } from '../../components/Header'
import { HomeProps, Language } from '../../types'
import {
  HomeContainer,
  HomeContent,
  HomeImage,
  Presentation,
  Role,
} from './styles'
import { useState } from 'react'
import illustration from '../../assets/illustration.png'

export const Home = ({ handleToggleTheme, theme, translation }: HomeProps) => {
  const [language, setLanguage] = useState<Language>(translation.pt)

  const handleSelectLanguage = (language: string) => {
    switch (language) {
      case 'PT':
        setLanguage(translation.pt)
        break
      case 'EN':
        setLanguage(translation.en)
        break
      default:
        setLanguage(translation.pt)
    }
  }

  return (
    <HomeContainer>
      <Header
        handleToggleTheme={handleToggleTheme}
        theme={theme}
        translation={language}
        handleChangeLanguage={handleSelectLanguage}
      />

      <HomeContent>
        <div>
          <Presentation>{language.presentation}</Presentation>

          <Role>{language.role}</Role>
        </div>

        <HomeImage src={illustration} alt='illustration' />
      </HomeContent>
    </HomeContainer>
  )
}
