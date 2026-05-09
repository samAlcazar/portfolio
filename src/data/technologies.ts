export interface Tech {
  name: string;
  category: "frontend" | "backend" | "tool";
}

export const technologies: Tech[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "Astro", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Git", category: "tool" },
  { name: "Docker", category: "tool" },
];
