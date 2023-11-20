import React from 'react'
import Button from '@/components/ui/button'

const ContactUs = () => {
  return (
    <section id='contact-us' className='h-[30vh] sm:h-[40vh] md:h-[25vh] lg:h-[45vh] w-screen px-8 flex flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-8 bg-purple text-old-lace' aria-label='contact us'>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl capitalize'>contact us</h1>
      <p className='text-lg sm:text-xl text-center'>Email us any inquiries, messages, and/or comments.</p>
      <Button color='old-lace' link={false} href='boundlesscourageinc@gmail.com' name='Boundless Courage, Inc'>Here</Button>
    </section>
  )
}

export default ContactUs