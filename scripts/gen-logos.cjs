// Generates placeholder monochrome SVG wordmarks into public/logos/{slug}.svg
// Replace any file with the real brand logo — same filename, done.
const fs = require("fs");
const path = require("path");

const W = 240, H = 48;

// Each entry: lines of text centered in the 240x48 viewBox.
// Brand colors applied to generated wordmarks (real logos fetched separately).
const colors = {
  "development-bank-ghana": "#4A90D9",
  "standard-chartered": "#6FA8DC",
  "telecel": "#E4002B",
  "nala": "#B8E62E",
  "vaseline": "#1E6FD9",
  "comfort": "#2E9BC6",
  "coca-cola": "#D00013",
  "baileys": "#F5C04E",
  "nivea": "#003DA5",
  "acacia-health": "#2E9E5B",
  "star": "#E31B23",
  "guinness": "#00853F",
  "orijin": "#C8102E",
  "gordons-pink-gin": "#E91E8C",
  "fanta": "#FF6900",
  "chicken-delight": "#E87722",
};

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
  const file = path.join(dir, `${slug}.svg`);
  // Skip files that aren't our generated wordmarks (i.e. real fetched logos).
  if (fs.existsSync(file) && !fs.readFileSync(file, "utf8").includes('font-family="system-ui')) {
    console.log("keep ", slug, "(real logo)");
    continue;
  }
  const texts = lines
    .map((l) => {
      const anchor = l.anchor ?? "middle";
      const x = l.x ?? W / 2;
      const family = l.family ?? "system-ui, Arial, sans-serif";
      const style = l.style ? ` font-style="${l.style}"` : "";
      const spacing = l.spacing ? ` letter-spacing="${l.spacing}"` : "";
      const fill = colors[slug] || "#ffffff";
      return `  <text x="${x}" y="${l.y}" text-anchor="${anchor}" font-family="${family}" font-size="${l.size}" font-weight="${l.weight}" fill="${fill}"${style}${spacing}>${l.text}</text>`;
    })
    .join("\n");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
${texts}
</svg>
`;
  fs.writeFileSync(file, svg);
  console.log("wrote", slug);
}
