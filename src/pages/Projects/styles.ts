import styled from 'styled-components'
import { ThemeProps } from './../../types/index'
import { breakpoints } from '../../styles/breakpoints'

export const ProjectsContainer = styled.div``

export const ProjectsContent = styled.div<Partial<ThemeProps>>`
  @media (min-width: ${breakpoints.xxl}) {
    margin-top: 7rem;
    text-align: center;

    section {
      display: flex;
      justify-content: center;
      gap: 4.5rem;
    }
  }
`

export const Title = styled.h1<Partial<ThemeProps>>`
  @media (min-width: ${breakpoints.xxl}) {
    font-size: 3.5rem;
    font-weight: 700;
    font-family: 'Sora', sans-serif;
    color: ${({ theme }) => theme.titleTextColor};

    margin-bottom: 5rem;
  }
`
