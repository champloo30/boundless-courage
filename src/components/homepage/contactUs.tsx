import React from 'react'
import Button from '@/components/ui/button'

const ContactUs = () => {
  return (
    <section id='contact-us' className='h-[50vh] w-screen flex flex-col justify-center items-center gap-8 bg-purple text-old-lace' aria-label='contact us'>
      <h1 className='text-5xl capitalize'>contact us</h1>
      <p className='text-xl'>Email us any inquiries, messages, and/or comments.</p>
      <Button mainColor='old-lace' secondaryColor='purple' link={false} href='boundlesscourageinc@gmail.com'>Here</Button>
    </section>
  )
}

export default ContactUs