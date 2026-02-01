'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LandingPage from './components/LandingPage'
import Workspace from './components/Workspace'
import ThemeSwitcher from './components/ThemeSwitcher'

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light' | 'noon' | 'nightly'>('dark')

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('workspace-theme') as typeof theme
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
  }, [])

  const handleThemeChange = (newTheme: typeof theme) => {
    setTheme(newTheme)
    localStorage.setItem('workspace-theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const handleEnter = () => {
    setHasEntered(true)
  }

  return (
    <>
      <ThemeSwitcher currentTheme={theme} onThemeChange={handleThemeChange} />
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <LandingPage key="landing" onEnter={handleEnter} />
        ) : (
          <Workspace key="workspace" theme={theme} />
        )}
      </AnimatePresence>
    </>
  )
}