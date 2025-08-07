# FinTrack - Wallet Ledger Dashboard

## 🎥 Demo

**[View Live Demo →](https://www.loom.com/share/e812324f0fe74be68f66e40bbf750aab)**

A modern, responsive financial tracking dashboard built with **React**, **TypeScript**, and **Next.js**. This project implements a comprehensive wallet ledger interface featuring transaction management, summary analytics, and a fully responsive design.

## 🎯 Project Overview

This application was built following the technical assessment requirements from [Resilience 17 Venture Studio](https://gist.github.com/the17thstudio/cc38ea98cf3d40640d1a0e5617661dc6). The dashboard provides users with an intuitive interface to view and manage their financial transactions with real-time summary analytics.

## ✨ Features

### 📊 Dashboard Components

- **Transaction Table**: Sortable table with filtering capabilities
- **Summary Cards**: Real-time financial metrics (Total Balance, Credits, Debits, Transaction Count)
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Interactive Navigation**: Smooth sidebar with logo and navigation controls

### 🎨 UI/UX Features

- **Framer Motion Animations**: Smooth sidebar transitions and micro-interactions
- **Loading States**: Skeleton loading components for better UX
- **Error Handling**: Comprehensive error boundaries and fallback states
- **Mobile Optimization**: Card-based layout for mobile devices
- **Dark/Light Mode Ready**: CSS custom properties for theme switching

### 📱 Responsive Behavior

- **Desktop**: Traditional table layout with sortable columns
- **Mobile**: Card-based transaction view with dropdown sorting
- **Tablet**: Optimized layouts for medium screen sizes

## 🛠 Technical Implementation

### Architecture Decisions

**State Management Approach:**

- Used **React Query** for server state management instead of custom hooks
- Kept local state minimal with `useState` for UI interactions
- Avoided complex state management libraries (Redux/Zustand) as they're not necessary for this scope

**Animation Strategy:**

- Implemented **Framer Motion** for smooth sidebar animations
- Custom spring physics for natural feeling transitions
- Optimized animation performance with proper `transform` usage

**Component Structure:**

- **Atomic Design Principles**: Reusable UI components in `/components/ui`
- **Feature-based Organization**: Dashboard-specific components in `/components/dashboard`
- **Layout Components**: Separate navigation and layout logic

### 🏗 Project Structure

```
fintrack/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── dashboard/          # Dashboard pages
│   │   ├── globals.css         # Global styles
│   │   └── layout.tsx          # Root layout
│   ├── components/
│   │   ├── dashboard/          # Dashboard-specific components
│   │   │   ├── Summary.tsx     # Financial summary cards
│   │   │   └── TransactionTable.tsx  # Transaction table/cards
│   │   ├── layout/             # Navigation components
│   │   │   ├── Header.tsx      # Main content header
│   │   │   ├── Sidebar.tsx     # Navigation sidebar
│   │   │   └── MobileOverlay.tsx  # Mobile backdrop
│   │   └── ui/                 # Reusable UI components
│   │       ├── Badge.tsx       # Status indicators
│   │       ├── Skeleton.tsx    # Loading states
│   │       └── Tabs.tsx        # Tab navigation
│   ├── api/                    # API layer
│   ├── types/                  # TypeScript definitions
│   ├── utils/                  # Utility functions
│   └── constant/               # Static data
└── public/                     # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd fintrack-
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Assessment Completion Notes

This implementation demonstrates:

- ✅ **Precision in following requirements**
- ✅ **Modern React/TypeScript best practices**
- ✅ **Responsive design implementation**
- ✅ **Smooth animations and interactions**
- ✅ **Clean, maintainable code structure**
- ✅ **Performance-optimized solution**

Built for the **Resilience 17 Venture Studio** technical assessment, showcasing ability to deliver production-ready applications with attention to detail and user experience.
