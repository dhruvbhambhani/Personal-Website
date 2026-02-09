"use client"
import Navigation from "@/components/navigation"
import Experience from "@/components/experience"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030014] text-white">
      <Navigation />
      <PageHero
        title="Experience"
      />
      <div className="relative z-10 flex flex-col gap-20 pb-24">
        <Experience />
        <Footer />
      </div>
    </main>
  )
}
