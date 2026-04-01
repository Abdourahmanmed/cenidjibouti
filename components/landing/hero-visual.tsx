"use client"

import Image from "next/image"
import { useMemo, useState } from "react"

import { CalendarDays, ShieldCheck, Users } from "@/components/landing/icons"
import { LogoCeni } from "@/components/landing/logo-ceni"
import { siteAssets } from "@/lib/site-assets"
import { cn } from "@/lib/utils"

const heroSlides = siteAssets.heroSlides.map((src, index) => ({
  src,
  alt: `Vue institutionnelle CENI ${index + 1}`,
  priority: index === 0,
}))

const heroBottomImages = siteAssets.heroBottomImages.map((src, index) => ({
  src,
  alt: `Visuel complémentaire CENI ${index + 1}`,
}))

function CoverCard({ src, alt, className, priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={cn("relative overflow-hidden rounded-2xl border border-border bg-muted/70", className)}>
        <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(22,163,74,0.18),rgba(219,234,254,0.75))]" />
        <div className="relative flex h-full items-center justify-center p-4 text-center text-xs font-medium tracking-wide text-primary/85 uppercase">
          Visuel CENI en cours de publication
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-border bg-muted", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1535px) 42vw, 720px"
        className="object-cover"
        onError={() => setError(true)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
    </div>
  )
}

export function HeroVisual() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const activeSlide = useMemo(() => heroSlides[activeSlideIndex] ?? heroSlides[0], [activeSlideIndex])

  return (
    <div className="w-full rounded-3xl border border-border bg-card p-4 shadow-[0_24px_44px_-24px_rgba(23,37,84,0.55)] md:max-w-[42rem] md:justify-self-end md:p-6 lg:max-w-[48rem] xl:max-w-[54rem]">
      <div className="space-y-3 ">
        <CoverCard {...activeSlide} className="aspect-[4/3] min-h-[240px] sm:aspect-[16/11] md:aspect-[5/4] md:min-h-0 lg:aspect-[16/10]" />

        <div className="flex flex-wrap items-center justify-center gap-2">
          {heroSlides.map((slide, index) => {
            const isActive = index === activeSlideIndex
            return (
              <button
                key={slide.src}
                type="button"
                aria-label={`Afficher l'image ${index + 1}`}
                aria-pressed={isActive}
                onClick={() => setActiveSlideIndex(index)}
                className={cn(
                  "h-2.5 rounded-full border border-primary/20 bg-primary/20 transition-all",
                  isActive ? "w-7 bg-primary" : "w-2.5 hover:bg-primary/45",
                )}
              />
            )
          })}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <article className="rounded-2xl border border-border bg-background p-4">
          <div className="flex items-center gap-3">
            <LogoCeni variant="round" size={44} className="bg-white" />
            <div>
              <p className="text-sm font-semibold text-foreground">Présidentielle 2026</p>
              <p className="text-xs text-muted-foreground">Canal officiel de la CENI</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Information fiable, lisible et accessible à tous les électeurs.</p>
        </article>
        <article className="rounded-2xl border border-border bg-background p-4">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><CalendarDays className="size-4 text-primary" /> Suivi du calendrier électoral</li>
            <li className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Transparence des opérations</li>
            <li className="flex items-center gap-2"><Users className="size-4 text-primary" /> Coordination institutionnelle</li>
          </ul>
        </article>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {heroBottomImages.map((image) => (
          <CoverCard key={image.src} {...image} className="aspect-[16/10] min-h-[120px] sm:min-h-0" />
        ))}
      </div>
    </div>
  )
}
