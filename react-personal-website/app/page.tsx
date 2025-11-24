"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ProjectsCarousel from "@/components/projects-carousel" // Added ProjectsCarousel import
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navigation />
      <Hero />
      <ProjectsCarousel /> // Added scrollable projects carousel
      <Footer />
    </main>
  )
}
