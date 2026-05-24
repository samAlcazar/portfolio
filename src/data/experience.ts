export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  techs?: string[];
}

export const experiences: Experience[] = [
  {
    role: "FullStack Developer",
    company: "Freelance",
    period: "2024 - Presente",
    description: "Desarrollo de aplicaciones web completas con React, Node.js y PostgreSQL.",
  },
  {
    role: "Desarrollador FullStack",
    company: "App de Informes (Privado)",
    period: "2025",
    description: "Diseño y desarrollo de una aplicación privada para manejo de informes y organización de información. Stack con frontend de administración para gestión de usuarios y auditorías, y frontend de usuario final.",
    techs: ["React", "Node.js", "PostgreSQL"],
  },
  {
    role: "Desarrollador Web / Realizador",
    company: "Productora Multimedia",
    period: "2023 - 02/2026",
    description: "Desarrollo web con React y Node.js, realización, edición, producción y administración de redes sociales.",
    techs: ["React", "Node.js", "PostgreSQL"],
  },
  {
    role: "Técnico en Análisis de Información",
    company: "Ministerio de la Presidencia",
    period: "01/2025 - 12/2025",
    description: "Análisis de información y tratamiento de datos para la gestión gubernamental.",
  },
  {
    role: "Responsable de Operaciones",
    company: "Bolivia TV",
    period: "2017 - 2022",
    description: "Asistente de producción, editor de post producción, encargado de operaciones y finalmente responsable de operaciones del canal estatal.",
  },
  {
    role: "Diseñador Gráfico",
    company: "EMAVERDE",
    period: "2016",
    description: "Diseño gráfico y material visual institucional.",
  },
  {
    role: "Profesor de Computación",
    company: "U.E. Don Bosco",
    period: "2014 - 2015",
    description: "Profesor de computación en la Unidad Educativa Don Bosco de la ciudad de El Alto.",
  },
  {
    role: "Diseñador Gráfico y Web / Encargado TIC",
    company: "CEADL",
    period: "2010 - 2014",
    description: "Diseño gráfico y web, administración de redes sociales y encargado del proyecto de Tecnologías de Información y Comunicación.",
  },
  {
    role: "Profesor de Computación",
    company: "Colectivo Sur",
    period: "2009 - 2010",
    description: "Profesor de computación y encargado del manejo de la página web institucional.",
  },
  {
    role: "Participante - Hackathon Universitario",
    company: "Tiendanube / UTEL",
    period: "2026",
    description: "Desarrollo de nubePilot, aplicación para el Hackathon Universitario organizado por Tiendanube en colaboración con la Universidad UTEL.",
  },
];
