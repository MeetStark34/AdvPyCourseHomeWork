export default function RepoTree() {
  const items = [
    { name: 'docs', type: 'folder', color: 'text-yellow-500' },
    { name: 'Session1_PATELMeet', type: 'folder', color: 'text-yellow-500' },
    { name: 'Session2_PATELMeet', type: 'folder', color: 'text-yellow-500' },
    { name: 'Session3_PATELMeet', type: 'folder', color: 'text-yellow-500' },
    { name: 'web', type: 'folder', color: 'text-yellow-500' },
    { name: 'README.md', type: 'md', color: 'text-blue-400' },
  ];

  return (
    <div className="font-mono text-sm space-y-1">
      <div className="text-[#58a6ff] font-bold mb-2">📁 AdvPyCourseHomeWork</div>
      {items.map(item => (
        <div key={item.name} className="flex items-center gap-2 hover:bg-white/5 p-1 rounded cursor-pointer">
          <span className={item.color}>{item.type === 'folder' ? '📂' : '📄'}</span>
          <span>{item.name}</span>
        </div>
      ))}
      <div className="mt-10 pt-4 border-t border-[#30363d]">
        <div className="text-[10px] uppercase opacity-40 mb-2">Legend</div>
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <span className="text-yellow-500">🟡 Folder</span>
          <span className="text-blue-400">🔵 Markdown</span>
        </div>
      </div>
    </div>
  );
}