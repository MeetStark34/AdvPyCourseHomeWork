'use client'

import { motion } from 'framer-motion'
import styles from './ThemeSwitcher.module.css'

interface ThemeSwitcherProps {
  currentTheme: 'dark' | 'light' | 'noon' | 'nightly'
  onThemeChange: (theme: 'dark' | 'light' | 'noon' | 'nightly') => void
}

export default function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  const themes = [
    { id: 'dark' as const, label: 'Dark', icon: '🌑' },
    { id: 'light' as const, label: 'Light', icon: '☀️' },
    { id: 'noon' as const, label: 'Noon', icon: '🌤️' },
    { id: 'nightly' as const, label: 'Nightly', icon: '🌙' },
  ]

  return (
    <div className={styles.container}>
      {themes.map((theme) => (
        <motion.button
          key={theme.id}
          className={`${styles.themeButton} ${currentTheme === theme.id ? styles.active : ''}`}
          onClick={() => onThemeChange(theme.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={theme.label}
        >
          <span className={styles.icon}>{theme.icon}</span>
        </motion.button>
      ))}
    </div>
  )
}