# Task Octarnal Dashboard

A modern, production-grade project management and analytics dashboard built with React 19, TypeScript, and Tailwind CSS 4.

## 🚀 Overview

Task Octarnal is a high-performance dashboard application designed for team collaboration and project tracking. This dashboard application, I focused on applying TypeScript effectively within a scalable React architecture using React Router and Tailwind CSS.

Working on this project strengthened my understanding of type safety, component structuring, API integration, and protected routing with token-based authentication. It also improved my confidence in building responsive, production-ready frontend applications using modern development practices.

## ✨ Key Features

- **Secure Authentication**: Persistent login sessions with protected routes.
- **Dynamic Dashboard**: Real-time analytics, project statistics, and team collaboration tracking.
- **Modern Tech Stack**: Leverages the latest features of React 19 and Tailwind CSS 4.
- **Optimized Data Fetching**: Efficient server-state management with TanStack Query.
- **Responsive Design**: Fully adaptable layout for desktop and mobile devices.
- **Production Ready**: Configured for Vercel deployment with comprehensive linting and type-safety.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)
- **API Client**: [Axios](https://axios-http.com/)
- **State Management**: React Context API

## 📂 Project Structure

```text
src/
├── api/          # API services and Axios configuration
├── app/          # Core setup: Providers and Routing
│   ├── providers/ # Context providers (Auth, Query)
│   └── routes/    # Route definitions and PrivateRoute
├── components/   # Reusable UI & Feature components
│   ├── dashboard/ # Dashboard-specific components
│   └── layout/    # Layout wrappers (Sidebar, Header)
├── hooks/        # Custom React hooks
├── pages/        # Page-level components
└── assets/       # Static assets (images, icons)
```

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ZiauddinJim/Dashboard-panel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To create an optimized production build:

```bash
npm run build
```

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Locally previews the production build.

## 🚀 Deployment

The project is pre-configured for deployment on **Vercel**. Simply connect your repository to Vercel, and it will automatically detect the Vite setup.

---

Built with ❤️ by the Task Octarnal Team.
