'use client'

import { motion } from 'framer-motion'
import styles from './SessionWindow.module.css'

type SessionInfo = {
  title: string
  folder: string
  tree: React.ReactNode
  focus: string[]
  concepts: string[]
}

interface SessionWindowProps {
  sessionId: string
  onClose: () => void
}

const sessionData: Record<string, SessionInfo> = {
  session1: {
    title: 'Session 1 - CSV Sales Analysis (Procedural Python)',
    folder: 'Session1_PATELMeet',
    tree: (
      <>
        <span className={styles.folder}>📁 Session1_PATELMeet/</span>{'\n'}
        ├── <span className={styles.doc}>📄 README.md</span>{'\n'}
        ├── <span className={styles.py}>🐍 main.py</span>{'\n'}
        ├── <span className={styles.py}>🐍 analysis.py</span>{'\n'}
        ├── <span className={styles.py}>🐍 utils.py</span>{'\n'}
        ├── <span className={styles.folder}>📁 data/</span>{'\n'}
        │   ├── <span className={styles.data}>📊 sales_2023.csv</span>{'\n'}
        │   └── <span className={styles.data}>📊 sales_2024.csv</span>{'\n'}
        ├── <span className={styles.folder}>📁 venv/</span>{'\n'}
        └── <span className={styles.doc}>📄 requirements.txt</span>
      </>
    ),
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

  session2: {
    title: 'Session 2 - Object-Oriented Programming Fundamentals',
    folder: 'Session2_PATELMeet',
    tree: (
      <>
        <span className={styles.folder}>📁 Session2_PATELMeet/</span>{'\n'}
        ├── <span className={styles.doc}>📄 README.md</span>{'\n'}
        ├── <span className={styles.py}>🐍 oop_basics.py</span>{'\n'}
        ├── <span className={styles.py}>🐍 classes.py</span>{'\n'}
        ├── <span className={styles.folder}>📁 tests/</span>{'\n'}
        └── <span className={styles.doc}>📄 requirements.txt</span>
      </>
    ),
    focus: ['Class design', 'Encapsulation', 'Inheritance', 'Magic methods', 'Testing'],
    concepts: ['OOP principles', 'DRY', 'Polymorphism', 'Interfaces', 'Unit tests']
  },

  session3: {
    title: 'Session 3 - Advanced Patterns and Best Practices',
    folder: 'Session3_PATELMeet',
    tree: (
      <>
        <span className={styles.folder}>📁 Session3_PATELMeet/</span>{'\n'}
        ├── <span className={styles.doc}>📄 README.md</span>{'\n'}
        ├── <span className={styles.py}>🐍 patterns.py</span>{'\n'}
        ├── <span className={styles.py}>🐍 decorators.py</span>{'\n'}
        ├── <span className={styles.folder}>📁 tests/</span>{'\n'}
        └── <span className={styles.doc}>📄 requirements.txt</span>
      </>
    ),
    focus: ['Patterns', 'Decorators', 'Context managers', 'Testing', 'Docs'],
    concepts: ['Factory', 'Singleton', 'Observer', 'pytest', 'Architecture']
  },

  session4_1: {
  title: 'Session 4.1 - Data Structures Part 1',
  folder: 'Session4.1_PATELMeet',
  tree: (
    <>
      <span className={styles.folder}>📁 Session4.1_PATELMeet/</span>{'\n'}
      ├── <span className={styles.py}>🐍 main.py</span>{'\n'}
      ├── <span className={styles.doc}>📄 README.md</span>{'\n'}
      └── <span className={styles.doc}>📄 requirements.txt</span>
    </>
  ),
  focus: ['Lists', 'Tuples', 'Dictionaries'],
  concepts: ['Mutability', 'Complexity', 'Indexing']
  },

  session4_2: {
  title: 'Session 4.2 - Data Structures Part 2',
  folder: 'Session4.2_PATELMeet',
  tree: (
    <>
      <span className={styles.folder}>📁 Session4.2_PATELMeet/</span>{'\n'}
      ├── <span className={styles.py}>🐍 main.py</span>{'\n'}
      ├── <span className={styles.doc}>📄 README.md</span>{'\n'}
      ├── <span className={styles.doc}>📄 requirements.txt</span>{'\n'}
      ├── <span className={styles.folder}>📁 src/</span>{'\n'}
      │   ├── <span className={styles.py}>🐍 np_io.py</span>{'\n'}
      │   └── <span className={styles.py}>🐍 np_stats.py</span>{'\n'}
      ├── <span className={styles.folder}>📁 data/</span>{'\n'}
      │   ├── <span className={styles.data}>📊 measures_clean.csv</span>{'\n'}
      │   └── <span className={styles.data}>📊 measures_dirty.csv</span>{'\n'}
      └── <span className={styles.folder}>📁 out/</span>{'\n'}
          ├── <span className={styles.data}>📊 filtered_rows.csv</span>{'\n'}
          └── <span className={styles.data}>📊 correlation_matrix.csv</span>
    </>
  ),
  focus: ['Sets', 'Stacks', 'Queues'],
  concepts: ['Hashing', 'FIFO/LIFO', 'Efficiency']
  },

  session5_1: {
  title: 'Session 5.1 - Algorithms Basics',
  folder: 'Session5.1_PATELMeet',
  tree: (
    <>
      <span className={styles.folder}>📁 Session5.1_PATELMeet/</span>{'\n'}
      ├── <span className={styles.py}>🐍 main.py</span>{'\n'}
      ├── <span className={styles.doc}>📄 README.md</span>{'\n'}
      └── <span className={styles.doc}>📄 requirements.txt</span>
    </>
  ),
  focus: ['Sorting', 'Searching'],
  concepts: ['Time complexity', 'Big-O', 'Recursion']
  },


  session5_2: {
  title: 'Session 5.2 - Algorithms Advanced',
  folder: 'Session5.2_PATELMeet',
  tree: (
    <>
      <span className={styles.folder}>📁 Session5.2_PATELMeet/</span>{'\n'}
      ├── <span className={styles.py}>🐍 main.py</span>{'\n'}
      ├── <span className={styles.doc}>📄 README.md</span>{'\n'}
      └── <span className={styles.doc}>📄 requirements.txt</span>
    </>
  ),
  focus: ['Dynamic programming', 'Graphs'],
  concepts: ['Memoization', 'DFS/BFS']
  },
}

export default function SessionWindow({ sessionId, onClose }: SessionWindowProps) {
  const session = sessionData[sessionId]

  return (
    <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className={styles.window} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
        
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
              <div className={styles.treePanelHeader}>📁 Folder Structure</div>
              <pre className={styles.tree}>{session.tree}</pre>
            </div>

            <div className={styles.descriptionPanel}>
              <h1 className={styles.sessionTitle}>{session.title}</h1>

              <div className={styles.section}>
                <h2>🎯 Focus</h2>
                <ul>{session.focus.map((f: string, i: number) =><li key={i}>{f}</li>)}</ul>
              </div>

              <div className={styles.section}>
                <h2>💡 Key Concepts</h2>
                <ul>{session.concepts.map((c: string, i: number) =><li key={i}>{c}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          📁 AdvPyCourseHomeWork/{session.folder}/
        </div>
      </motion.div>
    </motion.div>
  )
}
