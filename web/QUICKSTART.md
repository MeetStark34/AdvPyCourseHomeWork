# Quick Start Guide

Get the AdvPyCourse Workspace running in under 5 minutes.

## 🚀 Installation

```bash
# Navigate to the web directory
cd web

# Install dependencies
npm install
```

## 🏃 Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 What You'll See

1. **Landing Page**
   - Bold "Created By MStrak" typography
   - "Enter Workspace" button
   - Smooth fade-in animation

2. **Main Workspace** (after clicking Enter)
   - **Left Panel (1/3)**: Notepad-style window with repository tree
   - **Right Panel (2/3)**: Navigation buttons + content area
   - **Theme Switcher**: Top-right corner (4 themes)

3. **Try These Actions**
   - Click different theme buttons (🌑 ☀️ 🌤️ 🌙)
   - Click "Session PDFs" → See grid of PDFs → Click a PDF
   - Click "Session1_PATELMeet" → See split view with tree + description
   - Refresh page → Theme persists!

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm start
```

The build output goes to the `out/` directory (static files ready to deploy).

## 🌐 Deploy

### Vercel (Fastest)
```bash
npm i -g vercel
vercel
```

### Render
- Connect your repo
- Set root directory: `web`
- Build command: `npm run build`
- Publish directory: `out`

See `DEPLOYMENT.md` for detailed deployment instructions.

## 🎯 Key Files

```
web/
├── app/
│   ├── page.tsx              # Main entry point
│   ├── globals.css           # Theme variables
│   ├── layout.tsx            # Root layout
│   └── components/           # All UI components
├── package.json              # Dependencies
├── next.config.js            # Next.js config
└── tsconfig.json            # TypeScript config
```

## 🔧 Common Tasks

### Add a New Theme

1. Edit `app/globals.css`:
```css
[data-theme="mytheme"] {
  --bg-primary: #your-color;
  --text-primary: #your-color;
  /* ... add all variables ... */
}
```

2. Edit `app/components/ThemeSwitcher.tsx`:
```typescript
const themes = [
  // ... existing themes
  { id: 'mytheme' as const, label: 'MyTheme', icon: '✨' },
]
```

### Add a New Session

Edit `app/components/SessionWindow.tsx` and add to `sessionData`:

```typescript
4: {
  title: 'Session 4 - Your Title',
  folder: 'Session4_PATELMeet',
  tree: `Session4_PATELMeet/
├── ...`,
  focus: ['Point 1', 'Point 2'],
  concepts: ['Concept 1', 'Concept 2']
}
```

Then add navigation button in `app/components/NavigationPanel.tsx`.

### Change Fonts

Edit `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');

:root {
  --font-display: 'YourFont', serif;
}
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
PORT=3001 npm run dev
```

### TypeScript Errors
```bash
# Check for errors
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### Theme Not Working
- Check browser console for errors
- Verify localStorage is enabled
- Try in incognito mode

### Build Fails
```bash
# Clear everything and reinstall
rm -rf node_modules .next out
npm install
npm run build
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💡 Pro Tips

1. **Hot Reload**: Development server auto-refreshes on file changes
2. **Component Inspector**: React DevTools helps debug component state
3. **Network Throttling**: Test on slow connections in Chrome DevTools
4. **Mobile Testing**: Use Chrome DevTools device mode or real devices
5. **Theme Testing**: Switch themes while developing to ensure consistency

## 🎓 Next Steps

1. Read `ARCHITECTURE.md` to understand design decisions
2. Check `DEPLOYMENT.md` for production deployment
3. Explore `README.md` for comprehensive documentation
4. Customize content to match your repository structure
5. Add real PDFs and content as needed

## 🆘 Need Help?

- Check the README.md for detailed documentation
- Review ARCHITECTURE.md for technical details
- Look at component code - it's well commented
- Search Next.js docs for framework-specific questions

---

**Happy coding! 🚀**

The workspace should be running at http://localhost:3000