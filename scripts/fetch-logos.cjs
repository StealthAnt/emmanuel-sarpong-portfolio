// Fetches real brand logo SVGs from Wikimedia Commons into public/logos/{slug}.svg.
// Brands not found keep the generated wordmark from gen-logos.cjs.
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "logos");

const brands = {
  "development-bank-ghana": "Development Bank Ghana logo",
  "standard-chartered": "Standard Chartered logo svg",
  "telecel": "Telecel logo",
  "nala": "NALA money logo",
  "vaseline": "Vaseline logo svg",
  "comfort": "Comfort fabric softener logo",
  "baileys": "Baileys Irish Cream logo",
  "nivea": "Nivea logo svg",
  "acacia-health": "Acacia Health Ghana logo",
  "star": "Star Beer Ghana logo",
  "guinness": "Guinness logo svg",
  "orijin": "Orijin beer Ghana logo",
  "gordons-pink-gin": "Gordon's Pink Gin logo",
  "fanta": "Fanta logo svg",
  "chicken-delight": "Chicken Delight Ghana logo",
};

async function search(query) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&generator=search" +
    `&gsrsearch=${encodeURIComponent(query + " filetype:svg")}&gsrnamespace=6&gsrlimit=8` +
    "&prop=imageinfo&iiprop=url%7Cmime&format=json";
  const res = await fetch(url, { headers: { "User-Agent": "portfolio-logo-fetch/1.0" } });
  const json = await res.json();
  const pages = json.query?.pages ? Object.values(json.query.pages) : [];
  // prefer titles that look like a logo
  pages.sort((a, b) => {
    const score = (t) => (/logo/i.test(t.title) ? 0 : 1) + (/_\d+px|logo.*svg/i.test(t.title) ? 0 : 0.5);
    return score(a) - score(b);
  });
  for (const p of pages) {
    const info = p.imageinfo?.[0];
    if (info?.mime === "image/svg+xml") return info.url.split("?")[0];
  }
  return null;
}

(async () => {
  for (const [slug, q] of Object.entries(brands)) {
    try {
      const svgUrl = await search(q);
      if (!svgUrl) {
        console.log(`MISS  ${slug}`);
        continue;
      }
      const res = await fetch(svgUrl, { headers: { "User-Agent": "portfolio-logo-fetch/1.0" } });
      const text = await res.text();
      if (!text.includes("<svg")) {
        console.log(`BAD   ${slug} (not svg)`);
        continue;
      }
      fs.writeFileSync(path.join(dir, `${slug}.svg`), text);
      console.log(`OK    ${slug} <- ${svgUrl}`);
    } catch (e) {
      console.log(`ERR   ${slug}: ${e.message}`);
    }
    await new Promise((r) => setTimeout(r, 2000));
  }
})();
