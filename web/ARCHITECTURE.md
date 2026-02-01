# Architecture & Design Decisions

This document explains the technical and design decisions made in building the AdvPyCourse Workspace.

## 🏗️ Technical Architecture

### Framework Choice: Next.js 14 (App Router)

**Why Next.js?**
- Modern React framework with excellent developer experience
- Built-in optimization (code splitting, image optimization)
- Static export capability for versatile deployment
- TypeScript support out of the box
- Great documentation and community

**Why App Router over Pages Router?**
- Modern approach aligned with React Server Components
- Better code organization with co-located components
- Improved performance characteristics
- Future-proof architecture

### Styling Strategy: CSS Modules

**Why CSS Modules over Tailwind?**
- Complete control over styling without utility class verbosity
- Better for complex, custom designs
- Scoped styles prevent conflicts
- Easier to implement unique visual identity
- Better for animation-heavy interfaces

**Theme Implementation**
- CSS custom properties (variables) for runtime theme switching
- No CSS-in-JS to avoid hydration issues
- Single source of truth in `globals.css`
- localStorage for persistence

### Animation Library: Framer Motion

**Why Framer Motion?**
- Declarative animation API
- Smooth, performant animations
- Easy orchestration of complex sequences
- Built-in gesture recognition
- Excellent TypeScript support
- Respects `prefers-reduced-motion` automatically

### State Management: React useState

**Why no external state library?**
- Application state is simple and local
- No need for global state management
- Props drilling is minimal
- Reduces bundle size
- Faster initial load

## 🎨 Design System

### Typography Hierarchy

```
Display (Playfair Display):
- Headings
- Titles
- Hero text
- High impact moments

Body (DM Sans):
- Paragraphs
- Navigation
- UI labels
- General content

Monospace (JetBrains Mono):
- Code blocks
- File paths
- Technical content
- Terminal output
```

**Why these fonts?**
- **Playfair Display**: Elegant serif that adds sophistication, avoiding generic sans-serif overload
- **DM Sans**: Highly readable, modern, and professional
- **JetBrains Mono**: Developer-friendly, excellent for code

### Color Philosophy

Each theme follows a consistent structure:
```
Background Hierarchy:
- Primary: Base canvas
- Secondary: Raised surfaces
- Tertiary: Interactive elements
- Window: Floating containers

Text Hierarchy:
- Primary: Main content (highest contrast)
- Secondary: Supporting content
- Tertiary: Metadata, timestamps

Accent:
- Interactive elements
- Links
- Active states
- Focus indicators
```

**Theme Personalities:**
- **Dark**: Professional, focused, low eye strain
- **Light**: Clean, high contrast, traditional
- **Noon**: Warm, comfortable, paper-like
- **Nightly**: Calm, blue-tinted, late-night coding

### Layout Strategy

**Desktop-First Approach**
```
Desktop (>1024px):
├── 33.333% Left Panel (Notepad)
└── 66.667% Right Panel (Navigation + Content)

Tablet (768-1024px):
├── Stacked layout
├── 40% Left Panel
└── 60% Right Panel

Mobile (<768px):
└── Fully stacked vertical layout
```

**Why Desktop-First?**
- Primary audience is developers on computers
- Easier to scale down than up
- Desktop experience is the hero
- Mobile is functional fallback

## 🪟 Window System Architecture

### Window Hierarchy

```
Level 1: Base Workspace
├── Notepad Window (persistent, non-modal)
└── Navigation Panel

Level 2: Modal Windows
├── Session PDFs (overlay)
├── Travaux Pratiques (overlay)
└── Session Windows (overlay)

Level 3: Content States
├── Grid View (PDF listings)
└── Preview View (individual PDFs)
```

### Window Behaviors

**Notepad Window**
- Always visible on left panel
- Non-interactive window buttons (visual only)
- Cannot be closed or moved
- Responsive to theme changes

**Modal Windows**
- Click outside to close
- ESC key support (browser default)
- Smooth open/close animations
- Prevented body scroll when open

**README Window**
- Default open state
- No close button (intentionally uncloseable)
- Represents the repository's main documentation
- Always accessible

## 🎯 UX Decisions

### Navigation Strategy

**Breadcrumb System**
```
Home
Home > Sessions > Session 1
Home > Session PDFs
```

Benefits:
- Always shows current location
- Clickable navigation path
- Back button for quick return
- Familiar pattern for users

### Visual Affordances

**Window Chrome (macOS-inspired)**
- Red dot: Close
- Yellow dot: Minimize
- Green dot: Maximize

Even though most are non-interactive, they provide:
- Familiar visual language
- Desktop metaphor reinforcement
- Visual hierarchy

### Content Organization

**Session Structure**
```
Session Window
├── Tree View (33%)
│   └── Folder structure
└── Description (67%)
    ├── Title
    ├── Focus points
    ├── Key concepts
    └── Footer with GitHub link
```

**Rationale:**
- Code context (tree) + explanation (content)
- Similar to IDE sidebar + editor
- Familiar to developers

## 🚀 Performance Optimizations

### Code Splitting
- Each component is lazy-loadable
- Route-based splitting via Next.js
- Dynamic imports where beneficial

### Asset Optimization
- Fonts loaded with `display=swap`
- CSS minification in production
- SVG for icons (future enhancement)
- Static export for CDN caching

### Animation Performance
- CSS animations over JavaScript where possible
- GPU-accelerated transforms
- Reduced motion support
- Frame-rate aware animations

### Bundle Size
- No heavy dependencies
- Tree-shaking enabled
- Only import what's needed
- CSS Modules eliminate unused styles

## 🔒 Accessibility Considerations

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Logical tab order
- Focus indicators visible
- Skip links (could be added)

### Screen Readers
- Semantic HTML structure
- ARIA labels on icon buttons
- Meaningful alt text (when images added)
- Heading hierarchy

### Motion Sensitivity
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Color Contrast
- All themes meet WCAG AA standards
- Text has sufficient contrast ratios
- Interactive elements are distinguishable

## 📱 Responsive Strategy

### Breakpoints
```css
Desktop:  >1024px (default)
Tablet:   768px - 1024px
Mobile:   <768px
```

### Adaptation Strategy
- Fluid typography (clamp)
- Flexible grids
- Stacked layouts on mobile
- Touch-friendly targets (44px minimum)

## 🔄 State Management Philosophy

### Component-Level State
Each component manages its own state:
- Theme: At app level
- Window visibility: At workspace level
- Selected items: At window level
- Expanded folders: At component level

### Persistence
Only persisted state:
- Theme preference (localStorage)

Why minimal persistence?
- Fresh state on each visit
- No stale data issues
- Simpler mental model

## 🎭 Animation Philosophy

### Timing Functions
```
Fast:   150-200ms (microinteractions)
Medium: 300-400ms (transitions)
Slow:   600-800ms (page transitions)
```

### Motion Principles
1. **Purpose**: Every animation serves a function
2. **Subtlety**: Animations enhance, don't distract
3. **Consistency**: Similar actions = similar motions
4. **Feedback**: Immediate response to user actions

## 🔮 Future Enhancements

### Potential Additions
- Real PDF rendering (PDF.js)
- Code syntax highlighting
- Search functionality
- Keyboard shortcuts
- Drag-and-drop window positioning
- Window minimize/maximize functionality
- Dark/light mode auto-detection
- Analytics integration

### Scalability Considerations
- Component architecture supports growth
- Easy to add new sessions
- Theme system is extensible
- Window system can handle more types

## 📊 Metrics & Monitoring

### Recommended Metrics
- Page load time
- Time to interactive
- Theme switch performance
- Window open/close smoothness
- Mobile usability scores

### Tools
- Lighthouse for performance audits
- Chrome DevTools for debugging
- Vercel Analytics for user insights

---

This architecture prioritizes:
1. **User Experience**: Smooth, intuitive, delightful
2. **Developer Experience**: Clean code, easy to maintain
3. **Performance**: Fast, efficient, optimized
4. **Accessibility**: Inclusive, usable by all
5. **Maintainability**: Well-organized, documented, extensible