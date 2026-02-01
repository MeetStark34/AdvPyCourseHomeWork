# Component Hierarchy & Data Flow

Visual representation of the application structure.

## 🌳 Component Tree

```
App (page.tsx)
│
├── ThemeSwitcher
│   └── Theme State Management
│       └── localStorage persistence
│
└── <AnimatePresence>
    │
    ├── LandingPage (hasEntered === false)
    │   ├── Background Animation
    │   ├── Title "Created By MStrak"
    │   ├── Subtitle
    │   └── CTA Button → triggers hasEntered = true
    │
    └── Workspace (hasEntered === true)
        │
        ├── Left Panel (33.333%)
        │   └── NotepadWindow
        │       ├── Title Bar
        │       │   ├── Window Buttons (3 dots)
        │       │   └── Title "Repository Structure"
        │       ├── Content
        │       │   ├── Tree Structure (ASCII art)
        │       │   └── Legend
        │       │       └── Color Dots + Labels
        │
        └── Right Panel (66.667%)
            │
            ├── NavigationPanel
            │   ├── Header
            │   └── Navigation Buttons
            │       ├── Session PDFs
            │       ├── Travaux_Pratiques
            │       ├── Session1_PATELMeet
            │       ├── Session2_PATELMeet
            │       ├── Session3_PATELMeet
            │       ├── Loading... (disabled)
            │       └── Main README.md
            │
            └── Content Area
                │
                ├── Breadcrumb Bar (conditional)
                │   ├── Back Button
                │   └── Breadcrumbs Path
                │
                └── Active Window (based on state)
                    │
                    ├── ReadmeWindow (default)
                    │   ├── Title Bar (no close)
                    │   └── Content
                    │       ├── Main Heading
                    │       ├── Sections
                    │       ├── Lists
                    │       └── Footer
                    │
                    ├── SessionPDFsWindow (modal overlay)
                    │   ├── Overlay (click to close)
                    │   └── Window
                    │       ├── Title Bar
                    │       │   ├── Buttons
                    │       │   ├── Title
                    │       │   └── Download Button
                    │       ├── Content
                    │       │   ├── PDF Grid View
                    │       │   │   └── PDF Cards (6 items)
                    │       │   └── Preview View
                    │       │       ├── Back Button
                    │       │       └── Slide Preview (16:9)
                    │       └── Footer
                    │           ├── File Path
                    │           └── GitHub Link
                    │
                    ├── TravauxWindow (modal overlay)
                    │   ├── Overlay (click to close)
                    │   └── Window
                    │       ├── Title Bar
                    │       ├── Content
                    │       │   ├── PDF Grid View
                    │       │   │   └── PDF Cards (5 items)
                    │       │   └── Preview View
                    │       │       ├── Back Button
                    │       │       └── Document Preview (A4)
                    │       └── Footer
                    │
                    └── SessionWindow (modal overlay)
                        ├── Overlay (click to close)
                        └── Window
                            ├── Title Bar
                            ├── Split Content
                            │   ├── Left: Tree Panel (33%)
                            │   │   ├── Header
                            │   │   └── Folder Tree
                            │   └── Right: Description (67%)
                            │       ├── Session Title
                            │       ├── Focus Section
                            │       ├── Concepts Section
                            │       └── Folder Badge
                            └── Footer
                                ├── File Path
                                └── GitHub Link
```

## 🔄 State Flow

```
┌─────────────────────────────────────────────────────────┐
│                    Application State                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Theme State (persisted)                                 │
│  ├── currentTheme: 'dark' | 'light' | 'noon' | 'nightly'│
│  ├── Stored in: localStorage                            │
│  └── Applied to: document.documentElement               │
│                                                          │
│  Navigation State                                        │
│  ├── hasEntered: boolean                                │
│  ├── activeWindow: WindowType                           │
│  └── breadcrumbs: string[]                              │
│                                                          │
│  Window-Level State                                      │
│  ├── selectedPDF: string | null                         │
│  └── expandedFolders: string[]                          │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 📊 Data Flow

```
User Action → Component State Update → Re-render → UI Update

Examples:

1. Theme Change
   User clicks theme → ThemeSwitcher updates state → 
   localStorage updated → document.documentElement updated → 
   All components re-render with new theme

2. Navigation
   User clicks "Session1" → NavigationPanel calls onNavigate → 
   Workspace updates activeWindow + breadcrumbs → 
   SessionWindow mounts with animation

3. Window Modal
   User clicks "Session PDFs" → Overlay mounts → 
   Window animates in → User can navigate grid/preview → 
   Click outside or button → Window animates out → unmounts

4. PDF Selection
   User clicks PDF card → SessionPDFsWindow updates selectedPDF → 
   Content switches from grid to preview → 
   Click back → selectedPDF set to null → returns to grid
```

## 🎨 Style Inheritance

```
globals.css (CSS Variables)
    │
    ├── All components inherit theme variables
    │   ├── var(--bg-primary)
    │   ├── var(--text-primary)
    │   ├── var(--accent)
    │   └── etc.
    │
    └── Component-specific styles (CSS Modules)
        ├── LandingPage.module.css
        ├── Workspace.module.css
        ├── NotepadWindow.module.css
        └── etc.
```

## 🔀 Route Structure

```
/ (Single Page Application)
    │
    ├── State: hasEntered === false
    │   └── Renders: <LandingPage />
    │
    └── State: hasEntered === true
        └── Renders: <Workspace />
            │
            ├── activeWindow === 'readme'
            │   └── Shows: <ReadmeWindow />
            │
            ├── activeWindow === 'sessionPDFs'
            │   └── Shows: <SessionPDFsWindow />
            │
            ├── activeWindow === 'travaux'
            │   └── Shows: <TravauxWindow />
            │
            └── activeWindow === 'session1' | 'session2' | 'session3'
                └── Shows: <SessionWindow sessionNumber={n} />
```

## 🎯 Event Flow

```
User Interactions:

1. Landing → Workspace
   Click "Enter Workspace" button
   → setHasEntered(true)
   → AnimatePresence switches components
   → LandingPage exits, Workspace enters

2. Theme Switch
   Click theme button
   → setTheme(newTheme)
   → localStorage.setItem('workspace-theme', newTheme)
   → document.documentElement.setAttribute('data-theme', newTheme)
   → All components re-render with new colors

3. Open Window
   Click navigation button
   → onNavigate(windowType, breadcrumbs)
   → setActiveWindow(windowType)
   → setBreadcrumbs(breadcrumbs)
   → Window component mounts with animation

4. Close Window
   Click close button OR click overlay
   → onClose()
   → setActiveWindow('readme')
   → setBreadcrumbs(['Home'])
   → Window unmounts with animation

5. Navigate Back
   Click back button
   → handleBack()
   → breadcrumbs.slice(0, -1)
   → Determine parent window
   → Update activeWindow
```

## 📦 Module Dependencies

```
External Dependencies:
    ├── next (Framework)
    ├── react (UI Library)
    ├── react-dom (React Renderer)
    ├── framer-motion (Animations)
    ├── react-markdown (Markdown rendering - unused currently)
    └── remark-gfm (GitHub Flavored Markdown - unused currently)

Internal Dependencies:
    ├── Components depend on their CSS Modules
    ├── All components use globals.css for theming
    ├── Parent components pass state to children via props
    └── No circular dependencies
```

## 🏗️ Build Process

```
Development:
    npm run dev
    ↓
    Next.js Dev Server
    ↓
    Hot Module Replacement
    ↓
    Browser (localhost:3000)

Production:
    npm run build
    ↓
    TypeScript Compilation
    ↓
    CSS Optimization
    ↓
    Static Export
    ↓
    out/ directory
    ↓
    Deploy to hosting
```

## 🎭 Animation Lifecycle

```
Component Mount:
    initial={{ opacity: 0, scale: 0.95 }}
    ↓
    animate={{ opacity: 1, scale: 1 }}
    ↓
    Rendered at full opacity

Component Unmount:
    exit={{ opacity: 0, scale: 0.95 }}
    ↓
    Fade out animation
    ↓
    Component removed from DOM

Note: All wrapped in <AnimatePresence> for exit animations
```

## 🔄 Responsive Breakpoints

```
Desktop (Default)
    > 1024px
    ├── Split layout: 33% / 67%
    └── Full features

Tablet
    768px - 1024px
    ├── Split layout: 40% / 60%
    └── Adjusted spacing

Mobile
    < 768px
    ├── Stacked vertical layout
    ├── Full width components
    └── Touch-optimized buttons
```

---

This diagram represents the complete application architecture, showing how components connect, state flows, and interactions work throughout the system.