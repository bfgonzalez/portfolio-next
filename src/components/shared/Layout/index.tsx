import Head from 'next/head'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Bianca Gonzalez | Software Developer</title>
        <meta
          name='description'
          content="Hey there, I'm Bianca! I solve problems and bring ideas to life through tech!"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </>
  )
}

export default Layout
