export function SessionWindow({ data }) {
  return (
    <div className="prose prose-invert prose-sm max-w-none">
      <h2 className="text-[#58a6ff]">{data.title}</h2>
      <p><strong>Focus:</strong> {data.focus.join(' • ')}</p>
      <div className="bg-black/20 p-4 border border-[#30363d] rounded-lg">
        <h4 className="text-white">Key Concepts</h4>
        <ul>{data.concepts.map(c => <li key={c}>{c}</li>)}</ul>
      </div>
    </div>
  );
}

export function PdfWindow({ url }) {
  return (
    <iframe src={url} className="w-full h-[500px] rounded border border-[#30363d]" />
  );
}