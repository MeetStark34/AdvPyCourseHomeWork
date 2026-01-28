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
    // Force the background to the deep dark color and prevent scrolling the whole page
    <div className="h-screen w-screen bg-[#0f1117] p-4 md:p-10 flex flex-col gap-6 overflow-hidden">
      
      <header className="text-center shrink-0">
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white typing-cursor">
          {headerText}
        </h1>
      </header>

      {/* Layout Split: 1/3 and 2/3 */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
        
        {/* Left Side: Repository Tree */}
        <aside className="w-full md:w-1/3 flex flex-col min-h-0">
          <Window title="File Explorer" className="flex-1">
            <RepoTree />
          </Window>
        </aside>

        {/* Right Side: Navigation & Content */}
        <main className="w-full md:w-2/3 flex flex-col gap-4 min-h-0">
          <nav className="flex gap-2 shrink-0">
            {['README', 'Session Work', 'Session PDFs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveWindow(tab)}
                className={`px-4 py-1 rounded text-[10px] font-bold border transition-all ${
                  activeWindow === tab 
                  ? 'bg-[#58a6ff] border-[#58a6ff] text-white shadow-[0_0_15px_rgba(88,166,255,0.3)]' 
                  : 'bg-[#161b22] border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]'
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
                  <ReactMarkdown>{`# Advanced Python Course 🐍\nWelcome to the coursework...`}</ReactMarkdown>
                </article>
              </Window>
            )}
            
            {/* ... other windows ... */}
          </div>
        </main>
      </div>
    </div>
  );
}