import { PageProps } from '../../types'

export const Projects = ({ translation }: PageProps) => {
  return (
    <div>
      <h1>{translation.projects.title}</h1>
    </div>
  )
}
