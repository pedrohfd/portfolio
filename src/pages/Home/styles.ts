import styled from 'styled-components'
import { ThemeProps } from '../../types'

export const HomeContainer = styled.main`
  @media (min-width: 641px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`

export const HomeContent = styled.div`
  @media (min-width: 641px) {
    display: flex;
    padding: 0 8rem 0;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
`

export const Presentation = styled.h3<Partial<ThemeProps>>`
  @media (min-width: 641px) {
    color: ${({ theme }) => theme.titleTextColor};
    font-family: Sora, sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 4.375rem;
    letter-spacing: -0.0625rem;
  }
`

export const Role = styled.h4<Partial<ThemeProps>>`
  @media (min-width: 641px) {
    color: ${({ theme }) => theme.roleTextColor};
    font-family: Sora;
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: -0.03125rem;
  }
`

export const HomeImage = styled.img`
  @media (min-width: 641px) {
    width: 45rem;
    height: 45rem;
    margin-bottom: 13rem;
  }
`
