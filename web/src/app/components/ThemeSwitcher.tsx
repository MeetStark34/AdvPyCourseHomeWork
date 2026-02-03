'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ThemeSwitcher.module.css'

interface ThemeSwitcherProps {
  currentTheme: 'dark' | 'light' | 'monokai' | 'solarized-dark' | 'solarized-light' | 'nord' | 'tokyo-night' | 'synthwave' | 'ayu-mirage' | 'gruvbox'
  onThemeChange: (theme: 'dark' | 'light' | 'monokai' | 'solarized-dark' | 'solarized-light' | 'nord' | 'tokyo-night' | 'synthwave' | 'ayu-mirage' | 'gruvbox') => void
}

export default function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  const [open, setOpen] = useState(false)

  const themes = [
    // Classic Themes
    { id: 'dark' as const, icon: '🌑', name: 'Dark+' },
    { id: 'light' as const, icon: '☀️', name: 'Light+' },
    { id: 'monokai' as const, icon: '🎨', name: 'Monokai' },
    { id: 'solarized-dark' as const, icon: '🌒', name: 'Solarized Dark' },
    { id: 'solarized-light' as const, icon: '🌕', name: 'Solarized Light' },
    
    // Modern Popular Themes
    { id: 'nord' as const, icon: '🏔️', name: 'Nord' },
    { id: 'tokyo-night' as const, icon: '🌃', name: 'Tokyo Night' },
    
    // Unique Options
    { id: 'synthwave' as const, icon: '🌆', name: 'Synthwave \'84' },
    { id: 'ayu-mirage' as const, icon: '🌊', name: 'Ayu Mirage' },
    { id: 'gruvbox' as const, icon: '🍂', name: 'Gruvbox' },
  ]

  const activeTheme = themes.find(t => t.id === currentTheme)!

  return (
    <motion.div
      className={`${styles.container} ${open ? styles.open : styles.closed}`}
      initial={false}
      animate={{ 
        width: open ? 340 : 65,
        height: open ? 210 : 60
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {/* Toggle Button */}
      <motion.button
        className={styles.toggleButton}
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        title={open ? 'Collapse' : 'Expand Themes'}
      >
        {open ? '✕' : activeTheme.icon}
      </motion.button>

      {/* Theme Buttons Grid */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.themeGrid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {themes.map((theme, index) => (
              <motion.button
                key={theme.id}
                className={`${styles.themeButton} ${currentTheme === theme.id ? styles.active : ''}`}
                onClick={() => {
                  onThemeChange(theme.id)
                  setOpen(false)
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.03 }}
                title={theme.name}
              >
                <span className={styles.icon}>{theme.icon}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Theme Label */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.activeLabel}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.1 }}
          >
            {activeTheme.name}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}