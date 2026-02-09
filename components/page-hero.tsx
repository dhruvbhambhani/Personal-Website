"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type PageHeroProps = {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  className?: string
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex flex-col items-center gap-6 px-6 pt-40 pb-16 text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200/80">
          {eyebrow}
        </span>
      )}

      <h1 className="text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
        <span className="aura-title">{title}</span>
      </h1>

      {description && <p className="max-w-3xl text-base text-slate-300/90 sm:text-lg">{description}</p>}
    </section>
  )
}




