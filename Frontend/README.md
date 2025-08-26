# Hamza Yeşilmen Portfolio - Vite React App

This is a modern React-based portfolio website built with Vite, showcasing the work and expertise of Hamza Yeşilmen, a Senior Mechatronic Engineer & R&D Specialist.

## Features

- 🎨 Modern, responsive design with dark/light theme support
- ⚡ Lightning-fast development with Vite
- 📱 Mobile-first approach
- 🔧 Component-based architecture
- 💼 Interactive project showcase
- 📧 Contact form with email integration
- 🚀 Performance optimized

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 5
- **Styling**: CSS3 with CSS Variables
- **Deployment**: Ready for static hosting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
Frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Components

- **Navigation**: Fixed header with smooth scroll navigation
- **Hero**: Landing section with call-to-action buttons
- **About**: Personal introduction and key expertise areas
- **Experience**: Professional timeline with skills
- **Projects**: Featured project showcase
- **Skills**: Technical expertise organized by categories
- **Contact**: Contact form with map integration
- **Footer**: Site links and social media

## Customization

### Styling
The app uses CSS variables for theming. Colors and spacing can be customized in `src/index.css`:

```css
:root {
  --bg: #121212;
  --txt: #fafafa;
  --accent: #fafafa;
  /* ... other variables */
}
```

### Content
Update the component files in `src/components/` to modify:
- Personal information
- Project details
- Experience timeline
- Skills and expertise
- Contact information

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deployment Options

- **GitHub Pages**: Use `gh-pages` package
- **Netlify**: Drag and drop the dist folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI

## Vite Benefits

- ⚡ Instant server start
- 🔥 Lightning fast HMR (Hot Module Replacement)
- 📦 Optimized builds
- 🛠️ Rich features out of the box
- 🔧 Universal plugin interface

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- CSS animations with reduced motion support
- Lazy loading for smooth scrolling
- Optimized particle effects
- Responsive images and layouts
- Tree-shaking for smaller bundles

## License

This project is private and proprietary to Hamza Yeşilmen.

## Contact

For questions or collaboration opportunities:
- Email: resmiyslmn@gmail.com
- LinkedIn: [hamzayslmn](https://www.linkedin.com/in/hamzayslmn)
- GitHub: [HamzaYslmn](https://github.com/HamzaYslmn)
