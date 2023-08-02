import { PageProps } from '../../types'
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
import { GithubIcon } from '../../assets/svg/GithubIcon'
import { LinkedinIcon } from '../../assets/svg/LinkedinIcon'
import { ArrowDownIcon } from '../../assets/svg/ArrowDownIcon'

export const Home = ({ translation }: PageProps) => {
  return (
    <HomeContainer>
      <HomeContent>
        <div>
          <Presentation>{translation.home.presentation}</Presentation>

          <Role>{translation.home.role}</Role>

          <Summary>{translation.home.summary}</Summary>

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
            <LinkButton href='#'>{translation.home.getInTouch}</LinkButton>
            <LinkButton download='../../assets/Currículo.pdf'>
              {translation.home.resume}
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
