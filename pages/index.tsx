import { Layout, Hero, About, Tech } from '../src/components'

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Tech />
    </Layout>
  )
}

export default Home
