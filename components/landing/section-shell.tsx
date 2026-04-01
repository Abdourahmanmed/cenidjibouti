import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  id: string
  eyebrow?: string
  title: string
  description?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-secondary uppercase">{eyebrow}</p>
          ) : null}
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}
