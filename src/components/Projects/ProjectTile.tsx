import { TechStack } from '..'

interface ProjectTileTypes {
  link: string
  image: string
  alt: string
  title: string
  description: string
  tech: string[]
}

const ProjectTile: React.FC<ProjectTileTypes> = ({
  link,
  image,
  alt,
  title,
  description,
  tech
}) => (
  <div className='mt-16 mb-8'>
    <img src={image} alt={alt} />
    <a href={link} className='hover:underline text-primary'>
      <p className='font-primary font-bold text-3xl mt-8 -mb-4'>{title}</p>
    </a>
    <p className='font-secondary text-xl my-8'>{description}</p>
    <TechStack tech={tech} />
  </div>
)

export default ProjectTile
