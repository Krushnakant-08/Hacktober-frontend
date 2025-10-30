# 🎉 Hacktober-frontend

[![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg?style=flat&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38bdf8.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Ready-000000.svg?style=flat&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

> An elegant React-powered frontend showcasing the vibrant Hacktober community events and gallery. Built with modern web technologies to deliver a smooth, responsive user experience.


## ✨ Features

- 📸 Dynamic event galleries with smooth carousels
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🚀 Fast loading and optimized images
- 🌐 Easy deployment to Vercel

## 🗂️ Project Structure

- A Create React App-based frontend (`react-scripts`).
- A reusable gallery component with per-event carousels: `src/components/Gallery.js`.
- Tailwind CSS for styling and `slick-carousel` for carousel styles.
- Static assets under `public/assets/gallery/` organized by year (e.g. `2k25`, `2k24`).

## 🚀 Getting Started

### Prerequisites

- Node.js (recommended >=14)
- npm or yarn
- Git

### Quick Start

1. **Clone the repository**
   ```powershell
   git clone https://github.com/Krushnakant-08/Hacktober-frontend.git
   cd Hacktober-frontend
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Start development server**
   ```powershell
   npm start
   ```
   The app will be available at `http://localhost:3000`

### Production Build

Create an optimized production build:

```powershell
npm run build
```

The build artifacts will be in the `build/` directory, ready for deployment.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Starts development server |
| `npm run build` | Creates production build |
| `npm test` | Runs test suite |
| `npm run build:analyze` | Analyzes bundle size |

## 📸 Gallery Configuration

### Structure
```
public/assets/gallery/
├── 2k25/                 # Current year events
│   ├── inag-*.jpg       # Inauguration images
│   ├── escap-*.png      # Escape Room event
│   └── ...
└── 2k24/                # Previous year
    └── ...
```

### Adding New Events

1. Add images to the appropriate year folder
2. Update the `events2025` array in `src/components/Gallery.js`:
   ```javascript
   {
     eventId: 'your-event',
     title: 'Event Title',
     description: 'Event description',
     files: ['image1.jpg', 'image2.jpg']
   }
   ```

### Image Guidelines

- Preferred formats: `.jpg`, `.png`
- Avoid `.HEIC` files for web compatibility
- Recommended size: 1200x800px or similar aspect ratio
- Max file size: 500KB per image


## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Update documentation for significant changes
- Test thoroughly before submitting PRs

## ✨ Credits

Built with ❤️ by the SY Web Team for ACM Hacktober 2025.
