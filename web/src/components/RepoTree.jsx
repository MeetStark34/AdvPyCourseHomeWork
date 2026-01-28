const RepoItem = ({ name, type }) => {
  const icons = {
    folder: { char: '📁', color: 'text-yellow-500' },
    py: { char: '🐍', color: 'text-green-500' },
    md: { char: '📝', color: 'text-blue-400' },
    pdf: { char: '📕', color: 'text-red-500' }
  };
  
  const style = icons[type] || { char: '📄', color: 'text-gray-400' };

  return (
    <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-white/5 rounded cursor-pointer transition-colors font-mono text-sm">
      <span className={style.color}>{style.char}</span>
      <span>{name}</span>
    </div>
  );
};

export default function RepoTree() {
  const structure = [
    { name: 'docs', type: 'folder' },
    { name: 'Session1_PATELMeet', type: 'folder' },
    { name: 'Session2_PATELMeet', type: 'folder' },
    { name: 'Session3_PATELMeet', type: 'folder' },
    { name: 'web', type: 'folder' },
    { name: 'README.md', type: 'md' },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <div className="text-[var(--accent)] font-bold mb-4 flex items-center gap-2">
          <span>📂</span> AdvPyCourseHomeWork
        </div>
        {structure.map(item => <RepoItem key={item.name} {...item} />)}
      </div>

      <div className="mt-6 pt-4 border-t border-[var(--border)] bg-black/10 p-3 rounded-lg">
        <p className="text-[10px] font-bold opacity-40 mb-2 tracking-tighter uppercase">System Legend</p>
        <div className="grid grid-cols-2 gap-y-1 text-[11px]">
          <span className="text-yellow-500">🟡 Folder</span>
          <span className="text-green-500">🟢 Python</span>
          <span className="text-blue-400">🔵 Markdown</span>
          <span className="text-red-500">🔴 PDF</span>
        </div>
      </div>
    </div>
  );
}