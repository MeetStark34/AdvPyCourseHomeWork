'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ThemeSwitcher.module.css'

interface ThemeSwitcherProps {
  currentTheme: 'dark' | 'light' | 'noon' | 'nightly'
  onThemeChange: (theme: 'dark' | 'light' | 'noon' | 'nightly') => void
}

export default function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  const [open, setOpen] = useState(false) // default CLOSED

  const themes = [
    { id: 'dark' as const, icon: '🌑' },
    { id: 'light' as const, icon: '☀️' },
    { id: 'noon' as const, icon: '🌤️' },
    { id: 'nightly' as const, icon: '🌙' },
  ]

  const activeTheme = themes.find(t => t.id === currentTheme)!

  return (
    <motion.div
      className={`${styles.container} ${open ? styles.open : styles.closed}`}
      initial={false}
      animate={{ width: open ? 185 : 110 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {/* Toggle Button */}
      <motion.button
        className={styles.toggleButton}
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 1.5 }}
        title={open ? 'Collapse' : 'Expand'}
      >
        {open ? '➡' : '⬅'}
      </motion.button>

      {/* Theme Buttons */}
      <AnimatePresence>
        {open ? (
          themes.map((theme) => (
            <motion.button
              key={theme.id}
              className={`${styles.themeButton} ${currentTheme === theme.id ? styles.active : ''}`}
              onClick={() => onThemeChange(theme.id)}
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
            >
              <span className={styles.icon}>{theme.icon}</span>
            </motion.button>
          ))
        ) : (
          <motion.div
            key="active"
            className={styles.activeOnly}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {activeTheme.icon}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
