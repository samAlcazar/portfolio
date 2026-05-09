# Portfolio — Samuel Alcazar

Portfolio personal desarrollado con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## Estructura

```
/
├── public/
│   ├── favicon.svg
│   └── profile.webp
├── src/
│   ├── components/
│   │   ├── BlogCard.astro
│   │   ├── ExperienceCard.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── ProjectCard.astro
│   │   ├── SEO.astro
│   │   └── SkillBadge.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/
│   │       └── hello-world.md
│   ├── data/
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   └── technologies.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── contact.astro
│   │   ├── experience.astro
│   │   ├── index.astro
│   │   └── projects.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Comandos

| Comando | Acción |
|---------|--------|
| `pnpm dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Construye el sitio en `./dist/` |
| `pnpm preview` | Vista previa de la build |
| `pnpm check` | Ejecuta type-checking |
