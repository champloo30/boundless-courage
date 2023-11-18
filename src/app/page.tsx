import Hero from "@/components/homepage/hero";
import EventsHome from "@/components/homepage/eventsHome";
import OurStory from "@/components/homepage/ourStory";
import TopNav from "@/components/topNav";
import TIMS from "@/components/homepage/tims";
import ContactUs from "@/components/homepage/contactUs";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <main className="scroll-smooth">
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
