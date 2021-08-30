interface LinkTextTypes {
  link: string
  text: string
}

export const LinkText: React.FC<LinkTextTypes> = ({ link, text }) => (
  <a href={link} className='font-bold text-primary underline mx-4'>
    {text}
  </a>
)
