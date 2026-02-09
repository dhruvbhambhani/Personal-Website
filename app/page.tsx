"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ProjectsCarousel from "@/components/projects-carousel"
import Footer from "@/components/footer"
import { AuraSpotlight } from "@/components/aura"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030014] text-white">
      <AuraSpotlight className="top-1/2 max-w-5xl" />
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <div className="aura-ring" />
      </div>
      <Navigation />
      <div className="relative z-10 flex flex-col gap-20 pt-36 pb-24">
        <Hero />
        <ProjectsCarousel />
        <Footer />
      </div>
    </main>
  )
}
