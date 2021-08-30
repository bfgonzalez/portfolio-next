import { LinkText } from '..'

const About: React.FC = () => {
  return (
    <div className='lg:h-screen flex flex-col justify-center items-center px-2'>
      <main className='flex-1 flex flex-col justify-center items-start py-20 text-left w-11/12 lg:w-3/4'>
        <h1 className='font-primary font-bold text-primary m-0 text-5xl lg:text-6xl'>
          About Me
        </h1>

        <p className='font-secondary text-xl lg:text-2xl mt-4 leading-loose'>
          Hey there 👋 I'm Bianca! I'm currently a
          <LinkText
            link='https://github.com/bfgonzalez'
            text='Software Developer'
          />
          at
          <LinkText link='https://mashupgarage.com/' text='Mashup Garage' />
          specializing in React and TypeScript. I mostly build web applications
          that look good whether on desktop or mobile, but ultimately I'm
          someone who loves using tech to{' '}
          <strong className='text-primary'>solve problems</strong>,{' '}
          <strong className='text-primary'>learn by doing</strong>, and{' '}
          <strong className='text-primary'>bring ideas to life!✨</strong>
        </p>
      </main>
    </div>
  )
}

export default About
