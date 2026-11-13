# Expo Next Monorepo

> A cross-platform application with a monorepo structure supporting iOS, Android, and web from a single codebase.

This project is a monorepo template integrating Expo, Next.js, and NativeWind, providing an environment to simultaneously develop mobile (iOS/Android) and web applications from a single codebase.

## Tech Stack

- **Monorepo Management**: Turborepo v2.5.6
- **Mobile App**: Expo
- **Web App**: Next.js
- **Styling**: NativeWind (Tailwind CSS v3.4.1 for React Native)
- **Language**: TypeScript

## In pnpm workspaces, every module's packages are stored at a top-level node_modules/.pnpm folder (the pnpm virtual store).

## In individual project folders, node_modules contains symlinks to this pnpm store.
