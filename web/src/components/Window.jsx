'use client';
import { motion } from 'framer-motion';

export default function Window({ title, children, footer, className = "" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex flex-col border border-[#30363d] bg-[#161b22] rounded-xl shadow-2xl overflow-hidden ${className}`}
    >
      <div className="flex items-center px-4 py-3 bg-[#0d1117] border-b border-[#30363d]">
        <div className="flex gap-2 w-20">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center text-[10px] font-mono text-[#8b949e] uppercase tracking-widest">
          {title}
        </div>
        <div className="w-20" />
      </div>
      <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
        {children}
      </div>
      {footer && (
        <div className="px-4 py-2 bg-[#0d1117] border-t border-[#30363d] text-[10px] text-[#484f58]">
          {footer}
        </div>
      )}
    </motion.div>
  );
}