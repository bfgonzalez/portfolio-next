interface SkillsSectionTypes {
  header: string
  skills: string[]
}

const SkillSection: React.FC<SkillsSectionTypes> = ({ header, skills }) => (
  <div className='mt-8 text-xl lg:text-2xl font-secondary'>
    <p className='mb-4'>{header}</p>
    <ul className='flex flex-wrap mt-3'>
      {skills.map((skill) => (
        <li key={skill} className='bg-grey text-lg rounded-full px-4 mr-4 mb-4'>
          {skill}
        </li>
      ))}
    </ul>
  </div>
)

export default SkillSection
