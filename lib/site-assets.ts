const encodeAssetPath = (filename: string) => `/${encodeURIComponent(filename)}`

export const siteAssets = {
  // Pour basculer vers un PNG plus tard, remplace simplement cette valeur (ex: "/logo-ceni-round.png").
  logoRound: encodeAssetPath("LOGO ROND CENI 26.pdf"),
  cover1: encodeAssetPath("WhatsApp Image 2026-04-01 at 4.51.52 PM.jpeg"),
  cover2: encodeAssetPath("WhatsApp Image 2026-04-01 at 4.51.52 PM (1).jpeg"),
  cover3: encodeAssetPath("WhatsApp Image 2026-04-01 at 4.51.53 PM.jpeg"),
} as const

export const isPdfAsset = (path: string) => path.toLowerCase().endsWith(".pdf")
