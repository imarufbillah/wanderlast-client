# WanderLast — Discover Your Next Adventure

A full-stack travel destination booking platform built with Next.js 16 and React 19. Users can browse curated travel packages, book trips, and manage their travel profile. Admins can create, edit, and delete destination packages through a protected dashboard.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![Better Auth](https://img.shields.io/badge/Auth-Better_Auth-purple)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Authentication & Authorization](#authentication--authorization)
- [Architecture](#architecture)
- [Design System](#design-system)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)

---

## Features

- **Destination Browsing** — Search, filter by category/continent, and explore travel packages
- **Destination Details** — Pricing, highlights, included items, best season, booking card
- **Booking System** — Book trips with status tracking and booking history
- **Full CRUD** — Admin-only create, edit, and delete destinations
- **Authentication** — Email/password signup + Google OAuth social login
- **Role-Based Access Control** — Admin and user roles with route protection
- **User Profiles** — Travel stats, bio, nationality, password management
- **Discount Pricing** — Automatic savings calculation and discount badges
- **Responsive Design** — Mobile, tablet, and desktop layouts
- **Loading States** — Skeleton loaders for all async content
- **Error Handling** — Global error boundary and not-found pages
- **Toast Notifications** — Animated feedback for user actions
- **Breadcrumb Navigation** — Contextual navigation across pages
- **Image Uploads** — ImgBB integration for destination images

---

## Tech Stack

| Layer          | Technology                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) (App Router)                                                           |
| UI Library     | [React 19](https://react.dev)                                                                           |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com)                                                              |
| Components     | [HeroUI](https://heroui.com) (form elements)                                                            |
| Icons          | [Lucide React](https://lucide.dev) + [React Icons](https://react-icons.github.io/react-icons/) (social) |
| Authentication | [Better Auth](https://www.better-auth.com) (JWT + OAuth)                                                |
| Database       | [MongoDB Atlas](https://www.mongodb.com/atlas)                                                          |
| Image Hosting  | [ImgBB](https://imgbb.com)                                                                              |
| Fonts          | Sora (headings) + Inter (body) via `next/font`                                                          |
| Bundler        | Turbopack                                                                                               |

---

## Project Structure

```
wanderlast/
├── public/
│   └── assets/              # Static images (logo, banners, avatars)
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/
│   │   ├── api/auth/        # Better Auth API route handler
│   │   ├── bookings/
│   │   ├── contact/
│   │   ├── destinations/
│   │   │   ├── [id]/
│   │   │   │   └── edit/    # Admin: edit destination
│   │   │   └── new/         # Admin: create destination
│   │   ├── profile/
│   │   ├── signin/
│   │   ├── signup/
│   │   ├── layout.js        # Root layout (fonts, navbar, footer)
│   │   ├── page.jsx         # Homepage
│   │   ├── error.jsx        # Global error boundary
│   │   └── not-found.jsx    # 404 page
│   ├── components/
│   │   ├── auth/            # SignIn/SignUp forms, Google OAuth
│   │   ├── bookings/        # Booking cards, list, status badges
│   │   ├── contact/         # Contact form
│   │   ├── destination-details/  # Detail page components (11 files)
│   │   ├── destination-form/     # Shared form sections (8 files)
│   │   ├── destinations/    # Browse page components (10 files)
│   │   ├── home/            # Homepage sections (Hero, CTA, etc.)
│   │   ├── profile/         # Profile page components (8 files)
│   │   └── ui/              # Shared UI (Navbar, Footer, Toast, Modal)
│   ├── lib/
│   │   ├── api-client.js    # Client-side API calls
│   │   ├── auth-client.js   # Better Auth client instance
│   │   ├── auth.js          # Better Auth server config
│   │   ├── data.js          # Server-side data fetching
│   │   └── rbac.js          # Role-based access control utilities
│   └── proxy.js             # Middleware for route protection
├── .env                     # Environment variables
├── next.config.mjs          # Next.js configuration
├── package.json
├── postcss.config.mjs
└── tailwind (via globals.css)
```

---

## Pages & Routes

| Route                     | Access        | Description                                               |
| ------------------------- | ------------- | --------------------------------------------------------- |
| `/`                       | Public        | Homepage — Hero, Featured Destinations, Testimonials, CTA |
| `/destinations`           | Public        | Browse all destinations with search & filters             |
| `/destinations/[id]`      | Public        | Destination detail page with booking                      |
| `/destinations/new`       | Admin         | Create a new destination                                  |
| `/destinations/[id]/edit` | Admin         | Edit an existing destination                              |
| `/bookings`               | Authenticated | User's booking history and status                         |
| `/profile`                | Authenticated | User profile with travel stats                            |
| `/signin`                 | Public        | Sign in (email/password + Google)                         |
| `/signup`                 | Public        | Create account                                            |
| `/about`                  | Public        | About page                                                |
| `/contact`                | Public        | Contact form                                              |

---

## Authentication & Authorization

### Authentication (Better Auth)

- **Email/Password** — Traditional signup and signin
- **Google OAuth** — Social login via Google
- **JWT Sessions** — Stateless session management with 7-day cookie caching
- **Session API** — Server-side session verification via `auth.api.getSession()`

### Authorization (RBAC)

Two roles are supported:

| Role    | Permissions                                                    |
| ------- | -------------------------------------------------------------- |
| `user`  | Browse destinations, book trips, manage profile, view bookings |
| `admin` | All user permissions + create/edit/delete destinations         |

Route protection is handled by middleware (`proxy.js`) which:

1. Checks if the route is protected
2. Verifies the user session
3. Redirects unauthenticated users to `/signin`
4. Redirects non-admin users away from admin routes

---

## Architecture

### Server vs Client Components

- **Server Components (default)** — Pages, data-fetching components, static sections
- **Client Components** — Forms, interactive filters, auth forms, modals, toasts

### Data Flow

```
┌─────────────────────────────────────────────────────┐
│  Next.js Frontend (localhost:3000)                   │
│                                                     │
│  Server Components ──→ lib/data.js ──→ REST API     │
│  Client Components ──→ lib/api-client.js ──→ REST   │
│                                                     │
│  Auth: Better Auth ──→ MongoDB (direct)             │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│  Backend API (localhost:5000)                        │
│  Destinations CRUD, Bookings CRUD                   │
│  ──→ MongoDB Atlas                                  │
└─────────────────────────────────────────────────────┘
```

- **Server-side fetching** (`lib/data.js`) — Uses `headers()` to forward auth tokens
- **Client-side fetching** (`lib/api-client.js`) — Uses `authClient.token()` for Bearer auth
- **Auth storage** — MongoDB via Better Auth adapter (users, sessions)
- **App data** — Managed by the external backend API

### Component Architecture

Components follow a feature-based folder structure with single responsibility:

- Each page is broken into small, focused components
- Shared form sections are reused between create and edit pages
- UI components (Toast, Modal, Breadcrumbs) are globally reusable
- Loading skeletons mirror the layout of their content counterparts

---

## Design System

### Colors (defined in `globals.css`)

| Token         | Color                 | Usage                      |
| ------------- | --------------------- | -------------------------- |
| `primary`     | #041322 (Black Pearl) | Primary backgrounds, text  |
| `secondary`   | #163531 (Gable Green) | Secondary elements         |
| `accent`      | #13dae9 (Glossy Cyan) | CTAs, highlights, links    |
| `accent-soft` | #84e9ec (Aqua Blast)  | Hover states, soft accents |
| `background`  | #f4fafc               | Page background            |
| `surface`     | #ffffff               | Card backgrounds           |
| `text`        | #161928 (Mirage)      | Body text                  |
| `text-muted`  | #64748b               | Secondary text             |
| `border`      | #e3e9f0               | Borders, dividers          |
| `success`     | #10b981               | Success states             |

### Typography

| Token          | Font  | Usage                       |
| -------------- | ----- | --------------------------- |
| `font-heading` | Sora  | Headings, titles, hero text |
| `font-body`    | Inter | Paragraphs, UI text, labels |

### Animations

- `slide-in-right` — Toast notifications entrance
- `fade-in` — Content appearance
- `scale-in` — Modal/card entrance
- `toast-progress` — Toast auto-dismiss progress bar

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- MongoDB Atlas account (or local MongoDB)
- Google OAuth credentials (for social login)
- ImgBB API key (for image uploads)
- The backend API server running on port 5000

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd wanderlast

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your environment variables (see below)

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Better Auth
BETTER_AUTH_SECRET=<your-secret-key>
BETTER_AUTH_URL=http://localhost:3000

# Next.js Public
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000

# MongoDB
MONGO_DB_URI=<your-mongodb-connection-string>

# Google OAuth
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>

# ImgBB (Image Uploads)
NEXT_PUBLIC_IMGBB_API_KEY=<your-imgbb-api-key>
```

| Variable                      | Description                                   |
| ----------------------------- | --------------------------------------------- |
| `BETTER_AUTH_SECRET`          | Secret key for Better Auth session encryption |
| `BETTER_AUTH_URL`             | Base URL for Better Auth server               |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Public auth URL (client-side)                 |
| `NEXT_PUBLIC_API_BASE_URL`    | Backend API base URL                          |
| `MONGO_DB_URI`                | MongoDB Atlas connection string               |
| `GOOGLE_CLIENT_ID`            | Google OAuth client ID                        |
| `GOOGLE_CLIENT_SECRET`        | Google OAuth client secret                    |
| `NEXT_PUBLIC_IMGBB_API_KEY`   | ImgBB API key for image uploads               |

---

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start development server (Turbopack) |
| `npm run build` | Build for production                 |
| `npm run start` | Start production server              |
| `npm run lint`  | Run ESLint                           |
