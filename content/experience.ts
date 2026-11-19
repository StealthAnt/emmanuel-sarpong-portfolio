export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  todo?: boolean; // flagged placeholder awaiting client details
};

export const experience: ExperienceEntry[] = [
  {
    company: "Ogilvy Africa",
    role: "Creative Designer / Art Director",
    period: "Sept 2023 — Present",
    current: true,
  },
  // TODO placeholders — replace with real earlier roles
  {
    company: "[Media Company]",
    role: "[Role]",
    period: "[Dates]",
    todo: true,
  },
  {
    company: "[Freelance]",
    role: "[Role]",
    period: "[Dates]",
    todo: true,
  },
];
