import React from 'react'

interface ContainerProps {
  children: React.ReactNode,
  classes: string
}

const Container: React.FC<ContainerProps> = ({ children, classes }) => {
  return (
    <div className={`w-full 2xl:max-w-screen-2xl ${classes}`}>{children}</div>
  )
}

export default Container