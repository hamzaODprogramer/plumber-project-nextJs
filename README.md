# Plumber Project - Next.js

A modern, multilingual plumbing services web application built with Next.js 15, TypeScript, and Tailwind CSS. This full-stack application features a public-facing website for customers and a comprehensive admin dashboard for business management.

## 🌟 Features

### Public Website
- **Multilingual Support**: Seamlessly switch between French and Arabic
- **Service Showcase**: Detailed presentation of plumbing services
- **Contact System**: Easy-to-use contact forms for customer inquiries
- **Photo Gallery**: Visual portfolio of completed projects
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)

### Admin Dashboard
- **Service Management**: Create, update, and delete service offerings
- **Message Management**: View and respond to customer inquiries
- **Account Management**: User administration and access control
- **Statistics & Analytics**: Business insights with interactive charts
- **Secure Authentication**: Protected admin routes

## 🚀 Tech Stack

### Core Framework
- ![Next.js](https://img.shields.io/badge/Next.js-15.5.4-000000?style=for-the-badge&logo=next.js&logoColor=white) - React framework with App Router
- ![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black) - UI library
- ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white) - Type-safe development
- ![Turbopack](https://img.shields.io/badge/Turbopack-Latest-000000?style=for-the-badge&logo=vercel&logoColor=white) - Ultra-fast bundler

### State Management
- ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.9.0-764ABC?style=for-the-badge&logo=redux&logoColor=white) - Predictable state container
- ![React Redux](https://img.shields.io/badge/React_Redux-9.2.0-764ABC?style=for-the-badge&logo=redux&logoColor=white) - Official React bindings

### UI & Styling
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) - Utility-first CSS framework
- ![Radix UI](https://img.shields.io/badge/Radix_UI-Latest-161618?style=for-the-badge&logo=radix-ui&logoColor=white) - Headless, accessible UI components
- ![Lucide](https://img.shields.io/badge/Lucide-0.544-F56565?style=for-the-badge&logo=lucide&logoColor=white) - Beautiful icon library
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white) - Additional UI components

### Carousels & Sliders
- ![Swiper](https://img.shields.io/badge/Swiper-12.0.2-6332F6?style=for-the-badge&logo=swiper&logoColor=white) - Modern mobile touch slider
- **Embla Carousel** - Lightweight carousel library
- **React Slick** - Carousel component
- **Keen Slider** - Touch slider library

### Data Visualization
- ![Recharts](https://img.shields.io/badge/Recharts-2.15-FF6B6B?style=for-the-badge&logo=chartdotjs&logoColor=white) - Composable charting library

### Additional Libraries
- **React Photo Album** - Responsive photo gallery
- **Input OTP** - One-time password input component
- **Vaul** - Drawer component for mobile

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
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
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
# Add other necessary environment variables
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

### Linting
```bash
npm run lint
```


## 🌍 Internationalization (i18n)

The application supports:
- **French (FR)** - Default language
- **Arabic (AR)** - RTL (Right-to-Left) support

Language switching is available in the navigation menu.

## 🔒 Admin Access

The admin dashboard is protected and requires authentication. Access the admin panel at:
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
}
```

### Redux Store
Add new slices in the `store/slices` directory and configure in `store/store.ts`.

## 📊 Admin Dashboard Features

- **Dashboard Overview**: Key metrics and statistics
- **Services Management**: CRUD operations for services
- **Messages**: Customer inquiry management
- **Analytics**: Visual data representation with Recharts
- **User Management**: Admin account administration

## 🧪 Code Quality

- **ESLint**: Configured for Next.js best practices
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting (recommended to configure)

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 15.5.4 | React framework |
| React | 19.1.0 | UI library |
| Redux Toolkit | 2.9.0 | State management |
| Tailwind CSS | 4.x | Styling |
| Radix UI | Latest | Accessible components |
| Recharts | 2.15.4 | Data visualization |
| Swiper | 12.0.2 | Touch slider |
| Lucide React | 0.544.0 | Icons |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 🐛 Known Issues

- None currently reported

## 📞 Support

For support, please contact the development team or open an issue in the repository.

## 🔮 Future Enhancements

- [ ] Online booking system
- [ ] Payment integration
- [ ] Customer portal
- [ ] Mobile app
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard

---

**Built with ❤️ using Next.js and TypeScript**