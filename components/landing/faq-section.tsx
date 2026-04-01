import { faq } from "@/lib/ceni-content"

import { SectionShell } from "@/components/landing/section-shell"

export function FaqSection() {
  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Questions fréquentes"
      description="Réponses synthétiques aux principales questions institutionnelles."
      className="bg-muted/20"
    >
      <div className="mx-auto grid max-w-4xl gap-3">
        {faq.map((item) => (
          <details key={item.question} className="group rounded-2xl border border-border bg-card p-5 open:border-secondary/30">
            <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-secondary md:text-base">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  )
}
