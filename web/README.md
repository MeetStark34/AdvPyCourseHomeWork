# AdvPyCourse Workspace - Interactive Repository Explorer

A production-ready interactive website that transforms the GitHub repository into a navigable desktop-like experience, combining Windows OS window logic with macOS visual polish.

## 🎨 Features

### Theme System
- **4 Beautiful Themes**: Dark (default), Light, Noon (warm), and Nightly (blue-dark)
- **Persistent Storage**: Theme preference saved in localStorage
- **Instant Switching**: No page reload required
- **Complete Theming**: All UI elements adapt seamlessly

### Desktop-Like Experience
- **Landing Page**: Bold typography with smooth transitions
- **Split Workspace**: 1:3 and 2:3 layout with Notepad-style tree viewer
- **Window Management**: macOS-inspired floating windows with realistic chrome
- **Breadcrumb Navigation**: Always know where you are
- **Smooth Animations**: Polished transitions respecting reduced-motion preferences

### Interactive Windows

#### Repository Tree (Notepad Window)
- Windows Notepad-inspired design
- Syntax-colored folder structure
- Interactive legend with pulsing indicators
- Non-interactive window buttons (visual only)

#### Session PDFs Window
- macOS Finder-style grid layout
- PDF preview maintaining presentation aspect ratio (16:9)
- Download functionality
- Slide-optimized viewing

#### Travaux Pratiques Window
- A4-optimized document preview
- Distinct visual styling from slides
- Document-centric interface

#### Session Work Windows (Windowception)
- Split layout: tree view (1 part) + description (2 parts)
- Rich markdown content
- GitHub integration links
- Detailed session information

### Main README Window
- Always open by default
- No close button (persistent window)
- Syntax-highlighted content
- Scrollable markdown rendering

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the web directory
cd web

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development
The development server will start at `http://localhost:3000`

### Production Build
```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## 📁 Project Structure

```
web/
├── app/
│   ├── components/
│   │   ├── LandingPage.tsx
│   │   ├── LandingPage.module.css
│   │   ├── Workspace.tsx
│   │   ├── Workspace.module.css
│   │   ├── ThemeSwitcher.tsx
│   │   ├── ThemeSwitcher.module.css
│   │   ├── NotepadWindow.tsx
│   │   ├── NotepadWindow.module.css
│   │   ├── NavigationPanel.tsx
│   │   ├── NavigationPanel.module.css
│   │   ├── ReadmeWindow.tsx
│   │   ├── ReadmeWindow.module.css
│   │   ├── SessionPDFsWindow.tsx
│   │   ├── SessionPDFsWindow.module.css
│   │   ├── TravauxWindow.tsx
│   │   ├── TravauxWindow.module.css
│   │   ├── SessionWindow.tsx
│   │   └── SessionWindow.module.css
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎯 Design Philosophy

### Typography
- **Display**: Playfair Display (serif) for headings and titles
- **Body**: DM Sans (sans-serif) for readable content
- **Mono**: JetBrains Mono for code and technical content

### Color System
Each theme provides a complete color palette:
- Primary, secondary, and tertiary backgrounds
- Text hierarchy (primary, secondary, tertiary)
- Accent colors for interactive elements
- Consistent borders and shadows

### Animations
- Subtle, purposeful motion
- Respects `prefers-reduced-motion`
- Window open/close animations
- Smooth theme transitions

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Render
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `out`

### Static Hosting
The `npm run build` command creates a static export in `out/` that can be deployed to any static hosting service.

## 🎨 Customization

### Adding New Themes
Edit `app/globals.css` and add a new theme block:

```css
[data-theme="custom"] {
  --bg-primary: #your-color;
  --text-primary: #your-color;
  /* ... */
}
```

Then update the theme switcher in `app/components/ThemeSwitcher.tsx`

### Modifying Content
Session content is defined in `app/components/SessionWindow.tsx` in the `sessionData` object.

### Styling Adjustments
Each component has its own CSS Module for isolated styling.

## 📱 Responsive Design
- Desktop-first approach
- Tablet: Reorganized split layouts
- Mobile: Stacked vertical layouts
- Touch-friendly interactive elements

## ♿ Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Reduced motion support
- High contrast theme options

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Playfair Display, DM Sans, JetBrains Mono)

## 📄 License

This project is part of the AdvPyCourseHomeWork repository.

## 👨‍💻 Author

**MStrak**

---

Built with ❤️ using Next.js and modern web technologies