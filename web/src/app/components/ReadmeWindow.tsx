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
          <div className={`${styles.button} ${styles.close}`} style={{ opacity: 0.3, cursor: 'not-allowed' }}></div>
          <div className={`${styles.button} ${styles.minimize}`}></div>
          <div className={`${styles.button} ${styles.maximize}`}></div>
        </div>
        <div className={styles.title}>README.md</div>
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.heading}>Advanced Python Course - Homework Repository</h1>
        
        <p className={styles.paragraph}>
          This repository contains coursework and practical exercises from the Advanced Python Programming course. 
          Each session focuses on different aspects of professional Python development, from procedural programming 
          to object-oriented design patterns.
        </p>

        <h2 className={styles.subheading}>📚 Course Structure</h2>
        
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Session 1 - CSV Sales Analysis (Procedural Python)</h3>
          <p className={styles.paragraph}>
            Introduction to professional Python project setup, virtual environments, and defensive CSV parsing. 
            Focus on clean code architecture and reproducible workflows.
          </p>
          <ul className={styles.list}>
            <li>Project structure best practices</li>
            <li>Virtual environment management</li>
            <li>Robust data parsing techniques</li>
            <li>KPI computation and analysis</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Session 2 - Object-Oriented Programming</h3>
          <p className={styles.paragraph}>
            Deep dive into OOP principles, class design, inheritance, and polymorphism. 
            Learn to structure complex applications using object-oriented paradigms.
          </p>
          <ul className={styles.list}>
            <li>Class design and encapsulation</li>
            <li>Inheritance and composition</li>
            <li>Magic methods and protocols</li>
            <li>Design patterns introduction</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Session 3 - Advanced Patterns</h3>
          <p className={styles.paragraph}>
            Advanced programming patterns, decorators, context managers, and testing strategies. 
            Build production-ready, maintainable Python applications.
          </p>
          <ul className={styles.list}>
            <li>Decorator patterns</li>
            <li>Context managers</li>
            <li>Unit testing with pytest</li>
            <li>Code quality and documentation</li>
          </ul>
        </div>

        <h2 className={styles.subheading}>🎯 Learning Objectives</h2>
        
        <p className={styles.paragraph}>
          By the end of this course, students will be able to:
        </p>
        
        <ul className={styles.list}>
          <li>Design and implement professional Python projects with proper structure</li>
          <li>Apply object-oriented programming principles effectively</li>
          <li>Write clean, maintainable, and well-tested code</li>
          <li>Use advanced Python features and design patterns</li>
          <li>Follow industry best practices for Python development</li>
        </ul>

        <h2 className={styles.subheading}>🛠️ Tools & Technologies</h2>
        
        <div className={styles.techGrid}>
          <div className={styles.techItem}>
            <span className={styles.techIcon}>🐍</span>
            <span>Python 3.10+</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techIcon}>📦</span>
            <span>Virtual Environments</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techIcon}>🧪</span>
            <span>pytest</span>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techIcon}>📊</span>
            <span>Data Analysis</span>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Created by <strong>MStrak</strong> | Advanced Python Course | {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </motion.div>
  )
}