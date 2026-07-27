# Gulab Devi Teaching Hospital — Web Platform

A public website, patient portal, and admin dashboard for **Gulab Devi Teaching Hospital**, a non-profit hospital serving Pakistan since 1934. Built with TanStack Start, React 19, and Tailwind CSS.

## Features

**Public site**
- Home, About (history, vision & mission, managing committee), Departments, Doctors, Services
- News & Events, Stories, Careers, Donate, Contact
- Appointment booking flow

**Patient portal**
- Dashboard, appointments, medical records, prescriptions, lab & radiology reports
- Invoices & payments, messages, notifications, profile & settings

**Admin dashboard**
- Appointments, patients, doctors, and department management
- Billing, pharmacy, inventory, and laboratory modules
- Reports and system settings

## Tech Stack

- **[TanStack Start](https://tanstack.com/start)** — full-stack React framework (SSR via Nitro) with file-based routing (`@tanstack/react-router`)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** with **shadcn/ui** and **Radix UI** primitives
- **TanStack Query** for data fetching/caching
- **React Hook Form** + **Zod** for forms and validation
- **Recharts** for charts, **Embla Carousel** for carousels
- Package management via **bun** (with npm as a fallback — both lockfiles are present)

> The app currently runs on mock data (`src/lib/mock-data.ts`); no backend/API or auth is wired up yet.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+
- [Bun](https://bun.sh/) (recommended) or npm

### Installation

```sh
git clone https://github.com/Afu123best/sahur-beats-project.git
cd sahur-beats-project
bun install   # or: npm install
```

### Development

```sh
bun run dev   # or: npm run dev
```

The dev server starts via Vite; open the printed local URL in your browser.

### Other scripts

| Command | Description |
| --- | --- |
| `dev` | Start the Vite dev server |
| `build` | Production build |
| `build:dev` | Development-mode build |
| `preview` | Preview the production build locally |
| `lint` | Run ESLint |
| `format` | Format the codebase with Prettier |

## Project Structure

```
src/
├── components/
│   ├── site/          # Public-site components (Navbar, Footer, PublicLayout, etc.)
│   ├── dashboard/      # Admin/patient dashboard shell
│   └── ui/             # shadcn/ui component library
├── routes/             # File-based routes (public, admin.*, patient.*)
├── lib/
│   ├── mock-data.ts    # Mock hospital, department, doctor, and stats data
│   └── utils.ts
├── hooks/              # Shared React hooks
├── router.tsx           # TanStack Router setup
├── server.ts / start.ts # SSR entry points
└── styles.css           # Global Tailwind styles
```

Routes follow TanStack Router's file-based conventions — e.g. `admin.patients.tsx` maps to `/admin/patients`, and `departments.$slug.tsx` maps to `/departments/:slug`.

## Contributing

This project is connected to [Lovable](https://lovable.dev). If you're contributing via Git directly, avoid rewriting published history (force-pushing, rebasing, or amending pushed commits) on the connected branch, since Lovable syncs from it — see `AGENTS.md` for details.

## License

No license has been specified for this project yet.
