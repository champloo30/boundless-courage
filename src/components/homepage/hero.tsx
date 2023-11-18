import React from 'react'

const Hero = () => {
  return (
    <section className='relative h-screen w-screen bg-hero bg-fixed' aria-label='Our Story'>
      <div className='absolute h-screen w-screen flex flex-col justify-center items-center bg-purple/80'>
        <h1 className='text-8xl text-old-lace font-bold uppercase'>boundless courage</h1>
        <p className='text-4xl text-old-lace capitalize'>non-profit domestic violence awareness organization</p>
      </div>
    </section>
  )
}

export default Hero