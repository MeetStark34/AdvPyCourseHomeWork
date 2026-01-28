'use client';
import { motion } from 'framer-motion';

export default function Window({ title, children, footer, className = "" }) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`flex flex-col border-[1px] border-[var(--border)] bg-[var(--window-surface)] rounded-lg shadow-2xl overflow-hidden h-full ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-opacity-50 bg-black/10 border-b border-[var(--border)]">
        <div className="flex gap-2 w-1/3">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-xs font-medium opacity-70 truncate w-1/3 text-center">{title}</div>
        <div className="w-1/3" />
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="px-4 py-2 border-t border-[var(--border)] text-xs opacity-60">
          {footer}
        </div>
      )}
    </motion.div>
  );
}