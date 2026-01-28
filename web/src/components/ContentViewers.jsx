'use client';
import ReactMarkdown from 'react-markdown';

export function SessionWindow({ data }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 h-full">
      <div className="w-full md:w-1/3 border-r border-[var(--border)] pr-4">
        <h4 className="text-xs font-bold opacity-40 mb-4 uppercase">Session Explorer</h4>
        <div className="space-y-2 font-mono text-xs">
          <div className="text-yellow-500">📁 src/</div>
          <div className="pl-4 text-green-500">📄 main.py</div>
          <div className="pl-4 text-green-500">📄 analysis.py</div>
          <div className="text-gray-400">📄 data.csv</div>
          <div className="text-gray-400">📄 requirements.txt</div>
        </div>
      </div>
      <div className="w-full md:w-2/3 prose prose-invert prose-blue max-w-none">
        <h2 className="!mt-0 text-[var(--accent)]">{data.title}</h2>
        <p className="text-sm"><strong>Focus:</strong> {data.focus.join(' • ')}</p>
        <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
          <h4 className="!m-0 text-blue-400 text-sm">Key Concepts</h4>
          <ul className="text-xs mt-2">
            {data.concepts.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function PdfWindow({ url, ratio = "aspect-video" }) {
  return (
    <div className={`w-full h-full min-h-[500px] ${ratio}`}>
      <iframe 
        src={url}
        className="w-full h-full rounded shadow-inner bg-white/5"
        title="PDF Preview"
      />
    </div>
  );
}