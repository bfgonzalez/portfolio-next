import classnames from 'classnames'

interface SectionTypes {
  isHero?: boolean
}

export const Section: React.FC<SectionTypes> = ({ isHero, children }) => (
  <section
    className={classnames(
      'flex flex-col justify-center items-center px-2',
      isHero ? 'h-screen' : 'lg:h-screen'
    )}
  >
    <main className='flex-1 flex flex-col justify-center items-start py-20 text-left w-11/12 lg:w-3/4'>
      {children}
    </main>
  </section>
)
