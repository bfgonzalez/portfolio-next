import { Section, Header, SkillSection } from '..'

const Tech: React.FC = () => {
  const currentTech = [
    'HTML/CSS',
    'JavaScript (ES6)',
    'TypeScript',
    'React (Hooks)',
    'Next.js',
    'GraphQL',
    'Hasura',
    'Apollo',
    'React Testing Library/Jest',
    'DatoCMS',
    'Tailwind CSS',
    'Chakra UI',
    'Storybook',
    'Elixir/Phoenix',
    'Netlify',
    'Heroku',
    'CircleCI',
    'NPM/Yarn'
  ]

  const tools = [
    'Git',
    'Github',
    'Bitbucket',
    'Jira',
    'Trello',
    'Figma',
    'Zeplin',
    'VS Code',
    'Terminal'
  ]

  const oldTech = [
    'Google Apps Script',
    'Gatsby.js',
    'Express',
    'Sequelize',
    'Python',
    'Django REST Framework',
    'Bulma',
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
