import type { ComponentType } from "react"
import {
  ShieldCheck,
  ScanSearch,
  ClipboardCheck,
  MapPinned,
  Handshake,
  Building2,
  Landmark,
  Users,
  Map,
  CalendarDays,
} from "@/components/landing/icons"

export type MissionItem = {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

export type BriefItem = {
  value: string
  label: string
  icon: ComponentType<{ className?: string }>
}

export const siteMeta = {
  name: "CENI Djibouti",
  fullName: "Commission Électorale Nationale Indépendante",
  cta: "Consulter les informations",
}

export const navigation = [
  { label: "Mission", href: "#mission" },
  { label: "Cadre", href: "#cadre" },
  { label: "Organisation", href: "#organisation" },
  { label: "CENI en bref", href: "#bref" },
  { label: "Calendrier", href: "#calendrier" },
  { label: "FAQ", href: "#faq" },
]

export const missionItems: MissionItem[] = [
  {
    title: "Supervision du processus électoral",
    description:
      "La CENI supervise le déroulement global des opérations afin de garantir leur conformité aux dispositions en vigueur.",
    icon: ShieldCheck,
  },
  {
    title: "Contrôle et régularité",
    description:
      "Un mécanisme de contrôle continu est assuré pour préserver l'intégrité des étapes électorales et prévenir les irrégularités.",
    icon: ScanSearch,
  },
  {
    title: "Suivi opérationnel",
    description:
      "La Commission assure un suivi méthodique des actions engagées, de la phase préparatoire jusqu'à la consolidation des opérations.",
    icon: ClipboardCheck,
  },
  {
    title: "Présence sur le terrain",
    description:
      "Une présence active est maintenue à Djibouti-ville et dans les régions pour un accompagnement de proximité.",
    icon: MapPinned,
  },
  {
    title: "Confiance et transparence",
    description:
      "L'action de la CENI vise le renforcement durable de la confiance publique à travers des pratiques transparentes et lisibles.",
    icon: Handshake,
  },
]

export const roles = [
  "Superviser les opérations électorales dans le respect du cadre légal.",
  "Contrôler la régularité des étapes essentielles du processus.",
  "Assurer le suivi des dispositifs mis en œuvre sur l'ensemble du territoire.",
  "Contribuer à l'information institutionnelle et à la clarté des procédures.",
]

export const framework = [
  "Intervention encadrée par les dispositions administratives applicables.",
  "Coordination avec les autorités compétentes et les structures concernées.",
  "Dispositif de reporting et de suivi documenté.",
  "Approche fondée sur la neutralité institutionnelle et la traçabilité.",
]

export const organizationItems = [
  {
    title: "Présence territoriale",
    text: "La CENI mobilise ses relais à Djibouti-ville et dans les régions pour garantir une couverture opérationnelle équilibrée.",
  },
  {
    title: "Coordination institutionnelle",
    text: "Un cadre de coordination structuré permet d'assurer la cohérence des actions entre les niveaux central et territorial.",
  },
  {
    title: "Suivi de terrain",
    text: "Les activités de terrain font l'objet d'un suivi continu afin d'appuyer la régularité et la qualité des opérations.",
  },
]

export const briefItems: BriefItem[] = [
  { value: "1", label: "Institution nationale indépendante", icon: Landmark },
  { value: "2", label: "Niveaux de coordination (central et territorial)", icon: Building2 },
  { value: "6", label: "Axes d'intervention institutionnelle", icon: Users },
  { value: "2", label: "Ancrages de représentation : Djibouti-ville et régions", icon: Map },
]

export const keyDates = {
  campaign: "27 mars 2026 à minuit",
  election: "10 avril 2026",
}

export const timeline = [
  {
    title: "Ouverture officielle de la campagne",
    date: "27 mars 2026 à minuit",
    description:
      "Début officiel de la campagne électorale, conformément au calendrier institutionnel communiqué.",
    accent: "secondary" as const,
  },
  {
    title: "Phase de supervision renforcée",
    date: "Fin mars - début avril 2026",
    description:
      "Période de suivi accru des opérations électorales et de coordination sur l'ensemble du territoire.",
    accent: "primary" as const,
  },
  {
    title: "Scrutin présidentiel 2026",
    date: "10 avril 2026",
    description:
      "Journée de scrutin pour l'élection présidentielle, avec dispositif de supervision et de contrôle mobilisé.",
    accent: "accent" as const,
  },
]

export const faq = [
  {
    question: "Quel est le rôle principal de la CENI ?",
    answer:
      "La CENI veille à la régularité du processus électoral à travers des missions de supervision, de contrôle et de suivi.",
  },
  {
    question: "Où la CENI intervient-elle sur le territoire ?",
    answer:
      "La Commission est présente à Djibouti-ville et dans les régions afin d'assurer un suivi de proximité des opérations.",
  },
  {
    question: "Quelles sont les dates importantes de la présidentielle 2026 ?",
    answer:
      "L'ouverture officielle de la campagne électorale est fixée au 27 mars 2026 à minuit, et le scrutin se tient le 10 avril 2026.",
  },
  {
    question: "Comment la CENI renforce-t-elle la confiance publique ?",
    answer:
      "Par un cadre d'intervention précis, une coordination institutionnelle continue et une démarche centrée sur la transparence.",
  },
  {
    question: "Le public peut-il accéder aux informations institutionnelles ?",
    answer:
      "Oui, la CENI met à disposition des informations essentielles pour assurer la clarté et la compréhension du processus électoral.",
  },
]

export const footerLinks = [
  { label: "Mission institutionnelle", href: "#mission" },
  { label: "Cadre d'intervention", href: "#cadre" },
  { label: "Calendrier électoral", href: "#calendrier" },
  { label: "Questions fréquentes", href: "#faq" },
]

export const heroHighlights = [
  { label: "Ouverture campagne", value: keyDates.campaign, icon: CalendarDays },
  { label: "Scrutin présidentiel", value: keyDates.election, icon: CalendarDays },
]
