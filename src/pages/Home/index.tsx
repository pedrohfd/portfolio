import { Header } from '../../components/Header'
import { HomeProps, Language } from '../../types'
import {
  HomeContainer,
  HomeContent,
  HomeImage,
  LinkButton,
  LinkIconButton,
  Presentation,
  Role,
  Summary,
} from './styles'
import { useState } from 'react'
import illustration from '../../assets/illustration.png'
import { GithubIcon } from '../../components/GithubIcon'
import { LinkedinIcon } from '../../components/LinkedinIcon'

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

          <Summary>{language.summary}</Summary>

          <section>
            <LinkIconButton href='https://github.com/pedrohfd' target='_blank'>
              <GithubIcon />
            </LinkIconButton>
            <LinkIconButton
              href='https://linkedin.com/in/pedrohfd'
              target='_blank'
            >
              <LinkedinIcon />
            </LinkIconButton>
            <LinkButton href='#'>{language.getInTouch}</LinkButton>
            <LinkButton download='../../assets/Currículo.pdf'>
              {language.resume}
            </LinkButton>
          </section>
        </div>

        <HomeImage src={illustration} alt='illustration' />
      </HomeContent>
    </HomeContainer>
  )
}