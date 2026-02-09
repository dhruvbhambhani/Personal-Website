"use client"
import Navigation from "@/components/navigation"
import Projects from "@/components/projects"
import Footer from "@/components/footer"
import { PageHero } from "@/components/page-hero"

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030014] text-white">
      <Navigation />
      <PageHero
        title="Projects"
      />
      <div className="relative z-10 flex flex-col gap-20 pb-24">
        <Projects />
        <Footer />
      </div>
    </main>
  )
}
