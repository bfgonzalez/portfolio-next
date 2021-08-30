import Layout from '../src/components/shared/Layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className='h-screen flex flex-col justify-center items-center px-2'>
        <main className='flex-1 flex flex-col justify-center items-start py-20 text-left w-3/4'>
          <h1
            className='font-primary font-bold hover:underline m-0 text-6xl'
            style={{ color: '#0070f3' }}
          >
            <a href='https://github.com/bfgonzalez'>Software Developer</a>
          </h1>

          <p className='font-secondary text-2xl mt-4'>
            Hey there, I'm Bianca! I solve problems and bring ideas to life
            through tech!
          </p>
        </main>

        <footer className='font-secondary py-8'>
          <a
            href='https://bfgonzalez.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Bianca Gonzalez © {new Date().getFullYear()}
          </a>
        </footer>
      </div>
    </Layout>
  )
}

export default Home
