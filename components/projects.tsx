"use client"

import { useEffect, useRef, useState } from "react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div ref={ref} className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="group relative overflow-hidden rounded-lg">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-75 transition duration-300 blur" />
                <div className="relative bg-gray-900/60 backdrop-blur-xl border border-blue-500/20 rounded-lg overflow-hidden flex flex-col hover:border-blue-500/50 transition-all p-8">
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-blue-500">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{project.period}</p>
                    <p className="text-gray-300 text-base mb-6">{project.description}</p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded">
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
    </section>
  )
}
