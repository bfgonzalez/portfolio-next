import { Layout, Hero, About, Tech, Projects, Contact } from '../src/components'

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Tech />
      <Contact />
    </Layout>
  )
}

export default Home
