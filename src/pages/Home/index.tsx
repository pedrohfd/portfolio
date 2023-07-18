import { HomeProps } from '../../types'
import {
  Footer,
  HomeContainer,
  HomeContent,
  HomeImage,
  LinkButton,
  LinkIconButton,
  Presentation,
  Role,
  Summary,
} from './styles'

import illustration from '../../assets/illustration.png'
import { GithubIcon } from '../../components/GithubIcon'
import { LinkedinIcon } from '../../components/LinkedinIcon'
import { ArrowDownIcon } from '../../components/ArrowDownIcon'

export const Home = ({ translation }: HomeProps) => {
  return (
    <HomeContainer>
      <HomeContent>
        <div>
          <Presentation>{translation.presentation}</Presentation>

          <Role>{translation.role}</Role>

          <Summary>{translation.summary}</Summary>

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
            <LinkButton href='#'>{translation.getInTouch}</LinkButton>
            <LinkButton download='../../assets/Currículo.pdf'>
              {translation.resume}
            </LinkButton>
          </section>
        </div>

        <HomeImage src={illustration} alt='illustration' />
      </HomeContent>

      <Footer>
        Scroll
        <ArrowDownIcon />
      </Footer>
    </HomeContainer>
  )
}
