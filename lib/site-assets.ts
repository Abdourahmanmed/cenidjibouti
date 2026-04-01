const encodeAssetPath = (filename: string) => `/${encodeURIComponent(filename)}`

const heroSlides = [
  "WhatsApp Image 2026-04-01 at 4.51.52 PM.jpeg",
  "WhatsApp Image 2026-04-01 at 4.51.52 PM (1).jpeg",
  "WhatsApp Image 2026-04-01 at 4.51.52 PM (2).jpeg",
  "WhatsApp Image 2026-04-01 at 4.51.53 PM.jpeg",
] as const

export const siteAssets = {
  // Pour basculer vers un PNG plus tard, remplace simplement cette valeur (ex: "/logo-ceni-round.png").
  logoRound: encodeAssetPath("logo-rond-ceni.png"),
  heroSlides: heroSlides.map((filename) => encodeAssetPath(filename)),
  heroBottomImages: [
    encodeAssetPath("WhatsApp Image 2026-04-01 at 4.51.52 PM (1).jpeg"),
    encodeAssetPath("WhatsApp Image 2026-04-01 at 4.51.53 PM.jpeg"),
  ],
} as const

export const isPdfAsset = (path: string) => path.toLowerCase().endsWith(".pdf")
