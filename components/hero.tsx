"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const handleContactClick = () => {
    window.location.href = "mailto:dhruvbhambhani@tamu.edu"
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-cyan-600/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Dhruv Bhambhani
          </span>
          <br />
          <span className="text-white">Mechatronics Engineering & Real Estate</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto animate-fade-in-delay">
          Full-stack developer specializing in AI automation, robotics, and innovative solutions. Texas A&M student
          passionate about building the future.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-delay text-sm text-gray-500">
          <a href="mailto:dhruvbhambhani@tamu.edu" className="hover:text-blue-400 transition">
            dhruvbhambhani@tamu.edu
          </a>
          <span>•</span>
          <a href="tel:832-971-8937" className="hover:text-blue-400 transition">
            832-971-8937
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/dhruvbhambhani05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <Link
            href="/projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-block text-center"
          >
            View My Work
          </Link>
          <button
            onClick={handleContactClick}
            className="px-8 py-3 border-2 border-blue-500/50 rounded-lg font-semibold hover:bg-blue-500/10 transition-all flex items-center justify-center gap-2"
          >
            Get In Touch <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-blue-500">↓</div>
      </div>
    </section>
  )
}
