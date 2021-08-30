import { Section, Header, Paragraph, SkillSection } from '..'

const Tech: React.FC = () => {
  const currentTech = [
    'HTML/CSS',
    'JavaScript (ES6)',
    'TypeScript',
    'React (Hooks)',
    'Next.js',
    'GraphQL',
    'DatoCMS',
    'Tailwind CSS',
    'Elixir/Phoenix',
    'React Testing Library (Jest)',
    'Netlify',
    'NPM/Yarn'
  ]

  const tools = ['Git', 'Github', 'Terminal', 'VS Code', 'Figma', 'Jira']

  const oldTech = [
    'Google Apps Script',
    'Gatsby.js',
    'Express',
    'Sequelize',
    'Python',
    'Django REST Framework',
    'Bulma',
    'Chakra UI',
    'Heroku',
    'Github Pages',
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
