'use client'

import { motion } from 'framer-motion'
import styles from './NotepadWindow.module.css'

export default function NotepadWindow() {
  return (
    <motion.div
      className={styles.window}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1, duration: 0.4 }}
    >
      <div className={styles.titleBar}>
        <div className={styles.windowButtons}>
          <div className={`${styles.button} ${styles.close}`}></div>
          <div className={`${styles.button} ${styles.minimize}`}></div>
          <div className={`${styles.button} ${styles.maximize}`}></div>
        </div>
        <div className={styles.title}>Repository Structure</div>
      </div>
      
      <div className={styles.content}>
        <pre className={styles.tree}>
{`AdvPyCourseHomeWork/
├── 📁 docs/
├── 📁 web/
├── 📁 Session1_PATELMeet/
│   ├── 🐍 main.py
│   ├── 🐍 analysis.py
│   ├── 📄 README.md
│   └── 📊 data.csv
├── 📁 Session2_PATELMeet/
│   ├── 🐍 oop_basics.py
│   ├── 🐍 classes.py
│   ├── 📄 README.md
│   └── 📊 sample.json
├── 📁 Session3_PATELMeet/
│   ├── 🐍 advanced.py
│   ├── 🐍 patterns.py
│   ├── 📄 README.md
│   └── 🧪 tests/
├── 📁 Session PDFs/
│   └── 📑 Lecture slides
├── 📁 Travaux_Pratiques/
│   └── 📑 Exercise PDFs
└── 📄 README.md`}
        </pre>
        
        <div className={styles.legend}>
          <div className={styles.legendTitle}>Legend:</div>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: '#fbbf24' }}></span>
            <span>Folders & Directories</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: '#34d399' }}></span>
            <span>Python Files (.py)</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: '#60a5fa' }}></span>
            <span>Documentation (.md)</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: '#f472b6' }}></span>
            <span>Data Files (.csv, .json)</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: '#a78bfa' }}></span>
            <span>PDF Documents</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}