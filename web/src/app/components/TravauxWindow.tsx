'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './TravauxWindow.module.css'

interface TravauxWindowProps {
  onClose: () => void
}

export default function TravauxWindow({ onClose }: TravauxWindowProps) {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null)

  const pdfs = [
    { id: 1, title: 'TP1 - CSV Analysis', pages: 4 },
    { id: 2, title: 'TP2 - OOP Exercises', pages: 6 },
    { id: 3, title: 'TP3 - Design Patterns', pages: 5 },
    { id: 4, title: 'TP4 - Data Processing', pages: 7 },
    { id: 5, title: 'TP5 - Final Project', pages: 8 },
  ]

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
          <div className={styles.title}>Travaux_Pratiques</div>
          <div className={styles.downloadButton}>
            <span>⬇️</span>
          </div>
        </div>

        <div className={styles.content}>
          <AnimatePresence mode="wait">
            {!selectedPDF ? (
              <motion.div
                key="grid"
                className={styles.pdfGrid}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {pdfs.map((pdf, index) => (
                  <motion.div
                    key={pdf.id}
                    className={styles.pdfCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedPDF(pdf.title)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={styles.pdfIcon}>📚</div>
                    <div className={styles.pdfInfo}>
                      <div className={styles.pdfTitle}>{pdf.title}</div>
                      <div className={styles.pdfMeta}>{pdf.pages} pages · A4</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="preview"
                className={styles.pdfPreview}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  className={styles.backButton}
                  onClick={() => setSelectedPDF(null)}
                >
                  ← Back to Grid
                </button>
                <div className={styles.previewContainer}>
                  <div className={styles.documentPlaceholder}>
                    <div className={styles.documentContent}>
                      <h2>{selectedPDF}</h2>
                      <p>A4 Document Preview</p>
                      <div className={styles.documentNote}>
                        Optimized for A4 paper format
                      </div>
                      <div className={styles.documentBody}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.footer}>
          <span className={styles.footerPath}>
            📁 AdvPyCourseHomeWork/Travaux_Pratiques/
          </span>
          <a 
            href="https://github.com/yourusername/AdvPyCourseHomeWork/tree/main/Travaux_Pratiques"
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