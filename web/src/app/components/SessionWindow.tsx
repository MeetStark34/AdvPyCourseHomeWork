'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './SessionWindow.module.css'

interface SessionWindowProps {
  sessionNumber: number
  onClose: () => void
}

const sessionData = {
  1: {
    title: 'Session 1 - CSV Sales Analysis (Procedural Python)',
    folder: 'Session1_PATELMeet',
    tree: `Session1_PATELMeet/
├── 📄 README.md
├── 🐍 main.py
├── 🐍 analysis.py
├── 🐍 utils.py
├── 📊 data/
│   ├── sales_2023.csv
│   └── sales_2024.csv
├── 📁 venv/
└── 📄 requirements.txt`,
    focus: [
      'Professional Python project setup',
      'Virtual environments',
      'Clean folder structure',
      'Defensive CSV parsing',
      'KPI computation'
    ],
    concepts: [
      'Separation of I/O and logic',
      'Reproducibility',
      'Robust parsing',
      'Error handling',
      'Code organization'
    ]
  },
  2: {
    title: 'Session 2 - Object-Oriented Programming Fundamentals',
    folder: 'Session2_PATELMeet',
    tree: `Session2_PATELMeet/
├── 📄 README.md
├── 🐍 oop_basics.py
├── 🐍 classes.py
├── 🐍 inheritance.py
├── 📊 data/
│   └── sample.json
├── 🧪 tests/
│   └── test_classes.py
└── 📄 requirements.txt`,
    focus: [
      'Class design principles',
      'Encapsulation and abstraction',
      'Inheritance vs composition',
      'Magic methods',
      'Property decorators'
    ],
    concepts: [
      'Single Responsibility Principle',
      'DRY (Don\'t Repeat Yourself)',
      'Polymorphism',
      'Interface design',
      'Unit testing basics'
    ]
  },
  3: {
    title: 'Session 3 - Advanced Patterns and Best Practices',
    folder: 'Session3_PATELMeet',
    tree: `Session3_PATELMeet/
├── 📄 README.md
├── 🐍 advanced.py
├── 🐍 patterns.py
├── 🐍 decorators.py
├── 🐍 context_managers.py
├── 🧪 tests/
│   ├── test_patterns.py
│   └── conftest.py
├── 📁 docs/
│   └── architecture.md
└── 📄 requirements.txt`,
    focus: [
      'Design patterns implementation',
      'Decorator patterns',
      'Context managers',
      'Testing strategies',
      'Documentation practices'
    ],
    concepts: [
      'Factory pattern',
      'Singleton pattern',
      'Observer pattern',
      'pytest fixtures',
      'Code documentation'
    ]
  }
}

export default function SessionWindow({ sessionNumber, onClose }: SessionWindowProps) {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([])
  const session = sessionData[sessionNumber as keyof typeof sessionData]

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.window}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.titleBar}>
          <div className={styles.windowButtons}>
            <div className={`${styles.button} ${styles.close}`} onClick={onClose}></div>
            <div className={`${styles.button} ${styles.minimize}`}></div>
            <div className={`${styles.button} ${styles.maximize}`}></div>
          </div>
          <div className={styles.title}>{session.folder}</div>
        </div>

        <div className={styles.content}>
          <div className={styles.splitLayout}>
            <div className={styles.treePanel}>
              <div className={styles.treePanelHeader}>
                <span className={styles.treePanelTitle}>📁 Folder Structure</span>
              </div>
              <pre className={styles.tree}>{session.tree}</pre>
            </div>

            <div className={styles.descriptionPanel}>
              <div className={styles.sessionHeader}>
                <h1 className={styles.sessionTitle}>{session.title}</h1>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>🎯 Focus</h2>
                <ul className={styles.list}>
                  {session.focus.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>💡 Key Concepts</h2>
                <ul className={styles.list}>
                  {session.concepts.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.folderBadge}>
                <span className={styles.folderIcon}>📁</span>
                <span className={styles.folderName}>Folder: {session.folder}/</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <span className={styles.footerPath}>
            📁 AdvPyCourseHomeWork/{session.folder}/
          </span>
          <a 
            href={`https://github.com/yourusername/AdvPyCourseHomeWork/tree/main/${session.folder}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            View on GitHub →
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}