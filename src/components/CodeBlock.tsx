
// export default function CodeBlock({
//   title,
//   children,
// }: {
//   title: string;
//   children: string;
// }) {
//   return (
//     <div className="my-4 overflow-hidden rounded border border-slate-200">
//       <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-2">
//         <span className="text-[10px] font-medium text-slate-600">
//           {title}
//         </span>
//         <span className="text-[10px] text-indigo-600">Copy</span>
//       </div>

//       <pre className="overflow-x-auto bg-slate-900 p-4 text-xs leading-6 text-slate-100">
//         <code>{children}</code>
//       </pre>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

export default function CodeBlock({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="my-4 overflow-hidden rounded-md border border-slate-700">
      <div className="flex items-center justify-between gap-3 border-b border-slate-700 bg-slate-800 px-3 py-2">
        <span className="truncate text-xs text-slate-200">
          ▱ {title}
        </span>

        <button
          type="button"
          onClick={copyCode}
          className="shrink-0 text-xs text-slate-200 hover:text-white"
        >
          {copied ? "✓ Copied" : "▢ Copy"}
        </button>
      </div>

      <pre className="overflow-x-auto bg-slate-900 p-4 text-xs leading-6 text-slate-200">
        <code>{children}</code>
      </pre>
    </div>
  );
}
