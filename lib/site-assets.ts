const encodeAssetPath = (filename: string) => `/${encodeURIComponent(filename)}`

const heroSlides = [
  "photo1.jpeg",
  "photo2.jpeg",
  "photo3.jpeg",
  "photo4.jpeg",
  "photo5.jpeg",
  "photo6.jpeg",
  "photo7.jpeg",
  "photo8.jpeg",
  "photo9.jpeg",
  "photo10.jpeg",
  "photo11.jpeg",
  "photo12.jpeg",
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
