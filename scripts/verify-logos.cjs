// ASCII-renders PNG logos for visual verification.
const fs = require("fs");
const path = require("path");
const { PNG } = require("pngjs");

const dir = path.join(__dirname, "..", "public", "logos");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".png"));
const COLS = 72;
const SHADES = " .:-=+*#%@";

for (const file of files) {
  const png = PNG.sync.read(fs.readFileSync(path.join(dir, file)));
  const { width: w, height: h, data } = png;
  const rows = Math.max(1, Math.round((h / w) * COLS * 0.5));
  console.log(`\n=== ${file} (${w}x${h}) ===`);
  for (let y = 0; y < rows; y++) {
    let line = "";
    for (let x = 0; x < COLS; x++) {
      const sx = Math.floor((x / COLS) * w);
      const sy = Math.floor((y / rows) * h);
      const i = (sy * w + sx) * 4;
      const a = data[i + 3] / 255;
      // composite on mid grey
      const lum =
        (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
      const v = lum * a + 0.5 * (1 - a);
      line += SHADES[Math.min(SHADES.length - 1, Math.floor(v * SHADES.length))];
    }
    console.log(line);
  }
}
