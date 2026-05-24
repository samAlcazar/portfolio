export interface Project {
  title: string;
  description: string;
  techs: string[];
  url?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "CMS Headless",
    description: "Sistema de gestión de contenidos headless para periódicos en línea. Arquitectura modular con frontend de administración, API REST y esquema de base de datos flexible.",
    techs: ["React", "Express", "PostgreSQL", "TypeScript", "Tailwind"],
    github: "samAlcazar/cmsHeadless",
  },
  {
    title: "nubePilot",
    description: "Aplicación desarrollada para el Hackathon Universitario organizado por Tiendanube y la Universidad UTEL.",
    techs: ["React", "Express", "Tailwind", "OpenAI"],
    github: "samAlcazar/nubepilot",
  },
  {
    title: "CEADL App",
    description: "Sistema de gestión de información para la ONG CEADL. Plataforma interna para administrar datos y procesos organizacionales.",
    techs: ["React", "Express", "PostgreSQL", "Tailwind"],
    github: "samAlcazar/ceadlApp",
    url: "https://app.ceadl.org.bo",
  },
  {
    title: "CEADL",
    description: "Sitio web institucional de la ONG CEADL (ceadl.org.bo). Portal informativo con gestión de contenidos.",
    techs: ["Express", "Node.js", "PostgreSQL"],
    github: "samAlcazar/ceadlNode",
    url: "https://ceadl.org.bo",
  },
  {
    title: "Fidel Speeches",
    description: "Plataforma de búsqueda y filtrado de discursos de Fidel Castro. Interfaz moderna para explorar contenido histórico.",
    techs: ["React", "Tailwind", "Vite"],
    github: "samAlcazar/fidelSpeeches",
    url: "https://fidel-speeches.vercel.app",
  },
];
