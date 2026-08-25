export interface Profile {
  name: string;
  role: string;
  title: string;
  tagline: string;
  summary: string;
  bio: string[];
  location: string;
  email: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  linkedinUsername: string;
  siteUrl: string;
  skillsSummary: {
    development: string[];
    infrastructure: string[];
    databases: string[];
    tools: string[];
  };
}

export const profile: Profile = {
  name: "Samuel Alejandro Alcázar",
  role: "FullStack Developer",
  title: "FullStack Developer & Soluciones Tecnológicas",
  tagline: "Desarrollo aplicaciones web completas combinando frontend moderno, arquitecturas backend robustas e infraestructura de servidores.",
  summary: "Desarrollador FullStack con experiencia en la construcción de sistemas web de extremo a extremo: desde la configuración de servidores y bases de datos hasta el desarrollo de APIs y experiencias de usuario optimizadas.",
  bio: [
    "Soy desarrollador enfocado en crear soluciones tecnológicas integrales. Mi enfoque va más allá de escribir código en un framework específico: me interesa entender la necesidad del proyecto, diseñar la arquitectura adecuada, estructurar la base de datos, implementar la lógica de negocio en el backend y construir interfaces accesibles y eficientes.",
    "Cuento con experiencia en administración de entornos Linux, despliegue de aplicaciones, soporte técnico y optimización de flujos de trabajo, lo que me permite participar con solvencia en todo el ciclo de vida del software: Infraestructura → Servidor → Backend → Base de datos → API → Frontend.",
    "Mi objetivo es desarrollar proyectos mantenibles, seguros y orientados a resolver problemas reales para organizaciones, empresas y usuarios."
  ],
  location: "Bolivia",
  email: "alcazar.samuel@gmail.com",
  github: "https://github.com/samAlcazar",
  githubUsername: "samAlcazar",
  linkedin: "https://www.linkedin.com/in/samuel-alcazar-83b6b366/",
  linkedinUsername: "samuel-alcazar-83b6b366",
  siteUrl: "https://saalcazar.dev",
  skillsSummary: {
    development: [
      "React",
      "Next.js",
      "Astro",
      "TypeScript",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "APIs REST"
    ],
    infrastructure: [
      "Linux (Debian / Ubuntu)",
      "Servidores & VPS",
      "Redes & Protocolos HTTP/DNS",
      "Docker",
      "Nginx",
      "Despliegues en producción"
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "Modelado de datos",
      "Consultas optimizadas"
    ],
    tools: [
      "Git & GitHub",
      "Terminal / Bash",
      "Vite",
      "pnpm / npm",
      "VS Code"
    ]
  }
};
