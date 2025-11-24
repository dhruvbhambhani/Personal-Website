"use client"
import Navigation from "@/components/navigation"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navigation />
      <About />
      <Footer />
    </main>
  )
}
