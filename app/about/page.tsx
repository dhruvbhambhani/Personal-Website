"use client"
import Navigation from "@/components/navigation"
import About from "@/components/about"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030014] text-white">
      <Navigation />
      <PageHero
        title="About Me"
      />
      <div className="relative z-10 flex flex-col gap-20 pb-24">
        <About />
        <Footer />
      </div>
    </main>
  )
}
