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
      .then(res => res.text()).then(setReadme);
  }, []);

  return (
    <main className="h-screen w-screen p-6 flex flex-col gap-6">
      <h1 className="text-center text-4xl font-black tracking-tighter typing-cursor h-10">
        {header}
      </h1>

      <div className="flex-1 flex flex-col md:flex-row gap-6 overflow-hidden">
        {/* LEFT 1/3 */}
        <div className="w-full md:w-1/3 flex flex-col">
          <Window title="File Explorer" className="h-full">
            <RepoTree />
          </Window>
        </div>

        {/* RIGHT 2/3 */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <nav className="flex gap-2">
            {['README', 'Session Work', 'PDFs'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveWindow(tab)}
                className={`px-4 py-1 text-[10px] font-bold rounded border transition-all ${
                  activeWindow === tab ? 'bg-[#238636] border-[#2ea043] text-white' : 'bg-[#21262d] border-[#30363d] text-[#8b949e]'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
          
          <div className="flex-1">
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
          </div>
        </div>
      </div>
    </main>
  );
}