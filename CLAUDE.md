# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack (recommended for fast development)
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run Next.js linting

### Package Management
The project uses npm as the primary package manager (recommended per README), though pnpm-lock.yaml exists.

## Architecture Overview

GoCart is a multi-vendor e-commerce platform built with Next.js App Router and organized into three main sections:

### Route Structure
- **Public Routes** (`app/(public)/`): Customer-facing storefront including home, shop, cart, product pages, and vendor store pages
- **Admin Routes** (`app/admin/`): Platform administration for managing vendors, stores, approvals, and coupons
- **Store Routes** (`app/store/`): Vendor dashboards for product management, orders, and store analytics

### State Management
Redux Toolkit is used for global state with the following slices:
- `cartSlice` - Shopping cart functionality
- `productSlice` - Product data management
- `addressSlice` - Customer address handling
- `ratingSlice` - Product rating system

The Redux store is configured in `lib/store.js` and provided via `app/StoreProvider.js`.

### Component Organization
- **Shared Components** (`components/`): Reusable UI components like ProductCard, Navbar, Footer
- **Admin Components** (`components/admin/`): AdminLayout, AdminSidebar, AdminNavbar for admin interface
- **Store Components** (`components/store/`): StoreLayout, StoreSidebar, StoreNavbar for vendor dashboards

### Tech Stack Details
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Charts**: Recharts for analytics
- **Notifications**: React Hot Toast
- **Date Handling**: date-fns

### Configuration
- Images are unoptimized (configured in next.config.mjs)
- Path aliases configured with `@/*` pointing to root directory
- Tailwind CSS is configured via PostCSS

## Key Patterns
- Route groups are used to organize pages by user type: (public), admin, store
- Layout components provide consistent navigation for each section
- Redux slices follow feature-based organization in `lib/features/`
- Components are organized by functionality and user type