'use client'

import { useState } from 'react'
import Hero from "@/components/homepage/hero";
import EventsHome from "@/components/homepage/eventsHome";
import OurStory from "@/components/homepage/ourStory";
import TopNav from "@/components/nav/topNav";
import TIMS from "@/components/homepage/tims";
import ContactUs from "@/components/homepage/contactUs";
import Footer from "@/components/nav/footer";
import SideMenu from "@/components/nav/sideMenu";
import Skip from '@/components/nav/skip';

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <header className="relative">
        <Skip />
        <TopNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </header>
      <main id='main-content' className="scroll-smooth">
        <Hero />
        <OurStory />
        <EventsHome />
        <TIMS />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
