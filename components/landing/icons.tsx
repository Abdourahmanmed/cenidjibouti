import type { SVGProps } from "react"

function IconBase({ className, children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function ShieldCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3l7 3v6c0 5-3.4 8.6-7 10-3.6-1.4-7-5-7-10V6l7-3z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  )
}

export function ScanSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 8V5h3" />
      <path d="M20 8V5h-3" />
      <path d="M4 16v3h3" />
      <path d="M20 16v3h-3" />
      <circle cx="11" cy="11" r="4" />
      <path d="m15 15 4 4" />
    </IconBase>
  )
}

export function ClipboardCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4.5h6" />
      <path d="m9.5 12 1.7 1.7 3.3-3.4" />
    </IconBase>
  )
}

export function MapPinned(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z" />
      <path d="M9 4v14" />
      <path d="M15 6v14" />
      <circle cx="12" cy="9" r="2" />
    </IconBase>
  )
}

export function Handshake(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m3 12 4-4 3 3 4-4 7 7" />
      <path d="m7 8-3 3" />
      <path d="m17 18 3-3" />
      <path d="m10 11 4 4" />
    </IconBase>
  )
}

export function Building2(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-4h6v4" />
      <path d="M8 10h.01" />
      <path d="M12 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
    </IconBase>
  )
}

export function Landmark(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M3 22h18" />
      <path d="m4 9 8-5 8 5" />
      <path d="M6 10v8" />
      <path d="M10 10v8" />
      <path d="M14 10v8" />
      <path d="M18 10v8" />
    </IconBase>
  )
}

export function Users(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 19c.8-2.8 2.8-4 6-4s5.2 1.2 6 4" />
      <path d="M14 19c.5-1.9 2-2.8 4-2.8 1.2 0 2.2.3 3 .8" />
    </IconBase>
  )
}

export function Map(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z" />
      <path d="M9 4v14" />
      <path d="M15 6v14" />
    </IconBase>
  )
}

export function CalendarDays(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
    </IconBase>
  )
}

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  )
}

export function X(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </IconBase>
  )
}
