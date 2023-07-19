import styled from 'styled-components'
import { ThemeProps } from '../../types'
import { breakpoints } from '../../styles/breakpoints'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const HomeContent = styled.div`
  @media (min-width: ${breakpoints.xxl}) {
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

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    display: flex;
    padding: 0 7rem 0;
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

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    display: flex;
    padding: 0 3.5rem 0;
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
  @media (min-width: ${breakpoints.xxl}) {
    color: ${({ theme }) => theme.titleTextColor};
    font-family: 'Sora', sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 4.375rem;
    letter-spacing: -0.0625rem;
  }

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    color: ${({ theme }) => theme.titleTextColor};
    font-family: 'Sora', sans-serif;
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: -0.0625rem;
  }

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    color: ${({ theme }) => theme.titleTextColor};
    font-family: 'Sora', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: -0.0625rem;
  }
`

export const Role = styled.h4<Partial<ThemeProps>>`
  @media (min-width: ${breakpoints.xxl}) {
    color: ${({ theme }) => theme.roleTextColor};
    font-family: 'Sora', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: -0.03125rem;
  }

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    color: ${({ theme }) => theme.roleTextColor};
    font-family: 'Sora', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: -0.03125rem;
  }

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    color: ${({ theme }) => theme.roleTextColor};
    font-family: 'Sora', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: -0.03125rem;
  }
`

export const Summary = styled.p<Partial<ThemeProps>>`
  @media (min-width: ${breakpoints.xxl}) {
    color: ${({ theme }) => theme.summaryTextColor};
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    line-height: 2.25rem;
    letter-spacing: -0.01563rem;

    margin-top: 2.75rem;
  }

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    color: ${({ theme }) => theme.summaryTextColor};
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    line-height: 2.25rem;
    letter-spacing: -0.01563rem;

    margin-top: 2.75rem;
  }

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    color: ${({ theme }) => theme.summaryTextColor};
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: -0.01563rem;

    margin-top: 2.75rem;
  }
`

export const LinkIconButton = styled.a<Partial<ThemeProps>>`
  @media (min-width: ${breakpoints.xxl}) {
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

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
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

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
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
  @media (min-width: ${breakpoints.xxl}) {
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

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    color: ${({ theme }) => theme.buttonTextPrimary};
    font-family: 'Inter', sans-serif;
    font-size: 0.7rem;
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

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    color: ${({ theme }) => theme.buttonTextPrimary};
    font-family: 'Inter', sans-serif;
    font-size: 0.7rem;
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
  @media (min-width: ${breakpoints.xxl}) {
    width: 45rem;
    height: 45rem;
    margin-bottom: 13rem;
  }

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    width: 40rem;
    height: 40rem;
    margin-bottom: 13rem;
  }

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    width: 30rem;
    height: 30rem;
    margin-bottom: 13rem;
  }
`

export const Footer = styled.footer<Partial<ThemeProps>>`
  @media (min-width: ${breakpoints.xxl}) {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.titleTextColor};
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0;
    line-height: 1.375rem;
    letter-spacing: 0.01875rem;

    align-self: center;

    margin-bottom: 2rem;

    transition: all 0.2s;

    svg {
      margin-top: 0.1rem;
    }
  }

  @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
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

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
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
