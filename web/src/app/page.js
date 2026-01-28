'use client';
import { useState, useEffect } from 'react';
import Window from '@/components/Window';
import RepoTree from '@/components/RepoTree';
import { SessionWindow, PdfWindow } from '@/components/ContentViewers';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [activeWindow, setActiveWindow] = useState('README');
  const [header, setHeader] = useState('');
  const [readme, setReadme] = useState('Loading...');

  useEffect(() => {
    const text = "Created By MStrak";
    let i = 0;
    const interval = setInterval(() => {
      setHeader(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/MeetStark34/AdvPyCourseHomeWork/main/README.md')
      .then(res => res.text())
      .then(setReadme)
      .catch(() => setReadme("Failed to load README."));
  }, []);

  return (
    <main className="h-screen w-screen p-6 flex flex-col gap-6 bg-[#0f1117] text-white overflow-hidden">
      {/* Typed Header */}
      <h1 className="text-center text-4xl font-black tracking-tighter typing-cursor h-10 shrink-0">
        {header}
      </h1>

      {/* Main OS Container */}
      <div className="flex-1 flex flex-row gap-6 w-full h-full min-h-0">
        
        {/* LEFT 1/3 - Repository Explorer */}
        <aside className="w-1/3 flex flex-col min-h-0">
          <Window title="File Explorer" className="h-full">
            <RepoTree />
          </Window>
        </aside>

        {/* RIGHT 2/3 - Content & Navigation */}
        <div className="w-2/3 flex flex-col gap-4 min-h-0">
          <nav className="flex gap-2 shrink-0">
            {['README', 'Session Work', 'PDFs'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveWindow(tab)}
                className={`px-4 py-1 text-[10px] font-bold rounded border transition-all ${
                  activeWindow === tab 
                  ? 'bg-[#238636] border-[#2ea043] text-white shadow-[0_0_10px_rgba(35,134,54,0.3)]' 
                  : 'bg-[#21262d] border-[#30363d] text-[#8b949e] hover:border-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
          
          <div className="flex-1 min-h-0">
            {activeWindow === 'README' && (
              <Window title="README.md" className="h-full">
                <article className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown>{readme}</ReactMarkdown>
                </article>
              </Window>
            )}

            {activeWindow === 'Session Work' && (
              <Window title="Workspace" className="h-full">
                <SessionWindow data={{title: "Session 1", focus: ["Python"], concepts: ["Variables"]}} />
              </Window>
            )}

            {activeWindow === 'PDFs' && (
              <Window title="PDF Viewer" className="h-full">
                <div className="flex flex-col items-center justify-center h-full text-gray-500 font-mono text-xs">
                  <p>Select a PDF from the File Explorer to view.</p>
                </div>
              </Window>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}