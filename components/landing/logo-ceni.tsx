"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

import { cn } from "@/lib/utils"

type LogoVariant = "round" | "square"

const LOGO_MAP: Record<LogoVariant, { src: string; alt: string }> = {
  round: {
    src: "/assets/ceni/logo-rond.png",
    alt: "Logo rond officiel de la CENI",
  },
  square: {
    src: "/assets/ceni/logo-carre.png",
    alt: "Logo carré officiel de la CENI",
  },
}

type LogoCeniProps = {
  variant?: LogoVariant
  size?: number
  className?: string
  priority?: boolean
  alt?: string
}

export function LogoCeni({ variant = "round", size = 48, className, priority = false, alt }: LogoCeniProps) {
  const [hasError, setHasError] = useState(false)
  const logo = LOGO_MAP[variant]

  const fallbackLabel = useMemo(() => (variant === "round" ? "CENI" : "Commission Électorale"), [variant])

  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-white/25 bg-white/95 shadow-sm",
        variant === "round" ? "rounded-full" : "rounded-2xl",
        className,
      )}
      style={{ width: size, height: size }}
      aria-label={alt ?? logo.alt}
    >
      {hasError ? (
        <span
          className={cn(
            "px-1 text-center font-semibold tracking-[0.14em] text-primary",
            size >= 56 ? "text-xs" : "text-[10px]",
          )}
        >
          {fallbackLabel}
        </span>
      ) : (
        <Image
          src={logo.src}
          alt={alt ?? logo.alt}
          fill
          sizes={`${size}px`}
          priority={priority}
          className="object-contain p-[6%]"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  )
}
