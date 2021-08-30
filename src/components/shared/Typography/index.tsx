interface HeaderTypes {
  text?: string
}

export const Header: React.FC<HeaderTypes> = ({ text, children }) => (
  <h1 className='font-primary font-bold text-primary hover:underline m-0 text-5xl lg:text-6xl'>
    {children ? children : text}
  </h1>
)

interface LinkTextTypes {
  link: string
  text: string
}

export const LinkText: React.FC<LinkTextTypes> = ({ link, text }) => (
  <a href={link} className='font-bold text-primary underline mx-4'>
    {text}
  </a>
)
