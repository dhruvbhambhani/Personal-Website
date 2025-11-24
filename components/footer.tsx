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
            Made with <Heart className="w-4 h-4 text-cyan-400" /> by You
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
