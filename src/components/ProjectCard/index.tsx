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

export const ProjectCard = () => {
  return (
    <ProjectCardContainer>
      <ProjectCardImage src='' />

      <ProjectCardInfo>
        <ProjectCardTitle>title</ProjectCardTitle>

        <ProjectCardDescription>description</ProjectCardDescription>

        <ProjectCardTechnologiesArea>
          <i className={`devicon-typescript-plain`} key={1} />
        </ProjectCardTechnologiesArea>

        <ProjectCardButtonArea>
          <ProjectCardDemoButton href='' target='_blank'>
            text
          </ProjectCardDemoButton>

          <ProjectCardSourceButton href='' target='_blank'>
            text
          </ProjectCardSourceButton>
        </ProjectCardButtonArea>
      </ProjectCardInfo>
    </ProjectCardContainer>
  )
}
