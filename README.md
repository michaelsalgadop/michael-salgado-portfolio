# Portfolio Personal – Michael Salgado

Este repositorio contiene el código fuente de mi portfolio personal, una aplicación web desarrollada como Single Page Application (SPA) con foco en calidad de código, reutilización de componentes y buenas prácticas frontend.

El objetivo del proyecto es **mostrar tanto mis proyectos, experiencia, formación y una descripción de como soy, tanto en el mundo laboral como personal**.

## Demo

Portfolio online:

👉 **https://salgado-perez-michael-portfolio.netlify.app/**

## ¿Qué demuestra este proyecto?

- Arquitectura de mi proyecto y como utilizo los componentes y los reutilizo.

- Gestión de estados y contexto en React.

- Uso de archivos multilenguaje (i18n).

- Diseño responsive y accesible.

- Buenas prácticas en PropTypes.

- Despliegue y entorno de producción.

## Stack tecnológico

- React
- Vite
- Tailwind CSS
- React i18next
- PropTypes
- Netlify
- Git & GitHub

## Estructura del proyecto

```bash
src/
├── components/     # Componentes
│ ├── Layout/       # Componentes principales que componen la web.
│ ├── Sections/     # Componentes que contienen las secciones de la web.
│ ├── UI/           # Componentes reutilizables que he necesitado.
├── context/        # Contextos globales (Navbar de momento)
├── data/           # Datos estáticos (projects, experiences, educations y certifications)
├── hooks/          # Custom hooks
├── i18n/           # Archivos de traducciones
├── pages/          # Páginas principales
├── styles/         # Estilos auxiliares, resetters y variables css
├── i18n.js         # Configuración de i18n
└── main.jsx
```

## Internacionalización

El portfolio soporta **múltiples idiomas**, gestionados mediante _react-i18next_.

Idiomas actuales:

- Español

- Catalán

- Inglés

**La arquitectura permite añadir nuevos idiomas sin modificar la lógica principal.**

## Instalación y uso local

Clona el repositorio:

```bash
git clone https://github.com/michaelsalgadop/michael-salgado-portfolio.git
cd michael-salgado-portfolio
```

Instala dependencias:

```bash
npm install
```

Ejecuta en desarrollo:

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

## Posibles mejoras futuras

- Sección de Contacto

- Tests unitarios (Vitest / Testing Library)

- Light / Dark mode persistente

## Contacto

GitHub: **https://github.com/michaelsalgadop**

LinkedIn: **https://www.linkedin.com/in/michael-salgado-perez/**

Email: **[michaelsalgadop11@outlook.com](mailto:michaelsalgadop11@outlook.com)**
