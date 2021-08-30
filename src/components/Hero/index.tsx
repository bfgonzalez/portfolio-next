import { Section, Header } from '..'

const Hero: React.FC = () => {
  return (
    <Section isHero>
      <Header>
        <a href='https://github.com/bfgonzalez'>Software Developer👩🏻‍💻</a>
      </Header>

      <p className='font-secondary text-xl lg:text-2xl mt-4 leading-loose'>
        Hey there, I'm Bianca! I solve problems and bring ideas to life through
        tech!🚀
      </p>
    </Section>
  )
}

export default Hero
