import { Section, Header, ProjectTile } from '..'

const Projects: React.FC = () => {
  const projectTiles = [
    {
      link: 'http://hzd-website.herokuapp.com/',
      image: '/hzd-website.png',
      alt: 'Horizon Zero Dawn Wiki',
      title: 'Horizon Zero Dawn Wiki',
      description:
        'My personal take on a wiki for Horizon Zero Dawn. It currently contains catalogs for Machines and Cauldrons, with CRUD features available if logged in as admin. This is also my first attempt at building a full stack website from scratch 🎉',
      tech: [
        'React',
        'Bulma',
        'Heroku Postgres',
        'Node.js',
        'Express',
        'Sequelize',
        'Axios',
        'REST API',
        'React Firebase (Auth)'
      ]
    },
    {
      link: 'https://bfgonzalez.github.io/amp-website',
      image: '/amp-website.png',
      alt: "Ateneo Musicians' Pool Website (Mock Redesign)",
      title: "Ateneo Musicians' Pool Website (Mock Redesign)",
      description:
        "A mock redesign of the Ateneo Musicians' Pool website. The Ateneo Musicians' Pool (AMP) is a non-profit organization where individuals realize their holistic formation through music.",
      tech: ['HTML/CSS', 'JavaScript', 'Github Pages', 'Responsive Web Design']
    }
  ]

  return (
    <Section>
      <Header text='Side Projects💡' />
      {projectTiles.map((projectTile) => (
        <ProjectTile key={projectTile.title} {...projectTile} />
      ))}
    </Section>
  )
}

export default Projects
