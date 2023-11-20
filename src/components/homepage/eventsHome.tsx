import React from 'react'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container'

const EventsHome = () => {
  return (
    <section id='events-home' className='h-[30vh] sm:h-[40vh] md:h-[25vh] tall:h-[25vh] lg:h-[45vh] 2xl:h-[20vh] w-screen flex justify-center items-center bg-fade' aria-label='events'>
      <Container classes='flex flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-8'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl text-purple capitalize'>our events</h1>
        <p className="text-lg sm:text-xl">Click here for all upcoming events</p>
        <Button color='purple' link={true} href='#' name='Events'>Here</Button>
      </Container>
    </section>
  )
}

export default EventsHome