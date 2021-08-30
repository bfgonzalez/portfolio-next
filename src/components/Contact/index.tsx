import { Section, Header, Paragraph, LinkText } from '..'

const Contact: React.FC = () => (
  <Section>
    <Header text="Let's Connect 👋" />
    <div className='flex -ml-3 font-secondary text-xl lg:text-2xl my-6'>
      <LinkText
        link='https://github.com/bfgonzalez'
        text='Github'
        color='black'
      />
      <LinkText
        link='https://www.linkedin.com/in/bfgonzalez/'
        text='LinkedIn'
        color='black'
      />
      <LinkText
        link='https://www.instagram.com/biancapture/'
        text='Instagram'
        color='black'
      />
    </div>
  </Section>
)

export default Contact
