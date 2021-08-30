import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center px-2'>
      <Head>
        <title>Bianca Gonzalez | Software Developer</title>
        <meta
          name='description'
          content='Bianca Gonzalez | Software Developer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex-1 flex flex-col justify-center items-start py-20 text-left'>
        <h1
          className='font-bold hover:underline m-0 text-6xl'
          style={{ color: '#0070f3' }}
        >
          <a href='https://github.com/bfgonzalez'>Software Developer</a>
        </h1>

        <p className='text-2xl mt-2'>
          Hey there, I'm Bianca! I solve problems and bring ideas to life
          through tech!
        </p>
      </main>

      <footer className='py-8'>
        <a
          href='https://bfgonzalez.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Bianca Gonzalez © {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  )
}

export default Home
