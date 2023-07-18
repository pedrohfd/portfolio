import {
  Button,
  DropDownArrow,
  DropDownContent,
  DropDownItem,
  DropDownPortal,
  DropDownRoot,
  DropDownTrigger,
  HeaderContainer,
  Logo,
  SwitchTheme,
} from './styles'
import { HeaderProps } from '../../types'

export const Header = ({
  handleToggleTheme,
  handleChangeLanguage,
  theme,
  translation,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      <Logo actualTheme={theme} />

      <nav>
        <ul>
          <li>
            <Button>{translation.header.home}</Button>
          </li>
          <li>
            <Button>{translation.header.projects}</Button>
          </li>
          <li>
            <Button>{translation.header.about}</Button>
          </li>
          <li>
            <Button>{translation.header.contact}</Button>
          </li>
          <li>
            <DropDownRoot modal={false}>
              <DropDownTrigger asChild>
                <button>{translation.language}</button>
              </DropDownTrigger>

              <DropDownPortal>
                <DropDownContent>
                  {translation.language === 'EN' ? (
                    <DropDownItem onSelect={() => handleChangeLanguage('PT')}>
                      PT
                    </DropDownItem>
                  ) : (
                    <DropDownItem onSelect={() => handleChangeLanguage('EN')}>
                      EN
                    </DropDownItem>
                  )}
                  <DropDownArrow />
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
