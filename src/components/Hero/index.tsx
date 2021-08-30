import { Section, Header, Paragraph } from '..'

const Hero: React.FC = () => {
  return (
    <Section isHero>
      <Header>
        <a href='https://github.com/bfgonzalez'>Software Developer👩🏻‍💻</a>
      </Header>

      <Paragraph
        text="Hey there, I'm Bianca! I solve problems and bring ideas to life through
        tech!🚀"
      />
    </Section>
  )
}

export default Hero
