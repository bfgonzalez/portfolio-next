import { TechStack } from '..'

interface SkillsSectionTypes {
  header: string
  skills: string[]
}

const SkillSection: React.FC<SkillsSectionTypes> = ({ header, skills }) => (
  <div className='mt-8 text-xl lg:text-2xl font-secondary'>
    <p className='mb-4'>{header}</p>
    <TechStack tech={skills} />
  </div>
)

export default SkillSection
