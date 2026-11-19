// Generates placeholder monochrome SVG wordmarks into public/logos/{slug}.svg
// Replace any file with the real brand logo — same filename, done.
const fs = require("fs");
const path = require("path");

const W = 240, H = 48;

// Each entry: lines of text centered in the 240x48 viewBox.
const brands = {
  "development-bank-ghana": [
    { text: "DBG", size: 30, weight: 800, y: 26, spacing: 4 },
    { text: "DEVELOPMENT BANK GHANA", size: 9, weight: 600, y: 42, spacing: 3 },
  ],
  "standard-chartered": [
    { text: "standardchartered", size: 26, weight: 400, y: 30, style: "italic", family: "Georgia, 'Times New Roman', serif" },
  ],
  "telecel": [
    { text: "telecel", size: 30, weight: 800, y: 30, spacing: 1 },
  ],
  "nala": [
    { text: "nala", size: 32, weight: 800, y: 31, spacing: 1 },
  ],
  "vaseline": [
    { text: "Vaseline", size: 30, weight: 500, y: 31, family: "Georgia, serif", spacing: 2 },
  ],
  "comfort": [
    { text: "Comfort", size: 30, weight: 400, y: 31, spacing: 3 },
  ],
  "coca-cola": [
    { text: "Coca-Cola", size: 32, weight: 700, y: 31, style: "italic", family: "Georgia, 'Times New Roman', serif", spacing: 1 },
  ],
  "baileys": [
    { text: "Baileys", size: 30, weight: 800, y: 31, spacing: 2 },
  ],
  "nivea": [
    { text: "NIVEA", size: 30, weight: 800, y: 31, spacing: 8 },
  ],
  "acacia-health": [
    { text: "✚", size: 16, weight: 700, x: 62, y: 30 },
    { text: "Acacia Health", size: 24, weight: 700, x: 132, y: 31, anchor: "middle" },
  ],
  "star": [
    { text: "★", size: 18, weight: 700, x: 62, y: 30 },
    { text: "STAR", size: 30, weight: 800, x: 132, y: 31, spacing: 5, anchor: "middle" },
  ],
  "guinness": [
    { text: "Guinness", size: 30, weight: 600, y: 31, style: "italic", family: "Georgia, serif", spacing: 1 },
  ],
  "orijin": [
    { text: "Orijin", size: 32, weight: 800, y: 31, spacing: 1 },
  ],
  "gordons-pink-gin": [
    { text: "GORDON'S", size: 20, weight: 700, y: 22, spacing: 4 },
    { text: "PINK GIN", size: 14, weight: 600, y: 40, spacing: 6 },
  ],
  "fanta": [
    { text: "FANTA", size: 32, weight: 900, y: 31, style: "italic", spacing: 3 },
  ],
  "chicken-delight": [
    { text: "CHICKEN", size: 22, weight: 800, y: 22, spacing: 5 },
    { text: "DELIGHT", size: 22, weight: 800, y: 42, spacing: 5 },
  ],
};

const dir = path.join(__dirname, "..", "public", "logos");
fs.mkdirSync(dir, { recursive: true });

for (const [slug, lines] of Object.entries(brands)) {
  const texts = lines
    .map((l) => {
      const anchor = l.anchor ?? "middle";
      const x = l.x ?? W / 2;
      const family = l.family ?? "system-ui, Arial, sans-serif";
      const style = l.style ? ` font-style="${l.style}"` : "";
      const spacing = l.spacing ? ` letter-spacing="${l.spacing}"` : "";
      return `  <text x="${x}" y="${l.y}" text-anchor="${anchor}" font-family="${family}" font-size="${l.size}" font-weight="${l.weight}" fill="#ffffff"${style}${spacing}>${l.text}</text>`;
    })
    .join("\n");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
${texts}
</svg>
`;
  fs.writeFileSync(path.join(dir, `${slug}.svg`), svg);
  console.log("wrote", slug);
}
