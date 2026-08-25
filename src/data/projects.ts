export interface ProjectArchitecture {
  summary: string;
  flow: string[];
  serverInfo?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: ProjectArchitecture;
  techs: string[];
  category: "FullStack" | "Frontend" | "Backend" | "Infraestructura";
  challenges: string[];
  results: string;
  url?: string;
  github?: string;
  featured: boolean;
  status: "En producción" | "Completado" | "Hackathon" | "En desarrollo";
  year: string;
}

export const projects: Project[] = [
  {
    id: "cms-headless",
    title: "CMS Headless",
    shortDescription: "Sistema de gestión de contenidos headless para medios digitales y periódicos en línea con arquitectura desacoplada.",
    description: "Plataforma integral de gestión editorial diseñada para medios de comunicación digitales. Separa completamente la capa de administración y creación de contenidos de las interfaces de consumo mediante una API REST robusta y un esquema de base de datos relacional optimizado.",
    problem: "Los sistemas monolíticos tradicionales para periódicos digitales suelen ser pesados, acoplados y difíciles de escalar o rediseñar. Se requería una solución modular que permitiera a los redactores gestionar artículos, categorías y recursos multimedia con agilidad, exponiendo los datos de forma segura para múltiples clientes frontend.",
    solution: "Se diseñó e implementó un CMS desacoplado con React y TypeScript en el panel administrativo, un backend en Express con Node.js y una base de datos PostgreSQL estructurada para consultas complejas de artículos, autores y taxonomías.",
    features: [
      "Panel de administración intuitivo para redactores y editores con control de estados (borrador, revisión, publicado).",
      "API REST con autenticación y autorización por roles para operaciones CRUD seguras.",
      "Modelado relacional en PostgreSQL optimizado para categorización jerárquica y metadatos de publicaciones.",
      "Gestión y carga optimizada de recursos multimedia.",
      "Arquitectura preparada para distribución de contenido multicanal."
    ],
    architecture: {
      summary: "Arquitectura desacoplada basada en servicios REST y persistencia relacional.",
      flow: [
        "Panel Admin (React / TypeScript)",
        "API REST (Express / Node.js)",
        "Capa de Servicios & Validación",
        "Base de Datos (PostgreSQL)"
      ],
      serverInfo: "Backend con Node.js y PostgreSQL alojado en entorno de servidor con proxy reverso."
    },
    techs: ["React", "TypeScript", "Express", "Node.js", "PostgreSQL", "Tailwind"],
    category: "FullStack",
    challenges: [
      "Diseñar un esquema de base de datos flexible que soporte revisiones de artículos sin comprometer la velocidad de consulta.",
      "Implementar un control de acceso granular por roles (administrador, editor, redactor).",
      "Garantizar respuestas rápidas de la API para endpoints de listado y filtrado de contenidos."
    ],
    results: "Un sistema modular y mantenible que desacopla la publicación de contenido del renderizado final, mejorando los tiempos de carga y facilitando la integración con diferentes frontends.",
    github: "https://github.com/samAlcazar/cmsHeadless",
    featured: true,
    status: "Completado",
    year: "2025"
  },
  {
    id: "nubepilot",
    title: "nubePilot",
    shortDescription: "Asistente inteligente desarrollado para el Hackathon Universitario organizado por Tiendanube y la Universidad UTEL.",
    description: "Aplicación interactiva creada en el marco del Hackathon Universitario de Tiendanube y UTEL. Integra modelos de inteligencia artificial para asistir a comerciantes en la optimización de catálogos, redacción de descripciones de productos y toma de decisiones comerciales.",
    problem: "Los emprendedores y comerciantes en plataformas de e-commerce invierten una cantidad desmedida de tiempo redactando descripciones atractivas para sus productos y categorizando inventarios, lo que ralentiza el lanzamiento de sus tiendas en línea.",
    solution: "Se construyó una solución que conecta una interfaz ágil en React con un backend en Express que orquesta consultas estructuradas hacia APIs de OpenAI, procesando y refinando información relevante para el comercio electrónico.",
    features: [
      "Generación automatizada de descripciones persuasivas y optimizadas para SEO en e-commerce.",
      "Sugerencias de etiquetas y categorización de productos en tiempo real.",
      "Interfaz rápida y minimalista pensada para flujos de trabajo de comerciantes.",
      "Gestión de tokens y control de errores en las peticiones hacia la API de IA."
    ],
    architecture: {
      summary: "Integración cliente-servidor con procesamiento y orquestación de prompts hacia APIs de IA.",
      flow: [
        "Frontend React (UI interactiva)",
        "Backend Express (Lógica & Seguridad)",
        "OpenAI API (Inferencia de lenguaje)",
        "Respuesta formateada al comerciante"
      ]
    },
    techs: ["React", "Express", "Node.js", "Tailwind", "OpenAI"],
    category: "FullStack",
    challenges: [
      "Manejar la latencia de las respuestas de IA manteniendo una experiencia de usuario fluida con estados de carga claros.",
      "Estructurar prompts precisos para obtener respuestas consistentes en formato estructurado sin alucinaciones.",
      "Desarrollar y presentar un MVP funcional dentro del tiempo límite del Hackathon."
    ],
    results: "Proyecto seleccionado y presentado exitosamente en el Hackathon Universitario Tiendanube / UTEL 2026, demostrando agilidad en prototipado y valor real para el ecosistema de comercio electrónico.",
    github: "https://github.com/samAlcazar/nubepilot",
    featured: true,
    status: "Hackathon",
    year: "2026"
  },
  {
    id: "ceadl-app",
    title: "CEADL App",
    shortDescription: "Sistema interno de gestión de información y administración de datos y procesos organizacionales para la ONG CEADL.",
    description: "Plataforma web interna desarrollada para centralizar y administrar la información de beneficiarios, proyectos sociales, reportes y actividades institucionales del Centro de Estudios y Apoyo al Desarrollo Local (CEADL).",
    problem: "La organización gestionaba su información institucional en hojas de cálculo dispersas, lo que provocaba inconsistencias en los datos, dificultad para generar reportes consolidados y riesgos en la seguridad de la información.",
    solution: "Se diseñó un sistema a medida con arquitectura cliente-servidor: frontend responsivo con React y Tailwind, API en Express y base de datos relacional PostgreSQL con respaldo periódico e integridad referencial.",
    features: [
      "Módulo de registro y seguimiento de beneficiarios y proyectos sociales.",
      "Generación de reportes consolidados y filtrado avanzado de datos institucionales.",
      "Gestión de usuarios internos con permisos diferenciados por área.",
      "Interfaz adaptada para uso tanto en oficinas centrales como en trabajo de campo."
    ],
    architecture: {
      summary: "Sistema web institucional seguro con backend Node.js y base de datos PostgreSQL.",
      flow: [
        "Cliente Web (React / Tailwind)",
        "API Gateway & Auth (Express)",
        "Lógica Institucional & Validaciones",
        "Base de Datos (PostgreSQL en Servidor)"
      ],
      serverInfo: "Desplegado en infraestructura de servidor con subdominio dedicado y conexión SSL."
    },
    techs: ["React", "Express", "Node.js", "PostgreSQL", "Tailwind"],
    category: "FullStack",
    challenges: [
      "Migrar y normalizar datos históricos desde múltiples fuentes sin pérdida de integridad.",
      "Garantizar la privacidad y el acceso seguro a información sensible de beneficiarios.",
      "Crear una interfaz clara y accesible para usuarios con distintos niveles de alfabetización digital."
    ],
    results: "Digitalización exitosa de los procesos clave de la organización, reduciendo el tiempo de generación de informes y garantizando la centralización de datos institucionales.",
    github: "https://github.com/samAlcazar/ceadlApp",
    url: "https://app.ceadl.org.bo",
    featured: true,
    status: "En producción",
    year: "2024"
  },
  {
    id: "ceadl-web",
    title: "CEADL Institucional",
    shortDescription: "Portal web institucional con gestión de contenidos, publicación de boletines y recursos comunitarios.",
    description: "Sitio web oficial de la ONG CEADL (ceadl.org.bo). Diseñado para difundir proyectos de desarrollo social, publicaciones editoriales, eventos y recursos educativos comunitarios.",
    problem: "La institución necesitaba renovar su presencia pública con un portal accesible, de carga rápida y que permitiera la actualización constante de noticias, publicaciones y materiales institucionales.",
    solution: "Se desarrolló un portal web respaldado por un backend en Node.js y Express con PostgreSQL para el almacenamiento estructurado de contenidos, optimizado para visibilidad en buscadores y navegación en dispositivos móviles.",
    features: [
      "Portal informativo con secciones dinámicas de proyectos, noticias y biblioteca de recursos.",
      "Panel de administración para actualización continua de contenidos.",
      "Optimización de rendimiento y SEO para mejorar el alcance institucional.",
      "Diseño responsive con enfoque en accesibilidad."
    ],
    architecture: {
      summary: "Portal institucional con backend en Express y base de datos PostgreSQL.",
      flow: [
        "Navegador Usuario (HTML / CSS / JS)",
        "Servidor Web & API (Express / Node.js)",
        "Almacenamiento de Contenidos (PostgreSQL)"
      ],
      serverInfo: "Alojado en servidor con configuración de proxy reverso y certificados SSL."
    },
    techs: ["Express", "Node.js", "PostgreSQL", "JavaScript", "HTML5", "CSS3"],
    category: "FullStack",
    challenges: [
      "Garantizar tiempos de carga veloces en conexiones móviles de baja velocidad en regiones periurbanas y rurales.",
      "Organizar un archivo histórico de publicaciones y materiales educativos."
    ],
    results: "Portal institucional en producción que sirve como canal oficial de comunicación para la ONG con alta disponibilidad y desempeño.",
    github: "https://github.com/samAlcazar/ceadlNode",
    url: "https://ceadl.org.bo",
    featured: true,
    status: "En producción",
    year: "2023"
  },
  {
    id: "fidel-speeches",
    title: "Fidel Speeches",
    shortDescription: "Plataforma web de exploración, filtrado y análisis de discursos históricos con interfaz optimizada.",
    description: "Aplicación interactiva diseñada para la búsqueda, indexación y lectura estructurada de textos y discursos históricos, permitiendo filtrado cronológico y temático con renderizado ultra rápido.",
    problem: "La consulta de corpus extensos de textos históricos suele realizarse en sitios obsoletos sin herramientas modernas de filtrado, búsqueda instantánea ni legibilidad optimizada para lectura prolongada.",
    solution: "Se desarrolló una Single Page Application (SPA) con React, Tailwind y Vite, implementando búsqueda y filtrado en el cliente de alta velocidad y una tipografía cuidada para lectura confortable.",
    features: [
      "Búsqueda instantánea y filtrado por año, tema y palabras clave.",
      "Modo de lectura optimizado con tipografía y contraste adaptados.",
      "Navegación fluida sin recargas de página con estado sincronizado.",
      "Despliegue continuo con CDN global para carga instantánea."
    ],
    architecture: {
      summary: "SPA estática optimizada para velocidad extrema distribuida mediante CDN.",
      flow: [
        "Cliente React + Vite",
        "Indexación de textos en memoria",
        "Renderizado reactivo con Tailwind",
        "Distribución en CDN global (Vercel)"
      ]
    },
    techs: ["React", "Tailwind", "Vite", "TypeScript", "JavaScript"],
    category: "Frontend",
    challenges: [
      "Optimizar la carga y renderizado de grandes volúmenes de texto sin degradar la memoria del navegador.",
      "Implementar un diseño enfocado en la lectura accesible y adaptable a pantallas de cualquier tamaño."
    ],
    results: "Plataforma desplegada y operativa con tiempos de respuesta instantáneos y excelente experiencia de lectura.",
    github: "https://github.com/samAlcazar/fidelSpeeches",
    url: "https://fidel-speeches.vercel.app",
    featured: false,
    status: "Completado",
    year: "2024"
  }
];
