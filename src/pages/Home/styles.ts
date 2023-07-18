import styled from 'styled-components'
import { ThemeProps } from '../../types'

export const HomeContainer = styled.div`
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

    section {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-top: 2.5rem;
    }
  }
`

export const Presentation = styled.h3<Partial<ThemeProps>>`
  @media (min-width: 641px) {
    color: ${({ theme }) => theme.titleTextColor};
    font-family: 'Sora', sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 4.375rem;
    letter-spacing: -0.0625rem;
  }
`

export const Role = styled.h4<Partial<ThemeProps>>`
  @media (min-width: 641px) {
    color: ${({ theme }) => theme.roleTextColor};
    font-family: 'Sora', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: -0.03125rem;
  }
`

export const Summary = styled.p<Partial<ThemeProps>>`
  @media (min-width: 641px) {
    color: ${({ theme }) => theme.summaryTextColor};
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    line-height: 2.25rem;
    letter-spacing: -0.01563rem;

    margin-top: 2.75rem;
  }
`

export const LinkIconButton = styled.a<Partial<ThemeProps>>`
  @media (min-width: 641px) {
    display: inline-flex;
    padding: 0.62rem;
    background: ${({ theme }) => theme.buttonColor};
    color: ${({ theme }) => theme.bgColor};
    border-radius: 0.31rem;

    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.buttonColorHover};
      color: ${({ theme }) => theme.buttonTextPrimary};
    }
  }
`

export const LinkButton = styled.a<Partial<ThemeProps>>`
  @media (min-width: 641px) {
    color: ${({ theme }) => theme.buttonTextPrimary};
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.49975rem;
    letter-spacing: 0.0175rem;
    text-transform: uppercase;

    padding: 0.62rem 1rem;
    border: 1px solid ${({ theme }) => theme.buttonColor};
    border-radius: 0.31rem;

    transition: all 0.2s;

    text-decoration: none;
    cursor: pointer;

    &:hover {
      border-color: ${({ theme }) => theme.buttonColorHover};
      background-color: ${({ theme }) => theme.buttonColorHover};
    }
  }
`

export const HomeImage = styled.img`
  @media (min-width: 641px) {
    width: 45rem;
    height: 45rem;
    margin-bottom: 13rem;
  }
`

export const Footer = styled.footer<Partial<ThemeProps>>`
  @media (min-width: 641px) {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.titleTextColor};
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0;
    left: 50%;
    line-height: 1.375rem;
    letter-spacing: 0.01875rem;

    margin-bottom: 2rem;

    transition: all 0.2s;

    svg {
      margin-top: 0.1rem;
    }
  }
`
