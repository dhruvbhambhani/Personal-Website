"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type PageTransitionProps = {
  children: ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className={cn("page-transition", mounted && "page-transition--visible", className)}>
      {children}
    </div>
  )
}






