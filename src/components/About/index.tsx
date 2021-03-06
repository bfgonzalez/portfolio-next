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
        specializing in React and TypeScript. I mostly build web applications
        that look good whether on desktop or mobile, but ultimately I'm someone
        who loves using tech to{' '}
        <strong className='text-primary'>solve problems</strong>,{' '}
        <strong className='text-primary'>learn by doing</strong>, and{' '}
        <strong className='text-primary'>bring ideas to life!✨</strong>
      </Paragraph>

      <Paragraph>
        Outside of work, I'm a gamer 🎮 at heart. You'll usually catch me
        playing whatever's free on PS+. Some games I've enjoyed include the
        Uncharted series, Metal Gear Solid V: The Phantom Pain, Spider-Man
        (2018), Detroit: Become Human, Monster Hunter World, Star Wars Jedi:
        Fallen Order, and Horizon Zero Dawn (my current fave).
      </Paragraph>
    </Section>
  )
}

export default About
