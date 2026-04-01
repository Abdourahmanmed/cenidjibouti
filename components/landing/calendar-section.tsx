import { keyDates, timeline } from "@/lib/ceni-content"

import { SectionShell } from "@/components/landing/section-shell"

const accentClass: Record<(typeof timeline)[number]["accent"], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
}

export function CalendarSection() {
  return (
    <SectionShell
      id="calendrier"
      eyebrow="Information importante"
      title="Calendrier présidentiel 2026"
      description="Points de repère institutionnels relatifs à l'élection présidentielle 2026."
    >
      <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
        <div className="mb-8 rounded-2xl border border-primary/20 bg-[#DCFCE7]/70 p-5">
          <p className="text-sm text-muted-foreground">Scrutin présidentiel</p>
          <p className="mt-1 text-2xl font-semibold text-secondary">{keyDates.election}</p>
          <p className="mt-2 text-sm text-secondary/90">Ouverture officielle de la campagne électorale : {keyDates.campaign}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {timeline.map((step) => (
            <article key={step.title} className="rounded-2xl border border-border bg-background/80 p-5">
              <span className={`mb-3 block h-1 w-14 rounded-full ${accentClass[step.accent]}`} />
              <h3 className="text-base font-semibold text-secondary">{step.title}</h3>
              <p className="mt-2 text-sm font-medium text-primary">{step.date}</p>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
