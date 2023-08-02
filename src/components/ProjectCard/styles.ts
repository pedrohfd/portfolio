import styled from 'styled-components'
import { ThemeProps } from '../../types'
import { breakpoints } from './../../styles/breakpoints'

export const ProjectCardContainer = styled.div<Partial<ThemeProps>>`
  transition: all 0.2s;

  @media (min-width: ${breakpoints.xxl}) {
    text-align: left;
    width: 30rem;

    border: 1px solid ${({ theme }) => theme.projectCardBorder};
    border-radius: 0.31rem;
    padding: 1px;
  }
`

export const ProjectCardImage = styled.img<Partial<ThemeProps>>`
  @media (min-width: ${breakpoints.xxl}) {
    object-fit: cover;
    width: 100%;
    height: 240px;
    border-top-right-radius: 0.2rem;
    border-top-light-radius: 0.2rem;
  }
`

export const ProjectCardInfo = styled.div<Partial<ThemeProps>>`
  @media (min-width: ${breakpoints.xxl}) {
    padding: 1.5rem 1rem 1.75rem;
  }
`

export const ProjectCardTitle = styled.h5<Partial<ThemeProps>>`
  transition: all 0.2s;

  @media (min-width: ${breakpoints.xxl}) {
    font-size: 1.75rem;
    font-weight: 700;
    font-family: 'Sora', sans-serif;
    color: ${({ theme }) => theme.titleTextColor};
  }
`

export const ProjectCardDescription = styled.p<Partial<ThemeProps>>`
  transition: all 0.2s;

  @media (min-width: ${breakpoints.xxl}) {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.summaryTextColor};

    margin-top: 1rem;
  }
`

export const ProjectCardTechnologiesArea = styled.div<Partial<ThemeProps>>`
  @media (min-width: ${breakpoints.xxl}) {
    margin: 1.5rem 0;

    i {
      color: ${({ theme }) => theme.projectCardIcon};
      font-size: 1.5rem;
      padding: 0.62rem;

      transition: all 0.2s;
    }
  }
`

export const ProjectCardButtonArea = styled.div<Partial<ThemeProps>>``

export const ProjectCardDemoButton = styled.a<Partial<ThemeProps>>`
  transition: all 0.2s;

  @media (min-width: ${breakpoints.xxl}) {
    color: ${({ theme }) => theme.buttonTextSecondary};
    background-color: ${({ theme }) => theme.buttonColor};

    padding: 0.62rem 1rem 0.62rem 1rem;
    border-radius: 0.31rem;
    margin-right: 0.5rem;
    border: 1px solid ${({ theme }) => theme.buttonColor};

    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.49975rem;
    letter-spacing: 0.0175rem;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      border-color: ${({ theme }) => theme.buttonColorHover};
      background-color: ${({ theme }) => theme.buttonColorHover};
      color: ${({ theme }) => theme.buttonTextPrimary};
    }
  }
`

export const ProjectCardSourceButton = styled.a<Partial<ThemeProps>>`
  transition: all 0.2s;

  @media (min-width: ${breakpoints.xxl}) {
    color: ${({ theme }) => theme.buttonTextPrimary};

    padding: 0.62rem 1rem 0.62rem 1rem;
    border-radius: 0.31rem;
    border: 1px solid ${({ theme }) => theme.projectCardButtonBorder};

    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.49975rem;
    letter-spacing: 0.0175rem;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      background-color: ${({ theme }) => theme.buttonColorHover};
      color: ${({ theme }) => theme.buttonTextPrimary};
      border-color: ${({ theme }) => theme.buttonColorHover};
    }
  }
`
