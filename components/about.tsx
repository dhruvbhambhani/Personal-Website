"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const observersRef = useRef<Map<string, IntersectionObserver>>(new Map())

  const setSectionRef = (key: string) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionRefs.current[key] = el

      // Create observer for this element
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(key))
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      )

      observer.observe(el)
      observersRef.current.set(key, observer)
    } else {
      // Clean up observer if element is removed
      const observer = observersRef.current.get(key)
      if (observer) {
        observer.disconnect()
        observersRef.current.delete(key)
      }
      sectionRefs.current[key] = null
    }
  }

  useEffect(() => {
    return () => {
      // Cleanup all observers on unmount
      observersRef.current.forEach((observer) => observer.disconnect())
      observersRef.current.clear()
    }
  }, [])

  const technicalSkills = [
    { category: "Languages", items: ["Python", "TypeScript", "Java", "C/C++", "SQL", "HTML/CSS"] },
    { category: "Web Development", items: ["Next.js", "React", "Tailwind CSS", "Supabase", "MongoDB", "Spring Boot"] },
    { category: "AI & ML", items: ["OpenAI API", "Claude API", "Ollama LLMs", "Vector Databases", "Computer Vision", "NLP"] },
    { category: "Robotics & Tools", items: ["ROS2", "Jetson Nano", "Isaac Sim", "SOLIDWORKS", "ESP32", "Arduino"] },
  ]

  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <div
          ref={setSectionRef("intro")}
          className={`transition-all duration-1000 ease-out ${visibleSections.has("intro") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="grid items-start gap-12 md:grid-cols-3">
            {/* Profile Picture Section */}
            <div className="flex justify-center md:col-span-1">
              <div className="relative group w-80 h-80">
                <div className="relative bg-black/60 backdrop-blur-xl border border-blue-500/30 rounded-lg overflow-hidden h-full w-full flex items-center justify-center hover:border-blue-500/60 transition-all">
                  <img src="/images/image.png" alt="Dhruv Bhambhani Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Introduction Section */}
            <div className="space-y-6 md:col-span-2">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Multidisciplinary Engineer & Full-Stack Developer
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate engineering student at Texas A&M University specializing in Mechatronics, combining
                  hardware and software expertise to create innovative solutions. With a strong foundation in full-stack
                  development, AI automation, and robotics research, I'm committed to building impactful technology that
                  solves real-world problems.
                </p>
                <p className="text-gray-300 leading-relaxed">

                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 backdrop-blur-xl border border-blue-500/30 rounded-lg p-4 hover:border-blue-500/60 transition-all">
                  <p className="text-sm text-gray-300">
                    <span className="text-blue-400 font-semibold">Education:</span> B.S. in Mechatronics Engineering,
                    Texas A&M University (2028), Minor: AI in Business
                  </p>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-blue-500/30 rounded-lg p-4 hover:border-blue-500/60 transition-all">
                  <p className="text-sm text-gray-300">
                    <span className="text-blue-400 font-semibold">Licenses:</span> Texas Real Estate Professional (TREC)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div
          ref={setSectionRef("skills")}
          className={`space-y-8 transition-all duration-1000 ease-out ${visibleSections.has("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-xl border border-blue-500/30 rounded-lg p-6 hover:border-blue-500/60 transition-all h-full"
              >
                <h3 className="text-lg font-semibold text-blue-400 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div
          ref={setSectionRef("certifications")}
          className={`space-y-6 transition-all duration-1000 ease-out ${visibleSections.has("certifications") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Certifications & Licenses
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-xl border border-blue-500/30 rounded-lg p-6 hover:border-blue-500/60 transition-all">
              <h3 className="font-semibold text-blue-400 mb-2">Texas Real Estate License</h3>
              <p className="text-gray-400 text-sm mb-2">Issued by TREC - August 2025</p>
              <p className="text-gray-300 text-sm">
                Licensed real estate professional specialized in commercial transactions with 180 hours of comprehensive
                education
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-xl border border-blue-500/30 rounded-lg p-6 hover:border-blue-500/60 transition-all">
              <h3 className="font-semibold text-blue-400 mb-2">AI & Data Science Certifications</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>✦ Python 101 in Data Science (July 2025)</li>
                <li>✦ Intro to ML in AWS (July 2025)</li>
                <li>✦ Generative AI: Intro to LLMs (July 2025)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
