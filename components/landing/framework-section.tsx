import { framework, roles } from "@/lib/ceni-content"

import { LogoCeni } from "@/components/landing/logo-ceni"
import { SectionShell } from "@/components/landing/section-shell"

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground md:text-base">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function FrameworkSection() {
  return (
    <SectionShell
      id="cadre"
      eyebrow="Cadre"
      title="Rôle et cadre d'intervention"
      description="Un dispositif institutionnel précis, lisible et coordonné pour garantir la bonne conduite du processus électoral."
      className="bg-muted/25"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-border bg-card p-7">
          <div className="flex items-center gap-3">
            <LogoCeni variant="square" size={42} className="bg-white" />
            <h3 className="text-xl font-semibold text-secondary">Attributions de la CENI</h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Missions essentielles de supervision, de contrôle et de suivi.</p>
          <div className="mt-6">
            <BulletList items={roles} />
          </div>
        </article>

        <article className="rounded-3xl border border-border bg-card p-7">
          <h3 className="text-xl font-semibold text-secondary">Cadre administratif associé</h3>
          <p className="mt-2 text-sm text-muted-foreground">Intervention encadrée et coordination institutionnelle continue.</p>
          <div className="mt-6">
            <BulletList items={framework} />
          </div>
        </article>
      </div>
    </SectionShell>
  )
}
