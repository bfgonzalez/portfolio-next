const Hero: React.FC = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center px-2'>
      <main className='flex-1 flex flex-col justify-center items-start py-20 text-left w-3/4'>
        <h1 className='font-primary font-bold text-primary hover:underline m-0 text-6xl'>
          <a href='https://github.com/bfgonzalez'>Software Developer 👩🏻‍💻</a>
        </h1>

        <p className='font-secondary text-2xl mt-4 leading-loose'>
          Hey there, I'm Bianca! I solve problems and bring ideas to life
          through tech! 🚀
        </p>
      </main>
    </div>
  )
}

export default Hero
