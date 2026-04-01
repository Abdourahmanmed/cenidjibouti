"use client"

import Image from "next/image"
import { useState } from "react"

import { CalendarDays, ShieldCheck, Users } from "@/components/landing/icons"
import { LogoCeni } from "@/components/landing/logo-ceni"
import { cn } from "@/lib/utils"

const covers = [
  {
    src: "/assets/ceni/cover-1.jpg",
    alt: "Vue institutionnelle liée aux opérations électorales supervisées par la CENI",
    priority: true,
  },
  {
    src: "/assets/ceni/cover-2.jpg",
    alt: "Agents et observateurs mobilisés pour le suivi du scrutin",
  },
  {
    src: "/assets/ceni/cover-3.jpg",
    alt: "Bureau de vote et logistique électorale",
  },
]

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
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 45vw, 560px"
        className="object-cover"
        onError={() => setError(true)}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
    </div>
  )
}

export function HeroVisual() {
  return (
    <div className="rounded-3xl border border-border bg-card p-4 shadow-[0_24px_44px_-24px_rgba(23,37,84,0.55)] md:p-6">
      <div className="grid gap-3 md:grid-cols-3 md:grid-rows-[minmax(168px,1fr)_minmax(168px,1fr)]">
        <CoverCard {...covers[0]} className="md:col-span-2 md:row-span-2 min-h-[270px]" />
        <CoverCard {...covers[1]} className="min-h-[130px]" />
        <CoverCard {...covers[2]} className="min-h-[130px]" />
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
    </div>
  )
}
