import { HeaderProps } from '../../types'
import {
  Content,
  Item,
  Portal,
  Root,
  Trigger,
  Arrow,
} from '@radix-ui/react-dropdown-menu'

import { SunIcon } from '../../assets/svg/SunIcon'
import { MoonIcon } from '../../assets/svg/MoonIcon'

export const Header = ({
  handleToggleTheme,
  handleChangeLanguage,
  theme,
  translation,
}: HeaderProps) => {
  return (
    <header className='fixed flex items-center justify-between w-full px-32 pt-12 transition-colors bg-neutral-50 dark:bg-neutral-900'>
      <h1 className='text-5xl font-bold tracking-[-0.0625rem] text-neutral-900 dark:text-neutral-50 transition-colors'>
        ph<span className='text-purple-600 dark:text-purple-500'>.</span>
      </h1>

      <nav>
        <ul className='flex gap-8 list-none'>
          <li>
            <Root modal={false}>
              <Trigger
                asChild
                className='text-lg font-normal transition-all border-none outline-none cursor-pointer text-neutral-800 dark:text-neutral-50 font-inter bg-none hover:underline hover:text-neutral-500'
              >
                <button>{translation.language}</button>
              </Trigger>

              <Portal>
                <Content className='bg-neutral-200 dark:bg-neutral-700 rounded-[0.3rem] py-[0.1rem] px-[0.3rem] animate-scaleIn origin-radix-dropdown-menu'>
                  {translation.language === 'EN' ? (
                    <Item
                      onSelect={() => handleChangeLanguage('PT')}
                      className='text-lg font-normal border-none outline-none cursor-pointer dark:text-neutral-50 dark-neutral-800 font-inter bg-none'
                    >
                      PT
                    </Item>
                  ) : (
                    <Item
                      onSelect={() => handleChangeLanguage('EN')}
                      className='text-lg font-normal border-none outline-none cursor-pointer dark:text-neutral-50 dark-neutral-800 font-inter bg-none'
                    >
                      EN
                    </Item>
                  )}
                  <Arrow className='fill-neutral-200 dark:fill-neutral-700' />
                </Content>
              </Portal>
            </Root>
          </li>
          <li onClick={handleToggleTheme}>
            {theme === 'light' ? (
              <SunIcon className='w-8 h-8 text-neutral-700' />
            ) : (
              <MoonIcon className='w-8 h-8 text-neutral-200' />
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}
