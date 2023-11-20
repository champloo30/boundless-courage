import React from 'react'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container'

const ContactUs = () => {
  return (
    <section id='contact-us' className='h-[30vh] sm:h-[40vh] md:h-[25vh] tall:h-[25vh] lg:h-[45vh] 2xl:h-[20vh] w-screen px-8 flex justify-center items-center bg-purple text-old-lace' aria-label='contact us'>
      <Container classes='flex flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-8'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl capitalize'>contact us</h1>
      <p className='text-lg sm:text-xl text-center'>Email us any inquiries, messages, and/or comments.</p>
      <Button color='old-lace' link={false} href='boundlesscourageinc@gmail.com' name='Boundless Courage, Inc'>Here</Button>
      </Container>
    </section>
  )
}

export default ContactUs