"use client"
import Navigation from "@/components/navigation"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navigation />
      <Projects />
      <Footer />
    </main>
  )
}
