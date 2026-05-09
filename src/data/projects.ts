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
    title: "App Ecommerce",
    description: "Plataforma de comercio electrónico con carrito de compras, autenticación y pasarela de pagos.",
    techs: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Dashboard SaaS",
    description: "Panel de administración con métricas en tiempo real, gestión de usuarios y reportes.",
    techs: ["Next.js", "Tailwind", "PostgreSQL"],
  },
];
