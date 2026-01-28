'use client';
import { useState, useEffect } from 'react';
import Window from '@/components/Window';
import RepoTree from '@/components/RepoTree';
import { SessionWindow, PdfWindow } from '@/components/ContentViewers';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [activeWindow, setActiveWindow] = useState('README');
  const [headerText, setHeaderText] = useState('');

  useEffect(() => {
    const fullText = "Created By MStrak";
    let i = 0;
    const timer = setInterval(() => {
      setHeaderText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-[#0d1117] flex flex-col p-4 md:p-8 overflow-hidden">
      
      {/* Centered Title */}
      <header className="mb-6 shrink-0">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white font-mono tracking-tighter">
          {headerText}<span className="animate-pulse">|</span>
        </h1>
      </header>

      {/* Main Workspace: Side-by-Side on Desktop */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
        
        {/* LEFT: Repo Tree (1/3 width) */}
        <div className="w-full md:w-1/3 flex flex-col min-h-0">
          <Window title="Notepad.exe - Repository" className="h-full">
            <RepoTree />
          </Window>
        </div>

        {/* RIGHT: Active Content (2/3 width) */}
        <div className="w-full md:w-2/3 flex flex-col gap-4 min-h-0">
          
          {/* Navigation Bar */}
          <nav className="flex gap-2 shrink-0">
            {['README', 'Session Work', 'Session PDFs', 'TP'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveWindow(tab)}
                className={`px-3 py-1 text-[10px] font-bold rounded border transition-all ${
                  activeWindow === tab 
                  ? 'bg-[#238636] border-[#2ea043] text-white' 
                  : 'bg-[#21262d] border-[#30363d] text-[#8b949e] hover:border-[#8b949e]'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Dynamic Window Container */}
          <div className="flex-1 min-h-0">
            {activeWindow === 'README' && (
              <Window title="Preview - README.md" className="h-full">
                <article className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown>{`# Advanced Python Course\nWelcome to the coursework repo.`}</ReactMarkdown>
                </article>
              </Window>
            )}

            {activeWindow === 'Session Work' && (
              <Window title="Session Viewer" className="h-full">
                <div className="p-4 border border-dashed border-[#30363d] rounded text-center text-[#8b949e]">
                  Select a session from the tree to view details.
                </div>
              </Window>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}