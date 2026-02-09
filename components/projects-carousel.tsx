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
      title: "EDEN · TURTLE Robotics",
      description: "6-layer cognitive architecture for humanoid robot with ROS2, Ollama LLMs, and Jetson Nano",
      tags: ["ROS2", "Ollama", "Jetson Nano", "Isaac Sim"],
      period: "January 2026 — Present",
    },
    {
      title: "CRYOS · TAMUHack26",
      description: "Personalized fraud detection with 20 AI agents using multi-tiered LLMs. Runners-up in USAA Track",
      tags: ["Python", "OpenAI API", "Claude API", "Vector DBs"],
      period: "January 2026",
    },
    {
      title: "Crescent Place Apartments",
      description: "Modern real estate website with Next.js, TypeScript, and cloud database backend",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloud DB"],
      period: "January 2026 — Present",
    },
    {
      title: "Personal Website",
      description: "Multi-page portfolio with Next.js 16, React 19, glassmorphism design and 57+ Radix UI components",
      tags: ["Next.js", "React 19", "TypeScript", "Radix UI"],
      period: "November 2025 — Present",
    },
    {
      title: "JBB Asset Management",
      description: "Next.js real estate platform with TypeScript, Tailwind CSS, React Hook Form + Zod, and SEO",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zod"],
      period: "October 2025 — Present",
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
                className={`flex-shrink-0 w-96 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
