import { briefItems } from "@/lib/ceni-content"

import { SectionShell } from "@/components/landing/section-shell"

export function BriefSection() {
  return (
    <SectionShell
      id="bref"
      eyebrow="Repères"
      title="La CENI en bref"
      description="Repères institutionnels essentiels sur la composition et la représentation de la Commission."
      className="bg-muted/40"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {briefItems.map((item) => (
          <article key={item.label} className="rounded-3xl border border-border bg-card p-6 text-center">
            <item.icon className="mx-auto size-6 text-primary" />
            <p className="mt-4 text-4xl font-semibold text-foreground">{item.value}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.label}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
