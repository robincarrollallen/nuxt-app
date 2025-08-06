# Project Overview

## Technology Stack

This project is built on Nuxt 3, leveraging a modern frontend stack with excellent scalability and multilingual support, suitable for medium to large web applications.

### 1. Package Manager

- Supports `npm`, `yarn`, `pnpm`, and `bun`. You can use any mainstream package manager for dependency management and script execution.

### 2. Core Framework

- **Nuxt 3**: A Vue 3-based framework for server-side rendering (SSR) and static site generation (SSG), improving SEO and initial load performance.
- **Vue 3**: Modern reactive component development with Composition API support.

### 3. UI Component Library

- **Vant 4**: A high-quality, mobile-first UI component library, integrated via `@vant/nuxt`.
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive, and customizable styling (integrated via `@nuxtjs/tailwindcss`).

### 4. State Management

- **Pinia**: The next-generation state management library for Vue, officially recommended, type-safe, and modular (integrated via `@pinia/nuxt`).

### 5. Internationalization (i18n)

- **@nuxtjs/i18n**: Powerful multilingual plugin supporting lazy loading of language packs, browser language detection, and no-prefix routing.
- Language packs are located in the `i18n/locales/` directory, supporting multiple languages (e.g., English, Chinese, Vietnamese, Indonesian, Portuguese, Hindi, etc.).

### 6. Other Technologies & Tools

- **Swiper**: For carousels and sliding interactions.
- **Micro App**: Micro-frontend support (`@micro-zoe/micro-app`) for modular system architecture and independent deployment.
- **ESLint**: Code quality and style enforcement.
- **Less**: CSS preprocessor for style reuse and variable management.
- **TypeScript**: Type-safe development for more robust code.

## Directory Structure Overview

- `pages/`: Page-level components, auto-generated routing.
- `components/`: Reusable component library.
- `stores/`: Pinia state management modules.
- `i18n/`: Internationalization configuration and language packs.
- `assets/`, `public/`: Static resources and global styles.
- `plugins/`: Nuxt plugin extensions.
- `server/`: Backend APIs and server-side logic.
- `theme/`: Theme and color scheme files.

## Getting Started & Build

- Install dependencies: `npm install` / `yarn install` / `pnpm install` / `bun install`
- Local development: `npm run dev` / `yarn dev` / `pnpm dev` / `bun run dev`
- Production build: `npm run build` / `yarn build` / `pnpm build` / `bun run build`
- Preview production build: `npm run preview` / `yarn preview` / `pnpm preview` / `bun run preview`
