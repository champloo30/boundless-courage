import React from 'react'
import Image from 'next/image'
import founder from '../../../public/founder.jpg'
import Container from '@/components/ui/container'

const OurStory = () => {
  return (
    <section id='our-story' className='h-fit sm:h-[75vh] md:h-[52.5vh] tall:h-[45vh] lg:h-[75vh] 2xl:h-[30vh] w-screen px-8 tall:px-12 lg:px-16 py-8 flex justify-center items-center bg-old-lace' aria-label='Our Story'>
      <Container classes='flex flex-col justify-center items-center sm:items-start gap-4 sm:gap-8 lg:gap-12'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl text-purple font-medium capitalize'>this is our story</h1>
        <p className='sm:text-lg lg:text-xl text-center sm:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus. Donec et odio pellentesque diam volutpat. Mauris vitae ultricies leo integer malesuada. Enim facilisis gravida neque convallis a cras semper auctor neque. Ullamcorper a lacus vestibulum sed arcu non.</p>
        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8'>
          <h2 className='sm:hidden text-2xl text-purple capitalize'>meet our founder</h2>
          <div className='h-36 w-36 sm:h-28 sm:w-28 md:h-36 md:w-36 overflow-hidden rounded-full'>
            <Image
              className='h-56 w-56 sm:object-cover'
              src={founder}
              alt='Founder, Dennetta White'
            />
          </div>
          <div className='sm:w-3/4 space-y-2 lg:space-y-4'>
            <h2 className='hidden sm:inline text-2xl lg:text-3xl text-purple capitalize'>meet our founder</h2>
            <p className='sm:text-lg lg:text-xl text-center sm:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Non arcu risus quis varius quam quisque id. Urna neque viverra justo nec ultrices dui. Eu volutpat odio facilisis mauris. Diam volutpat commodo sed egestas egestas fringilla.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OurStory