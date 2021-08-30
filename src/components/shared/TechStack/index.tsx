interface TechStackTypes {
  tech: string[]
}

const TechStack: React.FC<TechStackTypes> = ({ tech }) => (
  <ul className='flex flex-wrap mt-3'>
    {tech.map((tech) => (
      <li
        key={tech}
        className='bg-grey font-secondary text-lg rounded-full px-4 mr-4 mb-4'
      >
        {tech}
      </li>
    ))}
  </ul>
)

export default TechStack
