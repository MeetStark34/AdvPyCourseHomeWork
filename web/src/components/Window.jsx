'use client';
import { motion } from 'framer-motion';

export default function Window({ title, children, footer, className = "" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col border border-[#30363d] bg-[#161b22] rounded-lg shadow-2xl overflow-hidden ${className}`}
    >
      {/* macOS Style Header */}
      <div className="flex items-center px-4 py-3 bg-[#0d1117] border-b border-[#30363d] select-none">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-inner" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-inner" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8b949e]">
            {title}
          </span>
        </div>
        <div className="w-12" /> {/* Spacer to keep title centered */}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar min-h-0 text-[#e6edf3]">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="px-4 py-2 bg-[#0d1117] border-t border-[#30363d] text-[10px] text-[#8b949e] font-mono italic">
          {footer}
        </div>
      )}
    </motion.div>
  );
}