import React from 'react'

const Hero = () => {
  return (
    <section id='start' className='relative h-screen w-screen bg-hero bg-fixed' aria-label='Our Story'>
      <div className='absolute h-screen w-screen px-8 flex flex-col justify-center items-center bg-purple/80'>
        <h1 className='text-5xl sm:text-6xl tall:text-7xl lg:text-8xl text-old-lace text-center font-bold uppercase'>boundless courage</h1>
        <p className='text-xl sm:text-2xl tall:text-3xl lg:text-4xl text-old-lace text-center capitalize'>non-profit domestic violence awareness organization</p>
      </div>
    </section>
  )
}

export default Hero