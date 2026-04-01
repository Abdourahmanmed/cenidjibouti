import Link from "next/link"

import { HeroVisual } from "@/components/landing/hero-visual"
import { LogoCeni } from "@/components/landing/logo-ceni"
import { Button } from "@/components/ui/button"
import { heroHighlights, keyDates } from "@/lib/ceni-content"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/70 bg-[radial-gradient(circle_at_top,_rgba(11,42,74,0.14),_transparent_60%)] py-18 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(to_right,rgba(18,58,102,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,58,102,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-secondary uppercase">
            Institution électorale nationale
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Garantir la régularité, la transparence et la confiance du processus électoral.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
            La Commission Électorale Nationale Indépendante veille à la supervision, au contrôle et au suivi des opérations électorales à Djibouti-ville et dans les régions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#calendrier">Consulter les informations</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/25">
              <Link href="#mission">Lire la mission de la CENI</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <article key={item.label} className="rounded-2xl border border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <item.icon className="size-5 text-primary" />
                  <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                </div>
                <p className="mt-2 text-lg font-semibold text-foreground">{item.value}</p>
              </article>
            ))}
          </div>

          <p className="mt-4 inline-flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 p-3 text-sm text-foreground">
            <LogoCeni variant="round" size={34} className="bg-white" />
            Date du scrutin présidentiel 2026 : <strong>{keyDates.election}</strong>
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
