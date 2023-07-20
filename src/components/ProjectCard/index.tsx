import { Draft } from '../../types'
import {
  ProjectCardButtonArea,
  ProjectCardContainer,
  ProjectCardDemoButton,
  ProjectCardDescription,
  ProjectCardImage,
  ProjectCardInfo,
  ProjectCardSourceButton,
  ProjectCardTechnologiesArea,
  ProjectCardTitle,
} from './styles'

export const ProjectCard = (project: Draft) => {
  return (
    <ProjectCardContainer>
      <ProjectCardImage src={project.image} />

      <ProjectCardInfo>
        <ProjectCardTitle>{project.title}</ProjectCardTitle>

        <ProjectCardDescription>{project.description}</ProjectCardDescription>

        <ProjectCardTechnologiesArea>
          {project.technologies.map((technology, index) => (
            <i className={`devicon-${technology}-plain`} key={index} />
          ))}
        </ProjectCardTechnologiesArea>

        <ProjectCardButtonArea>
          <ProjectCardDemoButton href={project.demo.link} target='_blank'>
            {project.demo.text}
          </ProjectCardDemoButton>

          <ProjectCardSourceButton href={project.source.link} target='_blank'>
            {project.source.text}
          </ProjectCardSourceButton>
        </ProjectCardButtonArea>
      </ProjectCardInfo>
    </ProjectCardContainer>
  )
}
