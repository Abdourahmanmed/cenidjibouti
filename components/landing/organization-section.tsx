import { organizationItems } from "@/lib/ceni-content"

import { SectionShell } from "@/components/landing/section-shell"

export function OrganizationSection() {
  return (
    <SectionShell
      id="organisation"
      eyebrow="Coordination"
      title="Organisation et coordination"
      description="Une organisation structurée pour assurer la continuité institutionnelle, la coordination et le suivi des opérations électorales."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {organizationItems.map((item) => (
          <article key={item.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-secondary">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
