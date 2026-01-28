'use client';
import { useState, useEffect } from 'react';
import Window from '@/components/Window';
import RepoTree from '@/components/RepoTree';
import { SessionWindow, PdfWindow } from '@/components/ContentViewers';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [activeWindow, setActiveWindow] = useState('README');
  const [headerText, setHeaderText] = useState('');
  const [readmeContent, setReadmeContent] = useState('## Loading Coursework Metadata...');

  // 1. Typing Effect Logic
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

  // 2. Fetch README Logic
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/MeetStark34/AdvPyCourseHomeWork/main/README.md')
      .then(res => res.text())
      .then(data => setReadmeContent(data))
      .catch(() => setReadmeContent('Failed to load README. Visit GitHub.'));
  }, []);

  const sessionData = {
    title: "Session 1 – CSV Sales Analysis (Procedural Python)",
    focus: ["Virtual environments", "CSV parsing", "KPI calculations", "Clean structure"],
    concepts: ["Separation of logic", "Defensive data handling", "CLI execution"]
  };

  return (
    <div className="min-h-screen p-4 md:p-12 flex flex-col gap-8">
      {/* Dynamic Header */}
      <header className="text-center py-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter typing-cursor">
          {headerText}
        </h1>
      </header>

      {/* Main OS Layout */}
      <div className="flex flex-col md:flex-row gap-6 max-w-[1400px] mx-auto w-full h-auto md:h-[750px]">
        
        {/* LEFT PANEL (1/3) - Notepad Style */}
        <div className="w-full md:w-1/3 h-[500px] md:h-full">
          <Window title="Notepad.exe - Repository" className="h-full border-dashed">
            <RepoTree />
          </Window>
        </div>

        {/* RIGHT PANEL (2/3) - Dynamic Content */}
        <div className="w-full md:w-2/3 flex flex-col gap-4 h-full">
          {/* Breadcrumbs / Nav */}
          <nav className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {['README', 'Session Work', 'Session PDFs', 'Travaux Pratiques'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveWindow(tab)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold border transition-all whitespace-nowrap ${
                  activeWindow === tab 
                  ? 'bg-[var(--accent)] border-[var(--accent)] text-white' 
                  : 'bg-white/5 border-[var(--border)] hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Active Window Content */}
          <div className="flex-1 min-h-[500px]">
            {activeWindow === 'README' && (
              <Window title="Preview - README.md" footer="Source: GitHub Main Branch">
                <article className="prose prose-invert prose-sm max-w-none prose-headings:text-[var(--accent)]">
                  <ReactMarkdown>{readmeContent}</ReactMarkdown>
                </article>
              </Window>
            )}

            {activeWindow === 'Session Work' && (
              <Window 
                title="Python Workspace - Session 1" 
                footer={<span><a href="#" className="hover:underline">Open in GitHub</a></span>}
              >
                <SessionWindow data={sessionData} />
              </Window>
            )}

            {activeWindow === 'Session PDFs' && (
              <Window title="Finder - Session View" footer="Format: 16:9 Aspect Preview">
                <PdfWindow url="https://raw.githubusercontent.com/MeetStark34/AdvPyCourseHomeWork/main/docs/sample.pdf" />
              </Window>
            )}

            {activeWindow === 'Travaux Pratiques' && (
              <Window title="Finder - TP View" footer="Format: A4 Standard Preview">
                <PdfWindow url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" ratio="aspect-[1/1.414]" />
              </Window>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}