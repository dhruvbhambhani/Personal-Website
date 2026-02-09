"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Sparkles, Waves } from "lucide-react"
import Link from "next/link"
import { AuraSpotlight } from "@/components/aura"

const STATS = [
  { label: "AI / Robotics Builds", value: "4+" },
  { label: "Projects", value: "7+" },
  { label: "Years of Experience", value: "2+" },
]

export default function Hero() {
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

  const handleContactClick = () => {
    window.location.href = "mailto:dhruvbhambhani@tamu.edu"
  }

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <AuraSpotlight className="top-1/2 max-w-6xl opacity-70" />

      <div className="absolute inset-x-0 top-12 hidden h-48 md:block">
        <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-between opacity-60">
          <div className="aura-rail" />
          <div className="aura-rail delay-300" />
        </div>
      </div>

      <div className="absolute -left-32 top-24 hidden h-72 w-72 rounded-full bg-cyan-500/20 blur-[140px] md:block" />
      <div className="absolute -right-20 bottom-0 hidden h-64 w-64 rounded-full bg-indigo-500/20 blur-[120px] md:block" />

      <div
        ref={ref}
        className={`relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-200/80">
          <Sparkles className="h-4 w-4 text-cyan-400" />
          SYSTEMS ARCHITECT
        </span>

        <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl">
          <span className="aura-title">Dhruv Bhambhani</span>
          <span className="block text-lg font-normal text-cyan-100/80 sm:text-2xl">
            Major: MXET (Mechatronics) × Minor: AI in Business × Real Estate
          </span>
        </h1>

        <p className="mt-10 max-w-3xl text-base text-slate-300/90 sm:text-lg">
          Building intelligent physical systems where robotics, AI, and real-world interaction converge. I architect end-to-end solutions across embedded hardware, software, and cognitive frameworks that make autonomous systems feel responsive, intentional, and alive.
        </p>

        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-10 py-3 text-base font-semibold text-black shadow-[0_0_60px_rgba(56,189,248,0.35)] transition hover:scale-[1.02]"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 blur-xl transition group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-3">
              View My Work
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>

        <div className="mt-16 grid w-full gap-4 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="aura-card rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
              <div className="text-3xl font-semibold text-white">{stat.value}</div>
              <p className="text-sm uppercase tracking-wide text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
          <a href="mailto:dhruvbhambhani@tamu.edu" className="hover:text-cyan-300">
            dhruvbhambhani@tamu.edu
          </a>
          <span className="opacity-40">/</span>
          <a href="https://www.linkedin.com/in/dhruvbhambhani05" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
