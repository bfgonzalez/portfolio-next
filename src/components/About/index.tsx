import { Section, Header, Paragraph, LinkText } from '..'

const About: React.FC = () => {
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
        <strong className='text-primary'>solve problems</strong>,{' '}
        <strong className='text-primary'>learn by doing</strong>, and{' '}
        <strong className='text-primary'>bring ideas to life!✨</strong>
      </Paragraph>

      <Paragraph>
        Outside of work, I'm a gamer 🎮 at heart. Some games I've enjoyed
        include the Uncharted series, Spider-Man (2018), Monster Hunter World,
        Star Wars Jedi: Fallen Order, Horizon Zero Dawn and it's sequel, Horizon
        Forbidden West.
      </Paragraph>
    </Section>
  )
}

export default About
