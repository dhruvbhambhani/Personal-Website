"use client"

import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-xl py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© {currentYear} All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made by Dhruv Bhambhani
          </p>

        </div>
      </div>
    </footer>
  )
}
