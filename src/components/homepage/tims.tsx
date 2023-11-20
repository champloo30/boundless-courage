import React from 'react'
import posts from '../../../public/tims-posts.png'
import Image from 'next/image'
import Button from '@/components/ui/button'

const TIMS = () => {
  return (
    <section id='tims' className='h-[60vh] sm:h-[70vh] md:h-[47.5vh] lg:h-[80vh] w-screen px-8 flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-old-lace' aria-label='This Is My Story'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl text-purple font-medium capitalize'>this is my story</h1>
      <p className='text-lg sm:text-xl text-center'>T.I.M.S is a safe space to share your story and show others that they aren’t alone and see that you aren’t either!</p>
      <Button color='purple' link={true} href='#' name='T.I.M.S.'>Here</Button>
      <Image
        src={posts}
        alt='T.I.M.S. post'
      />
    </section>
  )
}

export default TIMS