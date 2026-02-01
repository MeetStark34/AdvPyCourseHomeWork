'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Workspace.module.css'
import NotepadWindow from './NotepadWindow'
import NavigationPanel from './NavigationPanel'
import ReadmeWindow from './ReadmeWindow'
import SessionPDFsWindow from './SessionPDFsWindow'
import TravauxWindow from './TravauxWindow'
import SessionWindow from './SessionWindow'

type WindowType = 'readme' | 'sessionPDFs' | 'travaux' | 'session1' | 'session2' | 'session3' | null

interface WorkspaceProps {
  theme: string
}

export default function Workspace({ theme }: WorkspaceProps) {
  const [activeWindow, setActiveWindow] = useState<WindowType>('readme')
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['Home'])

  const handleNavigate = (windowType: WindowType, crumbs: string[]) => {
    setActiveWindow(windowType)
    setBreadcrumbs(crumbs)
  }

  const handleBack = () => {
    if (breadcrumbs.length > 1) {
      const newCrumbs = breadcrumbs.slice(0, -1)
      setBreadcrumbs(newCrumbs)
      
      // Determine which window to show based on breadcrumbs
      if (newCrumbs.length === 1) {
        setActiveWindow('readme')
      }
    }
  }

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.leftPanel}>
        <NotepadWindow />
      </div>
      
      <div className={styles.rightPanel}>
        <NavigationPanel onNavigate={handleNavigate} />
        
        <div className={styles.contentArea}>
          {breadcrumbs.length > 1 && (
            <div className={styles.breadcrumbBar}>
              <button className={styles.backButton} onClick={handleBack}>
                ← Back
              </button>
              <div className={styles.breadcrumbs}>
                {breadcrumbs.map((crumb, index) => (
                  <span key={index} className={styles.breadcrumb}>
                    {index > 0 && <span className={styles.separator}>/</span>}
                    {crumb}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {activeWindow === 'readme' && <ReadmeWindow />}
          {activeWindow === 'sessionPDFs' && (
            <SessionPDFsWindow onClose={() => handleNavigate('readme', ['Home'])} />
          )}
          {activeWindow === 'travaux' && (
            <TravauxWindow onClose={() => handleNavigate('readme', ['Home'])} />
          )}
          {activeWindow === 'session1' && (
            <SessionWindow
              sessionNumber={1}
              onClose={() => handleNavigate('readme', ['Home'])}
            />
          )}
          {activeWindow === 'session2' && (
            <SessionWindow
              sessionNumber={2}
              onClose={() => handleNavigate('readme', ['Home'])}
            />
          )}
          {activeWindow === 'session3' && (
            <SessionWindow
              sessionNumber={3}
              onClose={() => handleNavigate('readme', ['Home'])}
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}