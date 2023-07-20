import { ProjectCard } from '../../components/ProjectCard'
import { PageProps } from '../../types'
import { ProjectsContainer, ProjectsContent, Title } from './styles'

export const Projects = ({ translation }: PageProps) => {
  return (
    <ProjectsContainer>
      <ProjectsContent>
        <Title>{translation.projects.title}</Title>

        <section>
          {translation.projects.drafts.map((draft, index) => (
            <ProjectCard key={index} {...draft} />
          ))}
        </section>
      </ProjectsContent>
    </ProjectsContainer>
  )
}
