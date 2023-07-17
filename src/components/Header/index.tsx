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
import { useState } from 'react'

export const Header = ({
  handleToggleTheme,
  theme,
  translation,
}: HomeProps) => {
  const [language, setLanguage] = useState(translation.pt)

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
    <HeaderContainer>
      <Logo actualTheme={theme} />

      <nav>
        <ul>
          <li>
            <Button>{language.header.home}</Button>
          </li>
          <li>
            <Button>{language.header.projects}</Button>
          </li>
          <li>
            <Button>{language.header.about}</Button>
          </li>
          <li>
            <Button>{language.header.resume}</Button>
          </li>
          <li>
            <DropDownRoot>
              <DropDownTrigger>{language.language}</DropDownTrigger>

              <DropDownPortal>
                <DropDownContent>
                  {language.language === 'EN' ? (
                    <DropDownItem onSelect={() => handleSelectLanguage('PT')}>
                      PT
                    </DropDownItem>
                  ) : (
                    <DropDownItem onSelect={() => handleSelectLanguage('EN')}>
                      EN
                    </DropDownItem>
                  )}
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
