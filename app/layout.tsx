import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emmanuel-sarpong.vercel.app"), // TODO: update to real domain
  title: {
    default: `${site.name} — ${site.role} at ${site.company}`,
    template: `%s — ${site.shortName}`,
  },
  description:
    "Creative Designer and Art Director at Ogilvy Africa. Ideas that move brands and people — campaigns, brands and creative systems across banking, healthcare, FMCG and telecom.",
  keywords: [
    "Emmanuel Mensah Sarpong",
    "Creative Designer",
    "Art Director",
    "Ogilvy Africa",
    "Accra",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: site.name,
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: site.company },
  address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
  url: "https://emmanuel-sarpong.vercel.app", // TODO: update to real domain
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-ink text-zinc-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <SmoothScroll />
        <Cursor />
        <ScrollProgress />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
