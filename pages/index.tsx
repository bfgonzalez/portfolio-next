import Layout from '../src/components/shared/Layout'
import Hero from '../src/components/Hero'

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <footer className='font-secondary py-8 text-center'>
        <a
          href='https://bfgonzalez.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Bianca Gonzalez © {new Date().getFullYear()}
        </a>
      </footer>
    </Layout>
  )
}

export default Home
