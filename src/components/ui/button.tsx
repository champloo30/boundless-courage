import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  color: string,
  link?: boolean,
  href: string,
  target?: string,
  name: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  link,
  href,
  target,
  name
}) => {
  return (
    <>
      {color === 'purple' ? link ? 
      <button className={`h-12 lg:h-16 w-28 lg:w-36 text-2xl lg:text-4xl text-purple border-[3px] lg:border-4 border-purple hover:bg-purple hover:text-old-lace transition linear duration-500`} type='button' title={`Go to ${name}`}><a href={href} target={target}>{children}</a></button> :
      <button className={`h-12 lg:h-16 w-28 lg:w-36 text-2xl lg:text-4xl text-purple border-[3px] lg:border-4 border-purple hover:bg-purple hover:text-old-lace transition linear duration-500`} type='button' title={`Email ${name}`}><a href={`mailto:${href}`}>{children}</a></button> :
      link ? 
      <button className={`h-12 lg:h-16 w-28 lg:w-36 text-2xl lg:text-4xl text-old-lace border-[3px] lg:border-4 border-old-lace hover:bg-old-lace hover:text-purple transition linear duration-500`} type='button' title={`Go to ${name}`}><a href={href} target={target}>{children}</a></button> :
      <button className={`h-12 lg:h-16 w-28 lg:w-36 text-2xl lg:text-4xl text-old-lace border-[3px] lg:border-4 border-old-lace hover:bg-old-lace hover:text-purple transition linear duration-500`} type='button' title={`Email ${name}`}><a href={`mailto:${href}`}>{children}</a></button>
      }
    </>
  )
}

export default Button