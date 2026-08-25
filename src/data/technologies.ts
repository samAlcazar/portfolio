export interface TechnologyItem {
  name: string;
  slug?: string;
  description: string;
  icon?: string;
  highlight?: boolean;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  description: string;
  iconName: "Code" | "Server" | "Database" | "Terminal" | "Cpu" | "Wrench";
  items: TechnologyItem[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Desarrollo de interfaces de usuario modernas, reactivas, accesibles y optimizadas para rendimiento.",
    iconName: "Code",
    items: [
      {
        name: "React",
        slug: "react",
        description: "Construcción de Single Page Applications (SPA), componentes reutilizables y manejo de estado complejo.",
        highlight: true
      },
      {
        name: "Next.js",
        slug: "nextdotjs/fff",
        description: "Framework fullstack para renderizado del lado del servidor (SSR), generación estática (SSG) y rutas optimizadas.",
        highlight: true
      },
      {
        name: "Astro",
        slug: "astro",
        description: "Arquitectura de islas (Islands) para sitios ultrarrápidos, con mínimo JavaScript en cliente y excelente SEO.",
        highlight: true
      },
      {
        name: "TypeScript",
        slug: "typescript",
        description: "Tipado estático para código predecible, seguro y escalable tanto en frontend como en backend.",
        highlight: true
      },
      {
        name: "Tailwind CSS",
        slug: "tailwindcss",
        description: "Diseño de interfaces estilizadas, consistentes, responsivas y con metodologías utility-first modernas.",
        highlight: true
      },
      {
        name: "HTML5 / CSS3 / JS",
        slug: "javascript",
        description: "Fundamentos sólidos de la web: semántica, accesibilidad (a11y), responsive design y manipulación del DOM nativo.",
        highlight: false
      }
    ]
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Construcción de lógica de negocio, servicios desacoplados, autenticación y comunicación entre sistemas.",
    iconName: "Server",
    items: [
      {
        name: "Node.js",
        slug: "nodedotjs",
        description: "Entorno de ejecución asíncrono y de alto rendimiento en el servidor para microservicios y APIs.",
        highlight: true
      },
      {
        name: "Express",
        slug: "express/fff",
        description: "Framework minimalista y flexible para desarrollo de APIs RESTful, middlewares y enrutamiento.",
        highlight: true
      },
      {
        name: "APIs RESTful",
        slug: "fastapi",
        description: "Diseño de endpoints consistentes, versionados, seguros con JWT y documentación estructurada.",
        highlight: true
      },
      {
        name: "Autenticación & Auth",
        slug: "auth0",
        description: "Implementación de control de acceso basado en roles (RBAC), sesiones seguras y cifrado.",
        highlight: false
      }
    ]
  },
  {
    id: "databases",
    title: "Bases de Datos",
    description: "Modelado relacional y no relacional, integridad referencial y consultas optimizadas.",
    iconName: "Database",
    items: [
      {
        name: "PostgreSQL",
        slug: "postgresql",
        description: "Base de datos relacional principal para modelos complejos, integridad de transacciones y consultas SQL avanzadas.",
        highlight: true
      },
      {
        name: "MongoDB",
        slug: "mongodb",
        description: "Persistencia documental no relacional para esquemas flexibles y prototipado rápido.",
        highlight: true
      },
      {
        name: "Modelado de Datos",
        slug: "databricks",
        description: "Diseño de esquemas normalizados, llaves foráneas, índices de búsqueda y migraciones estructuradas.",
        highlight: false
      }
    ]
  },
  {
    id: "infrastructure",
    title: "Infraestructura & Servidores",
    description: "Administración de sistemas operativos, redes, servidores web y despliegue de entornos en producción.",
    iconName: "Cpu",
    items: [
      {
        name: "Linux",
        slug: "linux",
        description: "Administración de entornos Debian / Ubuntu, configuración de servicios, permisos y gestión de procesos.",
        highlight: true
      },
      {
        name: "Docker",
        slug: "docker",
        description: "Contenerización de aplicaciones para desarrollo reproducible y despliegues estandarizados.",
        highlight: true
      },
      {
        name: "Servidores & VPS",
        slug: "serverfault",
        description: "Configuración, endurecimiento (hardening), firewall y administración remota vía SSH.",
        highlight: true
      },
      {
        name: "Nginx / Web Servers",
        slug: "nginx",
        description: "Configuración de proxy reverso, terminación SSL/TLS, compresión gzip y balanceo básico.",
        highlight: true
      },
      {
        name: "Redes & Protocolos",
        slug: "wireshark",
        description: "Entendimiento profundo de DNS, TCP/IP, HTTP/HTTPS, enrutamiento y diagnóstico de conectividad.",
        highlight: false
      }
    ]
  },
  {
    id: "tools",
    title: "Herramientas & Flujo de Trabajo",
    description: "Herramientas esenciales para control de versiones, automatización y desarrollo eficiente.",
    iconName: "Wrench",
    items: [
      {
        name: "Git & GitHub",
        slug: "git",
        description: "Control de versiones, flujos de trabajo basados en ramas, pull requests y colaboración de código.",
        highlight: true
      },
      {
        name: "Terminal / Bash",
        slug: "gnubash",
        description: "Automatización de tareas, scripts de despliegue y administración eficiente desde la línea de comandos.",
        highlight: true
      },
      {
        name: "Vite / Build Tools",
        slug: "vite",
        description: "Empaquetadores modernos, recarga rápida en desarrollo y optimización de assets para producción.",
        highlight: false
      },
      {
        name: "pnpm / npm",
        slug: "pnpm",
        description: "Gestión eficiente de dependencias de proyectos con resolución rápida y almacenamiento optimizado.",
        highlight: false
      }
    ]
  }
];

// Lista aplanada para compatibilidad rápida
export const technologies = technologyCategories.flatMap((category) =>
  category.items.map((item) => ({
    name: item.name,
    category: category.id as "frontend" | "backend" | "databases" | "infrastructure" | "tools",
    description: item.description,
    slug: item.slug
  }))
);
