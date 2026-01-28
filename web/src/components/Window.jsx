'use client';
import { motion } from 'framer-motion';

export default function Window({ title, children, footer, className = "" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex flex-col border border-[#30363d] bg-[#161b22] rounded-lg shadow-2xl overflow-hidden ${className}`}
    >
      {/* Header Bar - Forced macOS Style */}
      <div className="flex items-center px-3 py-2 bg-[#21262d] border-b border-[#30363d]">
        <div className="flex gap-1.5 w-20">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] font-mono text-[#8b949e] uppercase tracking-widest leading-none">
            {title}
          </span>
        </div>
        <div className="w-20" /> 
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar text-[#e6edf3]">
        {children}
      </div>

      {/* Optional Footer */}
      {footer && (
        <div className="px-3 py-1.5 bg-[#0d1117] border-t border-[#30363d] text-[9px] text-[#484f58] font-mono">
          {footer}
        </div>
      )}
    </motion.div>
  );
}