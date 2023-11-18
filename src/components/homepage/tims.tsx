import React from 'react'
import posts from '../../../public/tims-posts.png'
import Image from 'next/image'
import Button from '@/components/ui/button'

const TIMS = () => {
  return (
    <section id='tims' className='h-[80vh] w-screen flex flex-col justify-center items-center gap-12 bg-old-lace' aria-label='This Is My Story'>
      <h1 className='text-5xl text-purple font-medium capitalize'>this is my story</h1>
      <p className='text-xl text-center'>T.I.M.S is a safe space to share your story and show others that they aren’t alone and see that you aren’t either!</p>
      <Button mainColor='purple' secondaryColor='old-lace' link={true} href='#'>Here</Button>
      <Image
        src={posts}
        alt='T.I.M.S. post'
      />
    </section>
  )
}

export default TIMS