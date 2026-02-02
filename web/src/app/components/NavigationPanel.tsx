'use client'

import { motion } from 'framer-motion'
import styles from './NavigationPanel.module.css'

interface NavigationPanelProps {
  onNavigate: (windowType: any, breadcrumbs: string[]) => void
}

export default function NavigationPanel({ onNavigate }: NavigationPanelProps) {
  const navItems = [
    { 
      id: 'sessionPDFs', 
      label: 'Session PDFs', 
      icon: '📑',
      breadcrumbs: ['Home', 'Session PDFs']
    },
    { 
      id: 'travaux', 
      label: 'Travaux_Pratiques', 
      icon: '📚',
      breadcrumbs: ['Home', 'Travaux Pratiques']
    },
    { 
      id: 'session1', 
      label: 'Session1_PATELMeet', 
      icon: '📁',
      breadcrumbs: ['Home', 'Sessions', 'Session 1']
    },
    { 
      id: 'session2', 
      label: 'Session2_PATELMeet', 
      icon: '📁',
      breadcrumbs: ['Home', 'Sessions', 'Session 2']
    },
    { 
      id: 'session3', 
      label: 'Session3_PATELMeet', 
      icon: '📁',
      breadcrumbs: ['Home', 'Sessions', 'Session 3']
    },
    { 
      id: 'session4_1', 
      label: 'Session4.1_PATELMeet', 
      icon: '📁',
      breadcrumbs: ['Home', 'Sessions', 'Session 4.1']
    },
    { 
      id: 'session4_2', 
      label: 'Session4.2_PATELMeet', 
      icon: '📁',
      breadcrumbs: ['Home', 'Sessions', 'Session 4.2']
    },
    { 
      id: 'session5_1', 
      label: 'Session5.1_PATELMeet', 
      icon: '📁',
      breadcrumbs: ['Home', 'Sessions', 'Session 5.1']
    },
    { 
      id: 'session5_2', 
      label: 'Session5.2_PATELMeet', 
      icon: '📁',
      breadcrumbs: ['Home', 'Sessions', 'Session 5.2']
    },
    { 
      id: 'readme', 
      label: 'Main README.md', 
      icon: '📄',
      breadcrumbs: ['Home']
    },
  ]

  return (
  <div className={styles.container}>
    <div className={styles.header}>
      <h2 className={styles.title}>Navigation</h2>
    </div>
    
    <div className={styles.navList}>
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          className={styles.navButton}
          onClick={() => onNavigate(item.id, item.breadcrumbs)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          whileHover={{ x: 8 }}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </motion.button>
      ))}
    </div>
  </div>
  )
}