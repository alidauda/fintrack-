# FinTrack - Wallet Ledger Dashboard

## 🎥 Demo

<div>
  <a href="https://www.loom.com/share/e812324f0fe74be68f66e40bbf750aab">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/e812324f0fe74be68f66e40bbf750aab-1736174229421-with-play.gif">
  </a>
</div>

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

## 📋 Technical Requirements Implementation

### ✅ Core Requirements Met

| Requirement                | Implementation                         | Status |
| -------------------------- | -------------------------------------- | ------ |
| **React + TypeScript**     | All components properly typed          | ✅     |
| **Next.js Framework**      | App Router with TypeScript             | ✅     |
| **Component Architecture** | Atomic design with reusable components | ✅     |
| **State Management**       | React Query + local state              | ✅     |
| **Responsive Design**      | Mobile-first with breakpoints          | ✅     |
| **Cloud Deployment**       | Ready for Vercel/Netlify               | ✅     |

### 🎯 Dashboard Features Implemented

#### Header Section

- [x] FinTrack logo placement (moved to sidebar)
- [x] User avatar with optimized sizing
- [x] Search and menu icons
- [x] "Wallet Ledger" title with status indicator
- [x] User avatars section display
- [x] Tab navigation (Overview, Transactions)

#### Summary Cards

- [x] **Total Balance**: $12,345 (+5%)
- [x] **Total Credits**: $7,890 (+3%)
- [x] **Total Debits**: $4,455 (-2%)
- [x] **Transactions**: 150 (+10%)
- [x] Percentage change indicators
- [x] Loading and error states

#### Transaction Table

- [x] Sortable columns (Date, Remark, Amount, Currency, Type)
- [x] Sample data implementation
- [x] Color-coded transaction types
- [x] Mobile card layout
- [x] Responsive design
- [x] Interactive sorting

## 🔧 Technology Stack

- **Framework**: Next.js 15.4.5 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion (motion package)
- **State Management**: TanStack React Query
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 🎨 Design System

### Color Scheme

```css
--color-text-primary: #1B2528
--color-text-secondary: #3A6C7B
--color-background-secondary: #dce4e7
--color-background-tertiary: #087A2E
```

### Typography

- **Font Family**: Public Sans (Google Fonts)
- **Text Sizes**: Responsive scaling with CSS custom properties

### Component Variants

- **Success**: Green theme for credits and positive indicators
- **Error**: Red theme for debits and negative indicators
- **Neutral**: Gray theme for general information

## 📊 Data Structure

### Transaction Interface

```typescript
interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}
```

### Dashboard Summary Interface

```typescript
interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}
```

## 🚨 Error Handling & Edge Cases

### Implemented Error States

- **Loading States**: Skeleton components for all data-dependent sections
- **Empty States**: Dedicated components for no-data scenarios
- **Error Boundaries**: Graceful error handling with retry options
- **Network Errors**: User-friendly error messages
- **Invalid Data**: Type-safe data validation

### Mobile Considerations

- **Touch Targets**: All interactive elements sized for finger-friendly interaction
- **Orientation Support**: Responsive layouts for portrait/landscape
- **Performance**: Optimized animations and rendering for mobile devices

## 🎯 Development Approach & Philosophy

### Why This Architecture?

1. **React Query Over Custom Hooks**:

   - Better caching and background updates
   - Built-in loading and error states
   - Prevents unnecessary re-renders
   - Will scale better when adding more API endpoints

2. **Framer Motion for Animations**:

   - Hardware-accelerated animations
   - Declarative animation syntax
   - Better performance than CSS transitions for complex animations
   - Easy to maintain and modify

3. **Component-Based Architecture**:

   - Maximum reusability
   - Easier testing and maintenance
   - Clear separation of concerns
   - Scalable for larger applications

4. **Mobile-First Responsive Design**:
   - Better performance on mobile devices
   - Progressive enhancement approach
   - Ensures accessibility across all screen sizes

## 🚀 Deployment

This application is optimized for deployment on:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any static hosting service**

### Build Commands

```bash
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Code linting
```

## 📈 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded as needed
- **Optimized Animations**: Hardware-accelerated transforms
- **Bundle Analysis**: Optimized bundle size

## 🔮 Future Enhancements

When scaling this application, considerations for improvement:

- **State Management**: Consider Zustand/Redux for complex state
- **Testing**: Add Jest + React Testing Library
- **Internationalization**: i18n support for multiple languages
- **PWA Features**: Offline support and app-like experience
- **Advanced Filtering**: Date ranges, amount filters, category filters
- **Data Visualization**: Charts and graphs for financial insights

## 👨‍💻 Developer Experience

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code quality and consistency
- **Tailwind CSS**: Utility-first styling approach
- **Hot Reload**: Instant feedback during development
- **Component Documentation**: Self-documenting component structure

---

## 📝 Assessment Completion Notes

This implementation demonstrates:

- ✅ **Precision in following requirements**
- ✅ **Modern React/TypeScript best practices**
- ✅ **Responsive design implementation**
- ✅ **Smooth animations and interactions**
- ✅ **Clean, maintainable code structure**
- ✅ **Performance-optimized solution**

Built for the **Resilience 17 Venture Studio** technical assessment, showcasing ability to deliver production-ready applications with attention to detail and user experience.
