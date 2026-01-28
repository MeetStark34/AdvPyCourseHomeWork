'use client';
import { motion } from 'framer-motion';

export default function Window({ title, children, footer, className = "" }) {
  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex flex-col border border-[var(--border)] bg-[var(--window-surface)] rounded-xl shadow-2xl overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-black/20 border-b border-[var(--border)]">
        <div className="flex gap-2 w-1/3">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[11px] font-semibold uppercase tracking-widest opacity-60 w-1/3 text-center truncate">
          {title}
        </div>
        <div className="w-1/3" />
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="px-4 py-2 bg-black/10 border-t border-[var(--border)] text-[10px] opacity-50 flex justify-between">
          {footer}
        </div>
      )}
    </motion.div>
  );
}