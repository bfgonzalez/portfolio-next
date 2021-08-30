import classnames from 'classnames'

interface TextTypes {
  text?: string
}

export const Header: React.FC<TextTypes> = ({ text, children }) => (
  <h1 className='font-primary font-bold text-primary m-0 text-5xl lg:text-6xl'>
    {children ? children : text}
  </h1>
)

export const Paragraph: React.FC<TextTypes> = ({ text, children }) => (
  <p
    className='font-secondary text-xl lg:text-2xl my-4'
    style={{ lineHeight: 2 }}
  >
    {children ? children : text}
  </p>
)

interface LinkTextTypes {
  link: string
  text: string
  color?: string
}

export const LinkText: React.FC<LinkTextTypes> = ({
  link,
  text,
  color = 'primary'
}) => (
  <a
    href={link}
    target='_blank'
    rel='noopener noreferrer'
    className={`font-bold text-${color} underline mx-4 hover:text-primary`}
  >
    {text}
  </a>
)
