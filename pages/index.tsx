import { Layout, Hero, About, Tech, Projects } from '../src/components'

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Tech />
      <Projects />
    </Layout>
  )
}

export default Home
