import {
  Button,
  DropDownContent,
  DropDownItem,
  DropDownPortal,
  DropDownRoot,
  DropDownTrigger,
  HeaderContainer,
  Logo,
  SwitchTheme,
} from './styles'
import { HomeProps } from '../../types'

export const Header = ({ handleToggleTheme, theme }: HomeProps) => {
  const handleSelectLanguage = (language: string) => {
    switch (language) {
      case 'PT':
        console.log(language)
        break
      case 'EN':
        console.log(language)
        break
      default:
        console.log(language)
    }
  }

  return (
    <HeaderContainer>
      <Logo actualTheme={theme} />

      <nav>
        <ul>
          <li>
            <Button>Home</Button>
          </li>
          <li>
            <Button>Projects</Button>
          </li>
          <li>
            <Button>About</Button>
          </li>
          <li>
            <Button>Resume</Button>
          </li>
          <li>
            <DropDownRoot>
              <DropDownTrigger>PT</DropDownTrigger>

              <DropDownPortal>
                <DropDownContent>
                  <DropDownItem onSelect={() => handleSelectLanguage('PT')}>
                    PT
                  </DropDownItem>
                  <DropDownItem onSelect={() => handleSelectLanguage('EN')}>
                    EN
                  </DropDownItem>
                </DropDownContent>
              </DropDownPortal>
            </DropDownRoot>
          </li>
          <li>
            <SwitchTheme className='switch'>
              <input
                type='checkbox'
                onChange={handleToggleTheme}
                checked={theme === 'light' ? false : true}
              />
              <span className='slider'></span>
            </SwitchTheme>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
