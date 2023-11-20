import Link from 'next/link'
import React from 'react'

const Skip = () => {
  return (
    <a className='absolute z-30 -translate-y-16 ml-8 lg:ml-16 focus:translate-y-20 transition-transform ease duration-300 p-4 bg-old-lace border-2 border-purple text-purple' href='#main-content'>Skip To Main Content</a>
  )
}

export default Skip