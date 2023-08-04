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

export const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <div>
          <Presentation>presentation</Presentation>

          <Role>role</Role>

          <Summary>summary</Summary>

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
            <LinkButton href='#'>getInTouch</LinkButton>
            <LinkButton download='../../assets/Currículo.pdf'>
              resume
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
