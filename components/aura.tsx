import { cn } from "@/lib/utils"

const AURA_LAYERS = [
  {
    className: "bg-[radial-gradient(circle_at_50%_20%,_rgba(56,189,248,0.25),_transparent_55%)]",
    delay: "0s",
  },
  {
    className: "bg-[radial-gradient(circle_at_20%_80%,_rgba(167,139,250,0.2),_transparent_60%)]",
    delay: "4s",
  },
  {
    className: "bg-[radial-gradient(circle_at_80%_60%,_rgba(59,130,246,0.25),_transparent_45%)]",
    delay: "8s",
  },
]

const ORBS = [
  {
    size: "h-64 w-64",
    className: "bg-cyan-500/20",
    blur: "blur-[120px]",
    delay: "-2s",
  },
  {
    size: "h-72 w-72",
    className: "bg-indigo-500/30",
    blur: "blur-[140px]",
    delay: "1s",
  },
  {
    size: "h-56 w-56",
    className: "bg-sky-400/25",
    blur: "blur-[110px]",
    delay: "-4s",
  },
]

export function AuraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#01010e]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-40 aura-grid" />

      {AURA_LAYERS.map((layer, index) => (
        <div
          key={`layer-${index}`}
          className={cn("absolute inset-0 animate-auraPulse", layer.className)}
          style={{ animationDelay: layer.delay }}
        />
      ))}

      {ORBS.map((orb, index) => (
        <div
          key={`orb-${index}`}
          className={cn(
            "absolute animate-auraDrift rounded-full mix-blend-screen",
            orb.size,
            orb.className,
            orb.blur,
          )}
          style={{
            animationDelay: orb.delay,
            top: `${20 + index * 15}%`,
            left: `${10 + index * 25}%`,
          }}
        />
      ))}

      <div className="absolute inset-0 aura-noise opacity-20" />
    </div>
  )
}

export function AuraSpotlight({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-x-0 top-1/3 mx-auto h-[420px] max-w-4xl -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 via-sky-400/15 to-blue-500/10 blur-[90px]",
        className,
      )}
    />
  )
}

