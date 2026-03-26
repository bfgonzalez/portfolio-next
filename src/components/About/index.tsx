import { Section, Header, Paragraph, SkillSection, LinkText } from '..'

const About: React.FC = () => {
  const games = [
    'Uncharted series',
    "Marvel's Spider-Man 1 / 2",
    'Star Wards Jedi: Fallen Order / Survivor',
    'Horizon Zero Dawn / Forbidden West',
    'Ghost of Tsushima / Yotei',
    'Cyberpunk 2077',
    "No Man's Sky",
    'Ratchet & Clank: Rift Apart',
    'Dave the Diver',
    'Astro Bot',
    'Slay the Spire'
  ]
  return (
    <Section>
      <Header text='About Me 👾' />
      <Paragraph>
        Hey there 👋 I'm Bianca! I'm currently a
        <LinkText
          link='https://github.com/bfgonzalez'
          text='Software Developer'
        />
        at
        <LinkText link='https://mashupgarage.com/' text='Mashup Garage' />
        specializing in React (Next.js) and TypeScript. I build web applications
        for a living, but ultimately I'm someone who loves using tech to{' '}
        <strong className='text-primary'>solve problems</strong> and{' '}
        <strong className='text-primary'>bring ideas to life!✨</strong>
      </Paragraph>

      <SkillSection
        header="Outside of work, I'm a gamer 🎮 at heart. Some games I've enjoyed:"
        skills={games}
      />
    </Section>
  )
}

export default About
