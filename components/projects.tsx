"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Github, Globe } from "lucide-react"

const projects = [
  {
    title: "EDEN Robotics Website",
    description: [
      "Built landing page for Eden, an AI/robotics project — showcasing its architecture, use cases, GitHub stats, team members, and a walkthrough, with a polished, animated single-page design using React 19 + Vite, styled with Tailwind CSS 4",
      "Currently building an intelligent documentation assistant for a multi-layer robotics software framework. The chatbot leverages Retrieval-Augmented Generation (RAG) to let users ask natural language questions and get precise, context-aware answers drawn directly from the project's technical documentation",
    ],
    tags: ["React 19", "Vite", "Tailwind CSS 4", "RAG", "AI Chatbot"],
    period: "Feb 2026 — Present",
    website: "https://eden-robotics.github.io/Eden/"
  },
  {
    title: "EDEN Robotics",
    description: [
      "Developed 6-layer distributed cognitive architecture for humanoid robot using ROS2, Ollama LLMs, and Jetson Nano with <100ms real-time decision-making",
      "Built affective AI framework with Supermemory for long-term memory, enabling personalized human-robot interaction based on emotional context and user history",
      "Integrated end-to-end CV, NLP, and motion planning pipeline validated in NVIDIA Isaac Sim using ROS-MCP for open-source humanoid robotics",
    ],
    tags: ["ROS2", "Ollama", "Jetson Nano", "Isaac Sim", "Computer Vision", "NLP"],
    period: "Jan 2026 — Present",
    github: "https://github.com/EDEN-robotics",
  },
  {
    title: "CRYOS · TAMUHack26 · Runners-up in USAA Track",
    description: [
      "Developed personalized fraud detection system with 20 specialized AI agents that learn individual account behavior using multi-tiered LLMs (GPT-4o-mini, Claude models) and Capital One API integration at TamuHack26",
      "Built adaptive multi-agent architecture with persistent memory stores and RAG retrieval enabling context-aware threat analysis and meta-learning that evolves detection capabilities over time.",
    ],
    tags: ["Python", "OpenAI API", "Claude API", "Vector Databases", "Multi-Agent Systems", "Capital One API"],
    period: "Jan 2026",
    github: "https://github.com/VedSoni-dev/cryos.git",
  },
  {
    title: "Crescent Place Apartments Website",
    description: [
      "Built a modern real estate website using Next.js, TypeScript, and Tailwind CSS with multi-page architecture featuring floor plans, gallery, amenities, neighborhood info, and contact functionality",
      "Integrated cloud database backend to enable dynamic content management and streamlined property listing capabilities",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloud Database", "Real Estate"],
    period: "Jan 2026 — Present",
    inProgress: true,
  },
  {
    title: "Personal Website",
    description: [
      "Built multi-page portfolio with Next.js 16, React 19, and TypeScript featuring custom aura effects, animated timelines, and 57+ Radix UI components",
      "Designed responsive glassmorphic UI with Tailwind CSS 4, dark theme support, and smooth page transitions across experience, projects, and about sections",
    ],
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide"],
    period: "Nov 2025 — Present",
  },
  {
    title: "JBB Asset Management Website",
    description: [
      "Built Next.js real estate platform with public website (portfolio, services, about, contact) using various UI components",
      "Enterprise-grade tech stack using TypeScript, Tailwind CSS, React Hook Form, and SEO optimization",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "SEO"],
    period: "Oct 2025 — Present",
    website: "https://www.jbbassetmanagement.com/",
  },
  {
    title: "NPC Room · Aggie Coding Club",
    description: [
      "Full stack development for NPC Room Project with Aggie Coding Club",
      "Utilized React for frontend, Java and Spring Boot for backend, and MongoDB for database management",
    ],
    tags: ["React", "Spring Boot", "MongoDB", "Java"],
    period: "Jan 2025 — May 2025",
  },
  {
    title: "Chemical Plant Simulation · Aggie Data Science Club",
    description: [
      "Cleaned data and simulated operation efficiency using ML models with Aggie Data Science Club",
      "Implemented Chemical Plant Simulation & Automation Project using Python-based ML frameworks",
    ],
    tags: ["Python", "ML", "Pipelines", "Dashboards"],
    period: "Jan 2025 — May 2025",
  },
]

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

  const timeline = projects.map((project, index) => ({
    ...project,
    position: (index % 2 === 0 ? "left" : "right") as "left" | "right",
  }))

  return (
    <section id="projects" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(32,211,238,0.08),_transparent_45%)] opacity-70" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div
          ref={ref}
          className={`text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200/80">
            Building Never Stops
          </span>
          <h2 className="mt-6 text-4xl font-semibold text-white md:text-5xl">Timeline of Projects</h2>
          <p className="mt-4 text-base text-slate-300/90 md:text-lg">
            A collection of builds that shaped my skillsets.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute inset-y-0 left-6 w-px bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-14">
            {timeline.map((project, index) => (
              <TimelineRow key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type TimelineProject = (typeof projects)[number] & { position: "left" | "right" }

function TimelineRow({ project, index }: { project: TimelineProject; index: number }) {
  const isLeft = project.position === "left"

  return (
    <div className="relative grid gap-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center">
      <div className={cn("md:px-10", isLeft ? "md:order-1 text-left md:text-right" : "md:order-3")}>
        <ProjectCard {...project} alignment={isLeft ? "right" : "left"} />
      </div>

      <div className="relative flex flex-col items-center md:order-2">
        <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:block" />
        <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/50 bg-[#050a1f] text-sm font-semibold text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.45)]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="md:hidden">
        <div className="ml-16 border-l border-cyan-400/30 pl-6">
          <ProjectMeta period={project.period} />
        </div>
      </div>

      <div className={cn("hidden md:block md:px-10", isLeft ? "md:order-3" : "md:order-1 text-right")}>
        <ProjectMeta period={project.period} />
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  tags,
  github,
  website,
  inProgress,
  alignment = "left",
}: {
  title: string
  description: string[]
  tags: string[]
  github?: string
  website?: string
  inProgress?: boolean
  alignment?: "left" | "right"
}) {
  return (
    <div
      className="text-left rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_25px_90px_rgba(2,6,23,0.65)] backdrop-blur-3xl transition hover:border-cyan-300/40 hover:shadow-[0_25px_120px_rgba(59,130,246,0.45)]"
    >
      <div className="flex items-start justify-between">
        <div>
          {inProgress ? (
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-cyan-200/70">
              Currently Building
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
            </p>
          ) : (
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/70">Build</p>
          )}
          <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
        </div>
        <div className="flex items-center gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Globe className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-left">
        {description.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-300/90">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400"></span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-[#0e142d] px-4 py-1 text-xs font-medium text-cyan-100/80 ring-1 ring-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectMeta({ period }: { period: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-[#070b1b] px-4 py-1 text-sm text-cyan-100 ring-1 ring-cyan-400/30">
      <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
      {period}
    </div>
  )
}
