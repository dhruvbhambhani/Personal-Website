"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectsCarousel() {
  const [isVisible, setIsVisible] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const projects = [
    {
      title: "NPC Room (Aggie Coding Club)",
      description: "Full stack development project utilizing React, Java, Spring Boot, and MongoDB",
      tags: ["React", "Java", "Spring Boot", "MongoDB"],
      period: "January 2025 - May 2025",
    },
    {
      title: "Chemical Plant Simulation",
      description: "Data cleaning and ML model simulation for operation efficiency in chemical plant automation",
      tags: ["Python", "ML Models", "Data Science"],
      period: "January 2025 - May 2025",
    },
    {
      title: "JBB Asset Management Website",
      description: "Full-stack website for managing assets and financials with React frontend and Supabase backend",
      tags: ["React", "HTML", "CSS", "Supabase"],
      period: "May 2024 - August 2024",
    },
    {
      title: "Personal Website Portfolio",
      description: "Modern portfolio website with glassmorphism design and scroll-triggered animations",
      tags: ["React", "Next.js", "Tailwind CSS", "Animations"],
      period: "November 2025 - Present",
    },
  ]

  return (
    <section ref={ref} className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-lg border border-blue-500/30 hover:bg-blue-500/10 transition-all"
            >
              <ChevronLeft size={20} className="text-blue-400" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-lg border border-blue-500/30 hover:bg-blue-500/10 transition-all"
            >
              <ChevronRight size={20} className="text-blue-400" />
            </button>
          </div>
        </div>

        <div className="relative group">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth hide-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-96 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="group-hover:pause-animation h-full relative overflow-hidden rounded-lg">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-75 transition duration-300 blur" />
                  <div className="relative bg-gray-900/60 backdrop-blur-xl border border-blue-500/20 rounded-lg overflow-hidden h-full flex flex-col hover:border-blue-500/50 transition-all p-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-blue-500">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{project.period}</p>
                      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
