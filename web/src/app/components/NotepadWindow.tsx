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
<span className={styles.folder}>📁 AdvPyCourseHomeWork/</span>{'\n'}
├── <span className={styles.folder}>📁 docs/</span>{'\n'}
│   ├── <span className={styles.pdf}>📑 Sessions_PDFs/</span>{'\n'}
│   ├── <span className={styles.pdf}>📑 Travaux_Pratiques/</span>{'\n'}
│   └── <span className={styles.doc}>📄 README.md</span>{'\n'}
├── <span className={styles.folder}>📁 web/</span>{'\n'}
│   ├── <span className={styles.folder}>📁 app/</span>{'\n'}
│   ├── <span className={styles.folder}>📁 components/</span>{'\n'}
│   ├── <span className={styles.folder}>📁 public/</span>{'\n'}
│   ├── <span className={styles.config}>📦 package.json</span>{'\n'}
│   └── <span className={styles.doc}>📄 README.md</span>{'\n'}
├── <span className={styles.folder}>📁 Session1_PATELMeet/</span>{'\n'}
├── <span className={styles.folder}>📁 Session2_PATELMeet/</span>{'\n'}
├── <span className={styles.folder}>📁 Session3_PATELMeet/</span>{'\n'}
├── <span className={styles.folder}>📁 Session4.1_PATELMeet/</span>{'\n'}
├── <span className={styles.folder}>📁 Session4.2_PATELMeet/</span>{'\n'}
├── <span className={styles.folder}>📁 Session5.1_PATELMeet/</span>{'\n'}
├── <span className={styles.folder}>📁 Session5.2_PATELMeet/</span>{'\n'}
├── <span className={styles.folder}>📁 Session5.1_PATELMeet/</span>{'\n'}
├── <span className={styles.folder}>📁 Session5.3_PATELMeet/</span>{'\n'}
├── <span className={styles.folder}>📁 Session6.1_PATELMeet/</span>{'\n'}
├── <span className={styles.folder}>📁 Session6.2_PATELMeet/</span>{'\n'}
├── <span className={styles.script}>⚙️ synclocal.sh</span>{'\n'}
├── <span className={styles.script}>⚙️ syncweb.sh</span>{'\n'}
└── <span className={styles.doc}>📄 README.md</span>
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

          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: '#22c55e' }}></span>
            <span>Shell Scripts (.sh)</span>
          </div>

          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: '#fb923c' }}></span>
            <span>Config Files (.json)</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
