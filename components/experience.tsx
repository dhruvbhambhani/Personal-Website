"use client"

import { useEffect, useRef, useState } from "react"

export default function Experience() {
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

  const experiences = [
    {
      year: "February 2026 – Present",
      role: "Web Developer",
      company: "AggieX - Innovation Branch (Startup Incubator)",
      description: "Built a full-stack startup application platform using React 19, Vite, and Framer Motion — featuring a 4-step wizard form with client-side routing and animated multi-step UI. Built Supabase-powered database to persist startup application data, including founder profiles, traction metrics, and video pitch submissions, to a PostgreSQL backend.",
      skills: [],
    },
    {
      year: "January 2026 – Present",
      role: "Incoming Undergraduate Researcher",
      company: "ENaS Lab, Texas A&M",
      description: "Developing data-driven, ML-based security solutions for IoT and cyber-physical systems. Focus on intrusion detection, ML for anomaly detection, and secure networked devices.",
      skills: ["Machine Learning", "Cyber Security", "IoT", "Intrusion Detection", "Anomaly Detection"],
    },
    {
      year: "January 2026 – Present",
      role: "Software Engineer / Web Developer",
      company: "EDEN Robotics",
      description: "• Built 6-layer cognitive architecture for humanoid robot using ROS2, Ollama LLMs, and Jetson Nano with <100ms decision-making. Developed affective AI with long-term memory and integrated CV, NLP, motion planning pipeline in NVIDIA Isaac Sim. \n• Maintaining and improving the website. Currently developing a RAG-based chatbot for technical support for interested individuals/companies, powered by our documentation.",
      skills: ["ROS2", "Ollama", "Jetson Nano", "Computer Vision", "NLP", "Isaac Sim"],
    },
    {
      year: "January 2026 – Present",
      role: "Student Worker",
      company: "Texas A&M University",
      description: "Conducting tasks in Electrical Engineering labs including preparing equipment, assisting students with equipment problems, and checking in lab workers.",
      skills: ["Lab Equipment", "Technical Support", "Electrical Engineering"],
    },
    {
      year: "August 2025 – Present",
      role: "TURTLE Robotics",
      company: "Texas A&M",
      description: "Full-Stack development for 350+ member robotics organization, built a fully-functional robot",
      dualRoles: [
        {
          title: "Web Developer",
          details: "Designed and maintained the TURTLE Robotics website. Built a Supabase-backed SQL database with custom forms for member data. Developed an AI-powered onboarding chatbot using fine-tuned Gemini LLM, contributing to 40% increase in project engagement.",
          skills: ["React", "Supabase", "SQL", "Gemini LLM", "AI Chatbot"],
        },
        {
          title: "Robotics Engineer",
          details: "Built and programmed an ESP32-based robot with wireless joystick input, PWM motor control, and servo-actuated claw using Arduino/C++.",
          skills: ["ESP32", "Arduino", "C++", "PWM", "Servo Control"],
        },
      ],
    },
    {
      year: "September 2025 – Present",
      role: "Co-Founder",
      company: "Pillar AI",
      description: "Novel local AI Automations for Real Estate using Agentic AI",
      skills: ["Agentic AI", "Real Estate", "Automation", "LLMs"],
    },
    {
      year: "May 2024 – August 2024",
      role: "Intern",
      company: "JBB Asset Management",
      description:
        "Handled financials/payroll for 400+ units and built Full Stack Website (React, HTML, Supabase, CSS)",
      skills: ["React", "HTML", "Supabase", "CSS", "Full Stack"],
    },
  ]

  const volunteering = [
    {
      year: "January 2025 – May 2025",
      role: "Data Analyst",
      company: "Aggie Data Science Club",
      description:
        "Cleaned data and simulated operation efficiency using Random Forest, XGBoost, and KNN Regression in Chemical Plant Simulation & Automation Project",
      skills: ["Python", "Random Forest", "XGBoost", "Data Cleaning", "ML"],
    },
    {
      year: "January 2025 – May 2025",
      role: "Web Developer",
      company: "Aggie Coding Club",
      description: "Full stack development for NPC Room Project using Java, HTML, Spring Boot, and MongoDB",
      skills: ["Java", "Spring Boot", "MongoDB", "Full Stack", "Web Dev"],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Work Experience</span>
        </h2>

        <div ref={ref} className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
              {exp.dualRoles ? (
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-slate-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-cyan-400 mb-1">{exp.role}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                      <p className="text-sm text-gray-500 mt-2">{exp.description}</p>
                      <span className="text-sm text-gray-400 block mt-3">{exp.year}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.dualRoles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500/60 transition-all"
                        >
                          <h4 className="text-lg font-semibold text-cyan-300 mb-2">{role.title}</h4>
                          <p className="text-gray-300 text-sm mb-3">{role.details}</p>
                          <div className="flex flex-wrap gap-2">
                            {role.skills.map((skill, i) => (
                              <span key={i} className="text-xs px-2 py-1 bg-cyan-500/30 text-cyan-200 rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-slate-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-400 mt-2 md:mt-0">{exp.year}</span>
                    </div>
                    <p className="text-gray-300 mb-4 whitespace-pre-line">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-16 mt-20 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Volunteering</span>
        </h2>

        <div className="space-y-8">
          {volunteering.map((vol, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-slate-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">{vol.role}</h3>
                      <p className="text-gray-400">{vol.company}</p>
                    </div>
                    <span className="text-sm text-gray-400 mt-2 md:mt-0">{vol.year}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{vol.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {vol.skills.map((skill, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded">
                        {skill}
                      </span>
                    ))}
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
