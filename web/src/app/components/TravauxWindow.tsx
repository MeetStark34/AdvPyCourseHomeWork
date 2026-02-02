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
    { title: 'Travaux Pratiques 1', file: '/pdfs/Travaux Pratiques 1.pdf' },
    { title: 'Travaux Pratiques 2', file: '/pdfs/Travaux Pratiques 2.pdf' },
    { title: 'Travaux Pratiques 3', file: '/pdfs/Travaux Pratiques 3.pdf' },
    { title: 'Travaux Pratiques 4 - Part 1', file: '/pdfs/Travaux Pratiques 4 Part 1.pdf' },
    { title: 'Travaux Pratiques 4 - Part 2', file: '/pdfs/Travaux Pratiques 4 Part 2.pdf' },
    { title: 'Travaux Pratiques 5 - Part 1', file: '/pdfs/Travaux Pratiques 5 Part 1.pdf' },
    { title: 'Travaux Pratiques 5 - Part 2', file: '/pdfs/Travaux Pratiques 5 Part 2.pdf' },
  ]

  const activePDF = pdfs.find(p => p.file === selectedPDF)

  return (
    <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className={styles.window} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
        
        <div className={styles.titleBar}>
          <div className={styles.windowButtons}>
            <div className={`${styles.button} ${styles.close}`} onClick={onClose}></div>
            <div className={`${styles.button} ${styles.minimize}`}></div>
            <div className={`${styles.button} ${styles.maximize}`}></div>
          </div>
          <div className={styles.title}>Travaux Pratiques</div>

          {activePDF && (
            <a href={activePDF.file} download className={styles.downloadButton}>⬇️</a>
          )}
        </div>

        <div className={styles.content}>
          <AnimatePresence mode="wait">
            {!selectedPDF ? (
              <motion.div key="grid" className={styles.pdfGrid} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {pdfs.map((pdf, index) => (
                  <motion.div
                    key={pdf.file}
                    className={styles.pdfCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedPDF(pdf.file)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={styles.pdfIcon}>📄</div>
                    <div className={styles.pdfTitle}>{pdf.title}</div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div key="preview" className={styles.pdfPreview} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <button className={styles.backButton} onClick={() => setSelectedPDF(null)}>← Back to Grid</button>

                <div className={styles.previewContainer}>
                  <iframe
                  src={selectedPDF}
                  className={styles.pdfFrame}
                  title="Travaux PDF Viewer"
                />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.footer}>
          <span className={styles.footerPath}>📁 public/pdfs/travaux/</span>
          <a href="https://github.com/MeetStark34/AdvPyCourseHomeWork" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            View on GitHub →
          </a>
        </div>

      </motion.div>
    </motion.div>
  )
}
