# Pizza Plus Restaurant Website

## Overview

Pizza Plus is a kosher pizza restaurant website built as a modern full-stack web application. The system serves as both a customer-facing website and an online ordering platform for a Jerusalem-based pizzeria. The application features multilingual support (Hebrew, English, French, Russian), AI-powered customer service chatbot, and integrations with WhatsApp ordering and TikTok analytics.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: React hooks for local state, React Query for server state
- **Lazy Loading**: React.lazy() for code splitting and performance optimization
- **Responsive Design**: Mobile-first approach with RTL support for Hebrew

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL store
- **API Structure**: RESTful endpoints with proper error handling

### Database Architecture
- **Primary Database**: PostgreSQL (configured for Neon serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Connection pooling with @neondatabase/serverless

## Key Components

### 1. Menu Management System
- Dynamic menu items with multilingual support
- Category-based filtering (pizzas, pastas, salads, etc.)
- Customizable toppings with pricing per pizza size
- Real-time price calculations including toppings

### 2. Shopping Cart & Ordering
- Session-based cart management
- WhatsApp integration for order placement
- Multiple contact methods (phone, WhatsApp)
- Order tracking and management system

### 3. AI Customer Service
- Google Gemini AI integration for customer support
- Context-aware responses about menu, prices, and restaurant info
- Multilingual chat support matching website language
- Restaurant-specific knowledge base

### 4. Advanced Analytics & Tracking
- **Dual TikTok Tracking System**: Client-side Pixel + Server-side Events API
- **TikTok Pixel ID**: D179S7RC77UA68QT5U1G with access token integration
- **Comprehensive Event Tracking**: ViewContent, AddToCart, InitiateCheckout, PlaceAnOrder
- **Advanced Parameters**: Product IDs, values, currency, user data with SHA-256 hashing
- **Server-side API**: Reliable event delivery with IP, User-Agent, and referrer data
- **Contact Interaction Tracking**: Phone calls, WhatsApp clicks
- **Campaign Analytics**: Promotional banner clicks, language changes
- **Data Privacy Compliance**: PII hashing and event deduplication

### 5. Multilingual Support
- Complete translation system for 4 languages
- RTL layout support for Hebrew
- Language-specific content and formatting
- Automatic direction switching

## Data Flow

### 1. User Journey
```
Landing Page → Menu Browse → Item Selection → Cart → WhatsApp Order
     ↓              ↓            ↓           ↓         ↓
Analytics → Category Filter → Toppings → Session → External App
```

### 2. Order Processing
```
Cart Items → WhatsApp Message Generation → External WhatsApp → Restaurant
     ↓                    ↓                      ↓              ↓
Database → Formatted Order Text → Customer Phone → Manual Processing
```

### 3. Chat System
```
User Message → Gemini AI → Context Processing → Response Generation
     ↓             ↓              ↓                    ↓
Session Store → API Call → Restaurant Knowledge → Multilingual Reply
```

## External Dependencies

### Core Dependencies
- **@google/generative-ai**: AI chatbot functionality
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database operations
- **@radix-ui/**: Accessible UI component primitives
- **@tanstack/react-query**: Server state management

### Development Tools
- **vite**: Build tool and dev server
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Type safety and developer experience
- **@replit/**: Replit-specific development tools

### External Services
- **Google Gemini AI**: Customer service chatbot
- **TikTok Pixel**: Marketing analytics and conversion tracking
- **WhatsApp**: Order placement and customer communication
- **Neon Database**: Serverless PostgreSQL hosting

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 and PostgreSQL 16
- **Dev Server**: Vite dev server on port 5000
- **Hot Reload**: Enabled for rapid development
- **Database**: Shared development PostgreSQL instance

### Production Build
- **Frontend**: Static files built with Vite and served by Express
- **Backend**: Node.js server compiled with esbuild
- **Database**: Production PostgreSQL with connection pooling
- **Deployment**: Autoscale deployment target on port 80

### Environment Configuration
- **Environment Variables**: Managed through .env file
- **API Keys**: Gemini AI and TikTok Pixel configurations
- **Contact Info**: Restaurant phone and WhatsApp numbers
- **Database**: Connection string via DATABASE_URL

## Changelog
```
Changelog:
- June 15, 2025. Initial setup
- June 15, 2025. Added promotional banner for weekly deal in French, Hebrew, English
- June 15, 2025. Updated TikTok Pixel ID to D179S7RC77UA68QT5U1G
- June 15, 2025. Fixed deployment configuration for external access (0.0.0.0 binding)
- June 15, 2025. Implemented comprehensive TikTok event tracking system with advanced analytics
- June 15, 2025. Added SHA-256 PII hashing, event deduplication, and customer journey tracking
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```