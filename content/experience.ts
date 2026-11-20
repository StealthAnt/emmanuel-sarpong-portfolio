export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  todo?: boolean; // flagged placeholder awaiting client details
};

// Source: client's CV (CV - Emmanuel Mensah Sarpong.pdf)
export const experience: ExperienceEntry[] = [
  {
    company: "Ogilvy Africa",
    role: "Creative Designer / Art Director",
    period: "Sept 2023 — Present",
    current: true,
  },
  {
    company: "Pelican Hotel",
    role: "Creative Designer — Brand & Marketing",
    period: "Project-based",
  },
  {
    company: "Media 28",
    role: "Freelance Creative Strategist & Designer",
    period: "March 2020 — Present",
    current: true,
  },
  {
    company: "NUPS-G, KNUST",
    role: "Graphic Designer & Photographer",
    period: "Dec 2020 — 2023",
  },
  {
    company: "Excelsis",
    role: "Editor & Videographer Intern",
    period: "Sept 2022 — Jan 2023",
  },
  {
    company: "Ghone TV",
    role: "Graphic Designer Intern",
    period: "Aug 2020 — Jan 2021",
  },
];
