export interface Experience {
  role: string;
  company: string;
  period: string;
  type: "desarrollo" | "infraestructura" | "gestion" | "educacion";
  description: string;
  responsibilities: string[];
  techs?: string[];
  results?: string;
}

export const experiences: Experience[] = [
  {
    role: "FullStack Developer",
    company: "Freelance / Proyectos Independientes",
    period: "2024 - Presente",
    type: "desarrollo",
    description: "Diseño, desarrollo y despliegue de aplicaciones web integrales para clientes y organizaciones.",
    responsibilities: [
      "Desarrollo de arquitecturas frontend con React, Next.js, Astro y Tailwind CSS.",
      "Construcción de APIs REST y servicios backend con Node.js, Express y TypeScript.",
      "Modelado de bases de datos relacionales y no relacionales con PostgreSQL y MongoDB.",
      "Despliegue y administración de servidores Linux, configuración de dominios, SSL y proxy reverso."
    ],
    techs: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind", "Linux", "Docker"],
    results: "Entregas exitosas de sistemas en producción con alta disponibilidad y rendimiento."
  },
  {
    role: "Desarrollador FullStack",
    company: "App de Informes (Proyecto Privado)",
    period: "2025",
    type: "desarrollo",
    description: "Diseño y desarrollo integral de un sistema privado para generación, auditoría y gestión de informes organizacionales.",
    responsibilities: [
      "Diseño de la arquitectura del sistema con separación de paneles (administración y usuario final).",
      "Implementación de flujos de auditoría, control de acceso basado en roles y registro de actividades.",
      "Desarrollo del backend en Node.js y persistencia estructurada en PostgreSQL.",
      "Creación de interfaces limpias e intuitivas para agilizar la redacción y exportación de informes."
    ],
    techs: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
    results: "Optimización significativa en los tiempos de elaboración, revisión y trazabilidad de informes internos."
  },
  {
    role: "Participante - Hackathon Universitario",
    company: "Tiendanube / Universidad UTEL",
    period: "2026",
    type: "desarrollo",
    description: "Desarrollo del proyecto nubePilot en el Hackathon Universitario de comercio electrónico e inteligencia artificial.",
    responsibilities: [
      "Prototipado rápido y desarrollo del frontend interactivo con React.",
      "Integración de endpoints de IA generativa para optimización de catálogos e-commerce.",
      "Estructuración de la lógica de negocio y presentación del MVP ante el jurado evaluador."
    ],
    techs: ["React", "Express", "Node.js", "Tailwind", "OpenAI API"],
    results: "MVP funcional completado y presentado con éxito dentro del tiempo límite de competencia."
  },
  {
    role: "Desarrollador Web / Realizador Multimedia",
    company: "Productora Multimedia",
    period: "2023 - 02/2026",
    type: "desarrollo",
    description: "Desarrollo de soluciones web interactivas y gestión de flujos de producción técnica multimedia.",
    responsibilities: [
      "Desarrollo de plataformas web y sitios interactivos con React y Node.js.",
      "Integración de sistemas de bases de datos PostgreSQL para gestión de contenidos multimedia.",
      "Administración técnica, edición y supervisión de canales y plataformas digitales."
    ],
    techs: ["React", "Node.js", "PostgreSQL", "JavaScript", "HTML5", "CSS3"],
    results: "Modernización de plataformas web y consolidación de la presencia digital de la productora."
  },
  {
    role: "Técnico en Análisis de Información",
    company: "Ministerio de la Presidencia",
    period: "01/2025 - 12/2025",
    type: "gestion",
    description: "Análisis técnico de información, consolidación de datos y apoyo a la gestión pública.",
    responsibilities: [
      "Tratamiento, depuración y validación de conjuntos de datos gubernamentales.",
      "Elaboración de reportes analíticos para soporte a la toma de decisiones.",
      "Organización y automatización de flujos de información técnica."
    ],
    techs: ["Bases de Datos", "Análisis de Datos", "Automatización", "Ofimática Avanzada"],
    results: "Mejora en la precisión y tiempos de entrega de informes técnicos para la gestión pública."
  },
  {
    role: "Responsable de Operaciones / Edición Técnica",
    company: "Bolivia TV",
    period: "2017 - 2022",
    type: "infraestructura",
    description: "Trayectoria técnica desde asistente de producción y edición de post-producción hasta responsable de operaciones del canal estatal.",
    responsibilities: [
      "Supervisión y coordinación operativa de los flujos de emisión y producción técnica continua.",
      "Manejo y supervisión de equipamiento informático, redes audiovisuales y sistemas de almacenamiento masivo.",
      "Resolución de incidentes técnicos en tiempo real para transmisiones en vivo a nivel nacional.",
      "Liderazgo de equipos técnicos de emisión y continuidad."
    ],
    techs: ["Sistemas Operativos", "Redes Audiovisuales", "Infraestructura Técnica", "Servidores de Emisión"],
    results: "Garantía de continuidad operativa en transmisiones nacionales y optimización de flujos de trabajo técnicos."
  },
  {
    role: "Diseñador Gráfico Institucional",
    company: "EMAVERDE",
    period: "2016",
    type: "gestion",
    description: "Diseño y desarrollo de material visual y comunicación institucional.",
    responsibilities: [
      "Creación de piezas gráficas informativas y de señalética institucional.",
      "Elaboración de material digital y coordinaciones de comunicación visual."
    ],
    techs: ["Diseño Gráfico", "Comunicación Visual", "UI/UX Básico"]
  },
  {
    role: "Profesor de Computación e Informática",
    company: "U.E. Don Bosco (El Alto)",
    period: "2014 - 2015",
    type: "educacion",
    description: "Formación en computación, ofimática y principios de informática para estudiantes.",
    responsibilities: [
      "Planificación y dictado de clases teóricas y prácticas en laboratorio de computación.",
      "Mantenimiento básico de equipos de computación y red local del laboratorio escolar."
    ],
    techs: ["Hardware", "Sistemas Operativos", "Redes Básicas", "Pedagogía"]
  },
  {
    role: "Diseñador Gráfico, Web y Encargado TIC",
    company: "CEADL (Centro de Estudios y Apoyo al Desarrollo Local)",
    period: "2010 - 2014",
    type: "infraestructura",
    description: "Responsable del área técnica y tecnológica de la institución, combinando desarrollo web, diseño y soporte de sistemas.",
    responsibilities: [
      "Diseño, desarrollo y mantenimiento de los sitios y portales web institucionales.",
      "Administración y soporte de la infraestructura de computación, servidores y red interna de la ONG.",
      "Gestión de canales digitales, redes sociales y capacitación tecnológica al equipo institucional.",
      "Coordinación técnica de proyectos de Tecnologías de la Información y Comunicación (TIC)."
    ],
    techs: ["Desarrollo Web", "Linux", "Soporte Técnico", "Redes", "Diseño Gráfico", "Servidores"],
    results: "Modernización de la infraestructura tecnológica de la ONG y desarrollo de su primera plataforma digital de proyectos."
  },
  {
    role: "Profesor de Computación y Administrador Web",
    company: "Colectivo Sur",
    period: "2009 - 2010",
    type: "educacion",
    description: "Capacitación tecnológica y mantenimiento de la presencia web institucional.",
    responsibilities: [
      "Capacitación en computación básica y herramientas digitales.",
      "Administración y actualización de la página web institucional."
    ],
    techs: ["Desarrollo Web Básico", "Sistemas Operativos", "Soporte Técnico"]
  }
];
