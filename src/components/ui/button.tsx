import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  mainColor: string,
  secondaryColor: string,
  link?: boolean,
  href: string,
  target?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  mainColor,
  secondaryColor,
  link,
  href,
  target
}) => {
  return (
    <>
      {link ? 
      <button className={`h-16 w-36 text-4xl text-${mainColor} border-4 border-${mainColor} hover:bg-${mainColor} hover:text-${secondaryColor} transition linear duration-500`} type='button'><a href={href} target={target}>{children}</a></button> :
      <button className={`h-16 w-36 text-4xl text-${mainColor} border-4 border-${mainColor} hover:bg-${mainColor} hover:text-${secondaryColor} transition linear duration-500`} type='button'><a href={`mailto:${href}`}>{children}</a></button>
      }
    </>
  )
}

export default Button