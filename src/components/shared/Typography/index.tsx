interface TextTypes {
  text?: string
}

export const Header: React.FC<TextTypes> = ({ text, children }) => (
  <h1 className='font-primary font-bold text-primary hover:underline m-0 text-5xl lg:text-6xl'>
    {children ? children : text}
  </h1>
)

export const Paragraph: React.FC<TextTypes> = ({ text, children }) => (
  <p
    className='font-secondary text-xl lg:text-2xl mt-4'
    style={{ lineHeight: 2 }}
  >
    {children ? children : text}
  </p>
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
