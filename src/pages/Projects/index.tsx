import { ProjectCard } from '../../components/ProjectCard'
import { ProjectsContainer, ProjectsContent, Title } from './styles'

export const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsContent>
        <Title>title</Title>

        <section>
          <ProjectCard key={1} />
        </section>
      </ProjectsContent>
    </ProjectsContainer>
  )
}
