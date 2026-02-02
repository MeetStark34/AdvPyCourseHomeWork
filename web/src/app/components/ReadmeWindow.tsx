'use client'

import { motion } from 'framer-motion'
import styles from './ReadmeWindow.module.css'

export default function ReadmeWindow() {
  return (
    <motion.div
      className={styles.window}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.titleBar}>
        <div className={styles.windowButtons}>
          <div className={`${styles.button} ${styles.close}`} style={{ opacity: 0.3 }}></div>
          <div className={`${styles.button} ${styles.minimize}`}></div>
          <div className={`${styles.button} ${styles.maximize}`}></div>
        </div>
        <div className={styles.title}>README.md</div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>🚀 Advanced Python Course 🐍</h1>

        <p className={styles.paragraph}>
          Welcome to the Advanced Python Course coursework repository. This project gathers all coding sessions,
          practical work, and reference material in a clear, professional, and evaluation-ready structure.
        </p>

        <h2 className={styles.subheading}>🗂️ Repository Structure</h2>
        <pre className={styles.codeBlock}>
{`AdvPyCourseHomeWork/
├── docs/
├── web/
├── Session1_PATELMeet/
├── Session2_PATELMeet/
├── Session3_PATELMeet/
├── Session4.1_PATELMeet/
├── Session4.2_PATELMeet/
├── Session5.1_PATELMeet/
├── Session5.2_PATELMeet/
└── README.md`}
        </pre>

        <h2 className={styles.subheading}>📘 Coding Sessions Overview</h2>

        <div className={styles.detailsBlock}>

          <details className={styles.details}>
            <summary className={styles.summary}>🟢 <strong>Session 1 - CSV Sales Analysis (Procedural Python)</strong></summary>
            <div className={styles.sessionContent}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Focus</h3>
                <ul className={styles.sessionList}>
                  <li>Professional Python project setup</li>
                  <li>Virtual environments (venv)</li>
                  <li>Clean and maintainable folder structure</li>
                  <li>CSV data loading using the standard library</li>
                  <li>Handling dirty or invalid data defensively</li>
                  <li>KPI computation using pure functions</li>
                  <li>Command-line execution with arguments</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Key Concepts</h3>
                <ul className={styles.sessionList}>
                  <li>Separation of I/O and business logic</li>
                  <li>Reproducible environments</li>
                  <li>Robust data parsing</li>
                </ul>
              </div>
              <p className={styles.folderNote}>📁 Folder: Session1_PATELMeet/</p>
            </div>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>🔵 <strong>Session 2 - OOP SalesDataset (Object-Oriented Programming)</strong></summary>
            <div className={styles.sessionContent}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Focus</h3>
                <ul className={styles.sessionList}>
                  <li>Object-Oriented Programming fundamentals</li>
                  <li>Designing clean class-based APIs</li>
                  <li>Managing dataset state using attributes</li>
                  <li>Encapsulating logic inside methods</li>
                  <li>Refactoring procedural code into OOP</li>
                  <li>Full data lifecycle: load → compute → export</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Key Concepts</h3>
                <ul className={styles.sessionList}>
                  <li>Classes and objects</li>
                  <li>Attributes vs methods</li>
                  <li>Encapsulation</li>
                  <li>Defensive programming in OOP</li>
                </ul>
              </div>
              <p className={styles.folderNote}>📁 Folder: Session2_PATELMeet/</p>
            </div>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>🟣 <strong>Session 3 - Advanced OOP Data Pipeline (CSV & JSON)</strong></summary>
            <div className={styles.sessionContent}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Focus</h3>
                <ul className={styles.sessionList}>
                  <li>Advanced Object-Oriented Programming concepts</li>
                  <li>Inheritance and polymorphism</li>
                  <li>Interfaces using Abstract Base Classes (ABC)</li>
                  <li>Composition vs inheritance design decisions</li>
                  <li>Swappable data loaders (CSV and JSON)</li>
                  <li>Pythonic APIs using properties and dunder methods</li>
                  <li>Building flexible and extensible data pipelines</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Key Concepts</h3>
                <ul className={styles.sessionList}>
                  <li>Polymorphism and contracts</li>
                  <li>Separation of responsibilities</li>
                  <li>Domain modeling with dataclasses</li>
                  <li>Defensive programming with schema validation</li>
                </ul>
              </div>
              <p className={styles.folderNote}>📁 Folder: Session3_PATELMeet/</p>
            </div>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>🟠 <strong>Session 4.1 - NumPy Data Analysis</strong></summary>
            <div className={styles.sessionContent}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Focus</h3>
                <ul className={styles.sessionList}>
                  <li>Numerical computing with NumPy</li>
                  <li>Robust CSV loading with NaN handling</li>
                  <li>Vectorized statistical analysis</li>
                  <li>Data filtering and transformation</li>
                  <li>Correlation matrix computation</li>
                  <li>Exporting processed results</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Key Concepts</h3>
                <ul className={styles.sessionList}>
                  <li>NumPy arrays</li>
                  <li>Vectorized operations</li>
                  <li>Data cleaning</li>
                  <li>Scientific computing foundations</li>
                </ul>
              </div>
              <p className={styles.folderNote}>📁 Folder: Session4.1_PATELMeet/</p>
            </div>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>🟡 <strong>Session 4.2 - OOP Mini Exercises</strong></summary>
            <div className={styles.sessionContent}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Focus</h3>
                <ul className={styles.sessionList}>
                  <li>Class design fundamentals</li>
                  <li>Encapsulation and properties</li>
                  <li>State management through methods</li>
                  <li>Modeling real-world objects</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Key Concepts</h3>
                <ul className={styles.sessionList}>
                  <li>Classes and objects</li>
                  <li>Attributes and methods</li>
                  <li>Controlled data access</li>
                </ul>
              </div>
              <p className={styles.folderNote}>📁 Folder: Session4.2_PATELMeet/</p>
            </div>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>🔶 <strong>Session 5.1 - Deep Dive OOP</strong></summary>
            <div className={styles.sessionContent}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Focus</h3>
                <ul className={styles.sessionList}>
                  <li>Advanced class design</li>
                  <li>Composition between objects</li>
                  <li>Class variables and methods</li>
                  <li>State validation and defensive logic</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Key Concepts</h3>
                <ul className={styles.sessionList}>
                  <li>Encapsulation</li>
                  <li>Object relationships</li>
                  <li>Class-level behavior</li>
                </ul>
              </div>
              <p className={styles.folderNote}>📁 Folder: Session5.1_PATELMeet/</p>
            </div>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>🔴 <strong>Session 5.2 - Games & Minimax AI</strong></summary>
            <div className={styles.sessionContent}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Focus</h3>
                <ul className={styles.sessionList}>
                  <li>Game system design</li>
                  <li>Recursive Minimax algorithm</li>
                  <li>AI decision making</li>
                  <li>Game state trees and backtracking</li>
                  <li>Connect Four logic implementation</li>
                </ul>
              </div>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Key Concepts</h3>
                <ul className={styles.sessionList}>
                  <li>Recursion</li>
                  <li>Decision trees</li>
                  <li>Algorithmic thinking</li>
                  <li>Game AI foundations</li>
                </ul>
              </div>
              <p className={styles.folderNote}>📁 Folder: Session5.2_PATELMeet/</p>
            </div>
          </details>

        </div>

        <h2 className={styles.subheading}>🌐 Web Interface</h2>
        <p className={styles.paragraph}>
          A modern Next.js interface visually presents the coursework structure.
        </p>

        <h2 className={styles.subheading}>🛠️ Environment</h2>
        <ul className={styles.list}>
          <li>Python 3.10+</li>
          <li>Virtual environments per session</li>
          <li>NumPy in Session 4.1</li>
        </ul>

        <h2 className={styles.subheading}>👤 Author</h2>
        <p className={styles.paragraph}><strong>PATEL Meet</strong> — Advanced Python Course</p>
      </div>
    </motion.div>
  )
}