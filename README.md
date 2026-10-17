# Portafolio Despacho de Arquitectura

Sitio web y portafolio digital para despacho de arquitectura, diseñado y construido con una arquitectura moderna, estética editorial minimalista y alto rendimiento.

## 🚀 Stack Tecnológico
- **Framework**: [Astro](https://astro.build/) (Static Site Generation - SSG & Islands Architecture)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Lenguaje**: TypeScript / HTML / CSS / Markdown
- **Imágenes**: Optimización responsive (WebP / AVIF)

## 📁 Estructura del Proyecto
```text
portafolio_DespachoArquitectura/
├── .agents/
│   └── rules/
│       ├── architect.md        # Rol y directivas de Arquitectura de Software
│       ├── developer.md        # Rol de Desarrollo (Implementación pura liderada por Arquitectura)
│       └── qa.md               # Rol y directivas de Auditoría y QA
├── Assets/                     # Recursos gráficos y planos del despacho
├── public/                     # Archivos estáticos y multimedia
├── src/
│   ├── components/             # Componentes modulares
│   │   ├── common/             # Elementos comunes de interfaz
│   │   ├── layout/             # Encabezado, navegación y pie de página
│   │   └── portfolio/          # Fichas, galerías y visores de proyectos
│   ├── content/                # Colecciones de contenido (proyectos, estudio)
│   ├── layouts/                # Plantillas base de página
│   ├── pages/                  # Rutas y páginas del sitio
│   └── styles/                 # Estilos globales y tokens de diseño
├── .gitignore
├── GEMINI.md                   # Configuración del agente y contexto del proyecto
└── README.md
```

## ⚡ Filosofía Técnica: Soluciones Nativas
- **Preferencia Nativa**: Priorizar siempre tecnologías web nativas (HTML5 semántico, CSS moderno, Web APIs estándar, vanilla TypeScript) y funciones nativas de Astro y Tailwind.
- **Control Estricto de Librerías Externas**: Solo se consideran dependencias externas cuando la especificación exceda las capacidades nativas, **solicitando siempre aprobación previa al usuario**.

## 📐 Fases de Desarrollo
1. **Fase 1: Arquitectura y Especificación Técnica** (Fase actual)
   - Definición de estructura, esquemas de contenido, reglas y roles.
   - Enfoque exclusivo en planificación sin generación de código prematuro.
2. **Fase 2: Sistema de Diseño y Arquitectura de Información**
3. **Fase 3: Implementación (Astro + Tailwind)**
   - Desarrollo del código a cargo del rol Software Developer bajo la dirección del Arquitecto.
4. **Fase 4: Auditoría de Calidad, Accesibilidad y Despliegue**

## 👥 Gobernanza y Roles
- Consultar [`.agents/rules/architect.md`](.agents/rules/architect.md) para las pautas del Arquitecto de Software.
- Consultar [`.agents/rules/developer.md`](.agents/rules/developer.md) para las pautas del Desarrollador de Software.
- Consultar [`.agents/rules/qa.md`](.agents/rules/qa.md) para las pautas del Auditor de Calidad.
- Consultar [`GEMINI.md`](GEMINI.md) para las directrices generales del proyecto.
