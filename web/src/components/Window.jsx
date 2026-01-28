export default function Window({ title, children, footer, className = "" }) {
  return (
    <div className={`flex flex-col border border-border bg-window/80 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}>
      {/* macOS Header */}
      <div className="flex items-center px-4 py-3 bg-black/40 border-b border-border">
         <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
         </div>
         <span className="flex-1 text-center text-[10px] uppercase tracking-tighter opacity-50 font-mono">{title}</span>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
}