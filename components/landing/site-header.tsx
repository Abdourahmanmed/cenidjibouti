"use client"

import Link from "next/link"
import { useState } from "react"

import { siteMeta, navigation } from "@/lib/ceni-content"
import { Button } from "@/components/ui/button"
import { Menu, X } from "@/components/landing/icons"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="group flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <span className="text-sm font-bold tracking-wider">CENI</span>
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-foreground">{siteMeta.name}</p>
            <p className="text-xs text-muted-foreground">{siteMeta.fullName}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button className="bg-primary px-5 text-primary-foreground hover:bg-primary/90">{siteMeta.cta}</Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div className={cn("border-t border-border bg-background px-4 py-4 lg:hidden", !open && "hidden")}>
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-3 sm:px-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90">{siteMeta.cta}</Button>
        </nav>
      </div>
    </header>
  )
}
