// Gradient map used for hero cards, project covers and gallery placeholders.
// Drop a real image path (e.g. "/images/foo.jpg") into any `cover`/`gallery`
// field to override the gradient.
export const gradients: Record<string, string> = {
  ember: "linear-gradient(135deg,#FF5A1F 0%,#FF8A00 45%,#FF3D00 100%)",
  sunset: "linear-gradient(135deg,#FF5A1F 0%,#FF3D77 55%,#B02EE1 100%)",
  violet: "linear-gradient(135deg,#8B5CF6 0%,#D946EF 55%,#FF5A1F 100%)",
  midnight: "linear-gradient(135deg,#1B1035 0%,#3B1B6E 55%,#FF5A1F 100%)",
  crimson: "linear-gradient(135deg,#C81E3A 0%,#FF5A1F 60%,#2B0A0A 100%)",
  mint: "linear-gradient(135deg,#0F766E 0%,#2DD4BF 55%,#A7F3D0 100%)",
  gold: "linear-gradient(135deg,#B45309 0%,#F59E0B 55%,#FF5A1F 100%)",
  ocean: "linear-gradient(135deg,#0E7490 0%,#22D3EE 55%,#0B0B0C 100%)",
  neon: "linear-gradient(135deg,#FF5A1F 0%,#FF2E63 50%,#7C3AED 100%)",
};

export function coverStyle(cover: string): React.CSSProperties {
  return gradients[cover]
    ? { backgroundImage: gradients[cover] }
    : { backgroundImage: `url(${cover})`, backgroundSize: "cover", backgroundPosition: "center" };
}

// True when `cover` is a real image path rather than a gradient key.
export function isImageCover(cover: string): boolean {
  return !(cover in gradients);
}
