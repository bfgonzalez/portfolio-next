import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bianca Gonzalez | Software Developer</title>
        <meta name="description" content="Bianca Gonzalez | Software Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://github.com/bfgonzalez">Software Developer</a>
        </h1>

        <p className={styles.description}>
          Hey there, I'm Bianca! I solve problems and bring ideas to life through tech!
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://bfgonzalez.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
          Bianca Gonzalez © {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  )
}

export default Home
