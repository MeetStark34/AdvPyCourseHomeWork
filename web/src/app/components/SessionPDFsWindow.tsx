'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './SessionPDFsWindow.module.css'

interface SessionPDFsWindowProps {
  onClose: () => void
}

export default function SessionPDFsWindow({ onClose }: SessionPDFsWindowProps) {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null)

  const pdfs = [
    { id: 1, title: 'Session 1 - Introduction', slides: 24 },
    { id: 2, title: 'Session 2 - OOP Fundamentals', slides: 32 },
    { id: 3, title: 'Session 3 - Advanced Patterns', slides: 28 },
    { id: 4, title: 'Session 4 - Data Structures', slides: 35 },
    { id: 5, title: 'Session 5 - Algorithms', slides: 40 },
    { id: 6, title: 'Session 6 - Final Review', slides: 20 },
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
          <div className={styles.title}>Session PDFs</div>
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
                    <div className={styles.pdfIcon}>📑</div>
                    <div className={styles.pdfInfo}>
                      <div className={styles.pdfTitle}>{pdf.title}</div>
                      <div className={styles.pdfMeta}>{pdf.slides} slides</div>
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
                  <div className={styles.slidePlaceholder}>
                    <div className={styles.slideContent}>
                      <h2>{selectedPDF}</h2>
                      <p>PDF Preview</p>
                      <div className={styles.slideNote}>
                        Maintaining presentation aspect ratio
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
            📁 AdvPyCourseHomeWork/Session PDFs/
          </span>
          <a 
            href="https://github.com/yourusername/AdvPyCourseHomeWork/tree/main/Session%20PDFs"
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