// Normalises logo PNGs for a dark background:
//  - keys out solid backgrounds (white or dark) to transparency
//  - recolours near-black artwork to a brand colour so it stays visible
const fs = require("fs");
const path = require("path");
const { PNG } = require("pngjs");

const dir = path.join(__dirname, "..", "public", "logos");

// mode: "key" removes bg matching corner colour; "recolor" maps dark artwork to hex.
const jobs = {
  "acacia-health.png": { key: { dist: 40 } },
  "comfort.png": { key: { dist: 40 } },
  "guinness.png": { key: { dist: 45 } },
  "gordons-pink-gin.png": { key: { dist: 45 }, recolorDark: "#E8E8E8", threshold: 0.35 },
  "development-bank-ghana.png": { recolorDark: "#D4AF37", threshold: 0.18 },
  "telecel.png": { recolorDark: "#E4002B", threshold: 0.35 },
};

function lum(r, g, b) {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}
function dist(a, b, c, r, g, bl) {
  return Math.sqrt((a - r) ** 2 + (b - g) ** 2 + (c - bl) ** 2);
}
function hex(h) {
  return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
}

for (const [file, job] of Object.entries(jobs)) {
  const p = PNG.sync.read(fs.readFileSync(path.join(dir, file)));
  const { width: w, height: h, data } = p;

  // sample background from corners
  let br = 0, bg = 0, bb = 0, n = 0;
  for (const [x, y] of [[2, 2], [w - 3, 2], [2, h - 3], [w - 3, h - 3], [w >> 1, 2], [w >> 1, h - 3]]) {
    const i = (y * w + x) * 4;
    br += data[i]; bg += data[i + 1]; bb += data[i + 2]; n++;
  }
  br /= n; bg /= n; bb /= n;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (job.key && dist(r, g, b, br, bg, bb) < job.key.dist) {
      data[i + 3] = 0;
      continue;
    }
    if (job.recolorDark) {
      const l = lum(r, g, b);
      // only recolour pixels that are already fairly transparent-dark OR dark
      if (l < job.threshold && data[i + 3] > 100) {
        const [rr, gg, bb2] = hex(job.recolorDark);
        data[i] = rr; data[i + 1] = gg; data[i + 2] = bb2;
      }
    }
  }
  fs.writeFileSync(path.join(dir, file), PNG.sync.write(p));
  console.log("fixed", file);
}
