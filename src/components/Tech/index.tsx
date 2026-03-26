import { Section, Header, SkillSection } from '..'

const Tech: React.FC = () => {
  const currentTech = [
    'HTML/CSS',
    'JavaScript (ES6)',
    'TypeScript',
    'React',
    'Next.js',
    'GraphQL',
    'React Testing Library/Jest',
    'Tailwind CSS',
    'Chakra UI',
    'Elixir/Phoenix',
    'Netlify',
    'NPM/Yarn'
  ]

  const tools = [
    'Git',
    'Github',
    'Bitbucket',
    'Jira',
    'Figma',
    'Zeplin',
    'VS Code',
    'Slack',
    'Terminal'
  ]

  const oldTech = [
    'Google Apps Script',
    'Python',
    'Django REST Framework',
    'PostgreSQL'
  ]

  return (
    <Section>
      <Header text='Tech Stack 💻' />
      <SkillSection
        header="What I've been working with lately:"
        skills={currentTech}
      />

      <SkillSection
        header='Some tools I use on a daily basis:'
        skills={tools}
      />

      <SkillSection
        header="Some tech I've worked with before:"
        skills={oldTech}
      />
    </Section>
  )
}

export default Tech
