# Plumber Project - Next.js

A modern, multilingual plumbing services web application built with Next.js 15, TypeScript, and Tailwind CSS. This full-stack application features a public-facing website for customers and a comprehensive admin dashboard for business management.

## 🌟 Features

### Public Website

- **Multilingual Support**: Seamlessly switch between French and Arabic with Google Translate integration
- **Service Showcase**: Detailed presentation of plumbing services
- **Contact System**: Easy-to-use contact forms with validation (Zod)
- **Photo Gallery**: Visual portfolio of completed projects with React Photo Album
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Theme Support**: Light/Dark mode with next-themes

### Admin Dashboard

- **Service Management**: Create, update, and delete service offerings
- **Message Management**: View and respond to customer inquiries
- **Account Management**: User administration and access control
- **Statistics & Analytics**: Business insights with interactive Recharts
- **Secure Authentication**: Protected admin routes with OTP input
- **Toast Notifications**: User feedback with Sonner

## 🚀 Tech Stack

### Core Framework

- ![Next.js](https://img.shields.io/badge/Next.js-15.5.4-000000?style=for-the-badge&logo=next.js&logoColor=white) - React framework with App Router
- ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black) - UI library
- ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white) - Type-safe development
- ![Turbopack](https://img.shields.io/badge/Turbopack-Latest-000000?style=for-the-badge&logo=vercel&logoColor=white) - Ultra-fast bundler

### Database & ORM

- ![Prisma](https://img.shields.io/badge/Prisma-6.18.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white) - Next-generation ORM for Node.js & TypeScript

### State Management

- ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.9.0-764ABC?style=for-the-badge&logo=redux&logoColor=white) - Predictable state container
- ![React Redux](https://img.shields.io/badge/React_Redux-9.2.0-764ABC?style=for-the-badge&logo=redux&logoColor=white) - Official React bindings

### UI & Styling

- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) - Utility-first CSS framework
- ![Radix UI](https://img.shields.io/badge/Radix_UI-Latest-161618?style=for-the-badge&logo=radix-ui&logoColor=white) - Headless, accessible UI components
- ![Lucide](https://img.shields.io/badge/Lucide-0.544-F56565?style=for-the-badge&logo=lucide&logoColor=white) - Beautiful icon library
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white) - Additional UI components
- **next-themes** (0.4.6) - Perfect Dark Mode in Next.js
- **class-variance-authority** - Type-safe component variants
- **tailwind-merge** - Merge Tailwind CSS classes
- **tailwindcss-animate** - Animation utilities

### Carousels & Sliders

- ![Swiper](https://img.shields.io/badge/Swiper-12.0.2-6332F6?style=for-the-badge&logo=swiper&logoColor=white) - Modern mobile touch slider
- **Embla Carousel** (8.6.0) - Lightweight carousel library
- **React Slick** (0.31.0) - Carousel component
- **Keen Slider** (6.8.6) - Touch slider library
- **React Multi Carousel** (2.8.6) - Multiple item carousel

### Data Visualization

- ![Recharts](https://img.shields.io/badge/Recharts-2.15.4-FF6B6B?style=for-the-badge&logo=chartdotjs&logoColor=white) - Composable charting library

### Translation & Internationalization

- **@miracleufo/react-g-translator** (1.3.4) - Google Translate React wrapper
- **@vitalets/google-translate-api** (9.2.1) - Google Translate API
- **translate-google** (1.5.0) - Google Translate integration

### Additional Libraries

- **React Photo Album** (3.1.0) - Responsive photo gallery
- **Input OTP** (1.4.2) - One-time password input component
- **Vaul** (1.1.2) - Drawer component for mobile
- **Sonner** (2.0.7) - Toast notifications
- **React Spinners** (0.17.0) - Loading spinners collection
- **Zod** (4.1.12) - TypeScript-first schema validation

### Development Tools

- **ESLint** (9.37.0) - Code linting
- **Prettier** (3.6.2) - Code formatting
- **@tailwindcss/postcss** - PostCSS plugin for Tailwind
- **TypeScript** (5.x) - Static type checking

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager
- Database (PostgreSQL, MySQL, or SQLite for Prisma)

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/hamzaODprogramer/plumber-project-nextJs.git
cd plumber-project-nextjs
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="your_database_connection_string"

# API URLs
NEXT_PUBLIC_API_URL=your_api_url

# Add other necessary environment variables
```

4. **Set up Prisma**

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## 🌍 Internationalization

The application supports:

- **French (FR)** - Default language
- **Arabic (AR)** - RTL (Right-to-Left) support
- **Google Translate Integration** - Automatic translation powered by multiple translation libraries

Language switching is available in the navigation menu with real-time translation capabilities.

## 🔒 Admin Access

The admin dashboard is protected and requires authentication with OTP verification. Access the admin panel at:

```
http://localhost:3000/admin
```

## 🎨 Customization

### Tailwind CSS

Customize the theme in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your brand colors
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

### Redux Store

Add new slices in the `store/slices` directory and configure in `store/store.ts`.

### Prisma Schema

Modify the database schema in `prisma/schema.prisma` and run migrations:

```bash
npx prisma migrate dev --name your_migration_name
```

## 📊 Admin Dashboard Features

- **Dashboard Overview**: Key metrics and statistics with Recharts
- **Services Management**: CRUD operations for services
- **Messages**: Customer inquiry management with toast notifications
- **Analytics**: Visual data representation with interactive charts
- **User Management**: Admin account administration with OTP security
- **Theme Toggle**: Light/Dark mode support

## 🧪 Code Quality

- **ESLint**: Configured for Next.js best practices with Prettier integration
- **TypeScript**: Strict type checking enabled
- **Prettier**: Automatic code formatting
- **Zod**: Runtime type validation for forms and APIs

## 📦 Key Dependencies

| Package                     | Version | Purpose                    |
| --------------------------- | ------- | -------------------------- |
| Next.js                     | 15.5.4  | React framework            |
| React                       | 19.1.0  | UI library                 |
| Prisma                      | 6.18.0  | Database ORM               |
| Redux Toolkit               | 2.9.0   | State management           |
| Tailwind CSS                | 4.x     | Styling                    |
| Radix UI                    | Latest  | Accessible components      |
| Recharts                    | 2.15.4  | Data visualization         |
| Swiper                      | 12.0.2  | Touch slider               |
| Lucide React                | 0.544.0 | Icons                      |
| Zod                         | 4.1.12  | Schema validation          |
| Sonner                      | 2.0.7   | Toast notifications        |
| next-themes                 | 0.4.6   | Theme management           |
| @miracleufo/react-g-translator | 1.3.4   | Google Translate wrapper   |
| Input OTP                   | 1.4.2   | OTP input component        |
| React Photo Album           | 3.1.0   | Photo gallery              |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Known Issues

- None currently reported

## 🔮 Future Enhancements

- [ ] Online booking system
- [ ] Payment integration
- [ ] Customer portal
- [ ] Mobile app
- [ ] Advanced analytics dashboard
- [ ] Real-time notifications
- [ ] Multi-currency support
- [ ] Advanced search functionality

## 📝 License

This project is private and proprietary.

---

**Built with ❤️ using Next.js, TypeScript, Prisma, and Tailwind CSS**
