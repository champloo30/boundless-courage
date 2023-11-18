import React from 'react'
import Button from '@/components/ui/button'

const EventsHome = () => {
  return (
    <section id='events-home' className='h-[50vh] w-screen flex flex-col justify-center items-center gap-8 bg-fade' aria-label='events'>
      <h1 className='text-5xl text-purple capitalize'>our events</h1>
      <p className="text-xl">Click here for all upcoming events</p>
      <Button mainColor='purple' secondaryColor='fade' link={true} href='#'>Here</Button>
    </section>
  )
}

export default EventsHome