import Link from "next/link"

import { footerLinks, siteMeta } from "@/lib/ceni-content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-primary py-12 text-primary-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs tracking-[0.22em] uppercase text-primary-foreground/70">République de Djibouti</p>
          <h3 className="mt-3 text-2xl font-semibold">{siteMeta.fullName}</h3>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/80">
            Institution chargée de veiller à la régularité du processus électoral, dans un cadre de neutralité, de stabilité et de transparence.
          </p>
        </div>
        <div className="grid gap-2 text-sm">
          <p className="mb-2 font-semibold">Liens utiles</p>
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-primary-foreground/80 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
          <p className="mt-4 text-xs text-primary-foreground/65">
            © {new Date().getFullYear()} {siteMeta.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
