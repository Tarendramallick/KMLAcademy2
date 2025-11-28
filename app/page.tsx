"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import MissionSection from "@/components/mission-section"
import CTASection from "@/components/cta-section"
import Admissions from "@/components/admissions"
import Programs from "@/components/programs"
import ActivitiesCarousel from "@/components/activities-carousel"
import Achievements from "@/components/achievements"
import FounderSection from "@/components/founder-section"
import Facilities from "@/components/facilities"
import ContactPopup from "@/components/contact-popup"
import NewsEvents from "@/components/news-events"
import Sponsors from "@/components/sponsors"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MissionSection />
      <CTASection />
      <Admissions />
      <Programs />
      <ActivitiesCarousel />
      <Achievements />
      <FounderSection />
      <Facilities />
      <NewsEvents />
      <Sponsors />
      <Footer />
      <ContactPopup />
    </div>
  )
}
