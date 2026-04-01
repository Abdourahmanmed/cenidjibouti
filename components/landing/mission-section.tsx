import { missionItems } from "@/lib/ceni-content"

import { SectionShell } from "@/components/landing/section-shell"

export function MissionSection() {
  return (
    <SectionShell
      id="mission"
      eyebrow="Mission"
      title="La mission de la CENI"
      description="Une mission institutionnelle de supervision, de contrôle et de suivi au service de la régularité électorale et de la confiance publique."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {missionItems.map((item, index) => (
          <article
            key={item.title}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-24px_rgba(22,163,74,0.55)]"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <item.icon className="size-6 text-primary" />
            <h3 className="mt-4 text-base font-semibold text-secondary">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
