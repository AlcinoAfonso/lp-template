import { useState } from 'react';
export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map(([q,a], i) => (
        <div key={i} className="border border-gray-200 rounded-[16px] bg-white">
          <button className="w-full flex justify-between items-center px-4 py-3 font-inter font-semibold bg-brand/10 hover:bg-brand/20 transition-all" onClick={() => setOpen(open === i ? null : i)}>
            {q}<span className={`${open===i?'rotate-90':''}`}>▸</span>
          </button>
          {open===i && <div className="px-4 pb-4 text-base font-normal leading-[1.5] tracking-normal font-inter">{a}</div>}
        </div>
      ))}
    </div>
  );
}
