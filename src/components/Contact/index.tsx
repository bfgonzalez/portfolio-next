import { Section, Header, Paragraph, LinkText } from '..'

const Contact: React.FC = () => (
  <Section>
    <Header text="Let's Connect 👋" />
    <Paragraph>
      <div className='flex -ml-3'>
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
    </Paragraph>
  </Section>
)

export default Contact
