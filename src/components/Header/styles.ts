import styled from 'styled-components'
import { ThemeProps } from '../../types'
import { colors } from '../../styles/colors'
import {
  Content,
  Item,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 641px) {
    ul {
      display: flex;
      list-style: none;

      gap: 2rem;
    }
    padding: 3rem 8rem 0;
  }
`

export const Logo = styled.div<ThemeProps>`
  @media (min-width: 641px) {
    background-image: ${({ theme }) => theme.logoWeb};
    width: 4.375rem;
    height: 3.5rem;
  }

  @media (max-width: 640px) {
    background: ${({ theme }) => theme.logoMobile} no-repeat center/contain;
    width: 3.125rem;
    height: 2.5rem;
  }
`

export const Button = styled.button<Partial<ThemeProps>>`
  @media (min-width: 641px) {
    color: ${({ theme }) => theme.headerTextColor};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 2rem;
    border: none;
    background: none;
    cursor: pointer;
  }
`

export const SwitchTheme = styled.label`
  @media (min-width: 641px) {
    &.switch {
      display: block;
      --width-of-switch: 3.5rem;
      --height-of-switch: 2rem;
      --size-of-icon: 1.4rem;
      --slider-offset: 0.3rem;
      position: relative;
      width: var(--width-of-switch);
      height: var(--height-of-switch);
    }

    &.switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    span.slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${colors.neutral[50]};
      transition: 0.4s;
      border-radius: 30px;
    }

    span.slider:before {
      position: absolute;
      content: '';
      height: var(--size-of-icon, 1.4rem);
      width: var(--size-of-icon, 1.4rem);
      border-radius: 20px;
      left: var(--slider-offset, 0.3rem);
      top: 50%;
      transform: translateY(-50%);
      background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: ${colors.neutral[900]};
    }

    input:checked + .slider:before {
      left: calc(
        100% - (var(--size-of-icon, 1.4rem) + var(--slider-offset, 0.3rem))
      );
      background: ${colors.neutral[900]};
      box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
    }
    border: none;
    background: none;
  }
`

export const DropDownRoot = styled(Root)<Partial<ThemeProps>>`
  @media (min-width: 641px) {
    .dropDownTrigger {
      color: ${colors.purple[500]};
    }
  }
`

export const DropDownTrigger = styled(Trigger)<Partial<ThemeProps>>`
  color: ${({ theme }) => theme.headerTextColor};
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 2rem;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`

export const DropDownPortal = styled(Portal)<Partial<ThemeProps>>``

export const DropDownContent = styled(Content)<Partial<ThemeProps>>`
  background-color: ${({ theme }) => theme.bgColor};
`

export const DropDownItem = styled(Item)<Partial<ThemeProps>>`
  color: ${({ theme }) => theme.headerTextColor};
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 2rem;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`

export const ChangeLanguage = styled.button<Partial<ThemeProps>>`
  @media (min-width: 641px) {
    color: ${({ theme }) => theme.headerTextColor};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 2rem;
    border: none;
    background: none;
    outline: none;
  }
`
