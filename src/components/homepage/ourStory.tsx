import React from 'react'
import Image from 'next/image'
import founder from '../../../public/founder.jpg'

const OurStory = () => {
  return (
    <section id='our-story' className='h-[70vh] w-screen px-16 py-8 flex flex-col justify-center gap-12 bg-old-lace' aria-label='Our Story'>
      <h1 className='text-5xl text-purple font-medium capitalize'>this is our story</h1>
      <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus. Donec et odio pellentesque diam volutpat. Mauris vitae ultricies leo integer malesuada. Enim facilisis gravida neque convallis a cras semper auctor neque. Ullamcorper a lacus vestibulum sed arcu non.</p>
      <div className='flex gap-8'>
        <div className='h-36 w-36 overflow-hidden rounded-full'>
          <Image
            className='h-48 w-48'
            src={founder}
            alt='Founder, Dennetta White'
          />
        </div>
        <p className='w-5/6 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Non arcu risus quis varius quam quisque id. Urna neque viverra justo nec ultrices dui. Eu volutpat odio facilisis mauris. Diam volutpat commodo sed egestas egestas fringilla.</p>
      </div>
    </section>
  )
}

export default OurStory