
// import Link from "next/link";

// export default function Sidebar() {

//   return (
//     <aside className="hidden min-h-[calc(100vh-48px)] w-52 shrink-0 border-r border-slate-200 bg-slate-50 p-3 md:block">
//       <h2 className="font-bold text-slate-800">
//         Core Documentation
//       </h2>
//       <p className="mb-5 mt-1 text-[10px] text-slate-800">
//         v1.0 Architecture Guide
//       </p>

//       <p className="mb-1 text-[13px] font-semibold tracking-widest text-slate-400">
//         GETTING STARTED
//       </p>
//       <Link href="/docs" className="block rounded px-2 py-1.5 text-[14px] text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">↳ Introduction</Link>
//       <Link href="/docs" className="block rounded px-2 py-1.5 text-[14px] text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">♧ Installation</Link>
//       <Link href="/docs" className="block rounded px-2 py-1.5 text-[14px] text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">▱ Project Setup</Link>

//       <p className="mb-1 mt-5 text-[13px] font-semibold tracking-widest text-slate-400">
//         CORE CONCEPTS
//       </p>
//       <Link href="/docs/routing" className="block rounded px-2 py-1.5 text-[14px] text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">⚒ Routing</Link>
//       <Link href="/docs/routing#route-groups" className="block rounded px-2 py-1.5 text-[14px] text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">▤ Layouts</Link>
//       <Link href="/docs/routing" className="block rounded px-2 py-1.5 text-[14px] text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">♧ Data Fetching</Link>

//       <p className="mb-1 mt-5 text-[13px] font-semibold tracking-widest text-slate-400">
//         REFERENCE
//       </p>
//       <Link href="/docs" className="block rounded px-2 py-1.5 text-[14px] text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">⚙ Configuration</Link>
//       <Link href="/docs" className="block rounded px-2 py-1.5 text-[14px] text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">▣ CLI Commands</Link>

//       <div className="mt-12 border-t border-slate-200 pt-3">
//         <a href="https://github.com" className="block rounded px-2 py-1.5 text-[14px] text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">⌘ GitHub Repo</a>
//         <Link href="/docs" className="block rounded px-2 py-1.5 text-[14px] text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">♧ API Reference</Link>
//       </div>
//     </aside>
//   );
// }



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkStyle =
    "flex items-center gap-2 rounded px-3 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-700";

  const activeStyle =
    "flex items-center gap-2 rounded border-l-2 border-indigo-600 bg-indigo-100 px-3 py-2 text-sm font-medium text-indigo-700";

  const subLinkStyle =
    "block px-2 py-1.5 text-xs text-slate-500 hover:text-indigo-700";

  const activeSubLinkStyle =
    "block px-2 py-1.5 text-xs font-medium text-indigo-700";

  const isRoutingPage =
    pathname === "/docs/routing" ||
    pathname.startsWith("/guides/");

  return (
    <aside className="sticky top-13.5 hidden h-[calc(100vh-54px)] w-64 shrink-0 flex-col border-r border-slate-200 bg-[#f8f9ff] p-4 md:flex">
      {/* Sidebar heading */}
      <div>
        <h2 className="font-semibold text-slate-900">
          Core Documentation
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          v1.0 Architecture Guide
        </p>
      </div>

      <div className="mt-7">
        <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.15em] text-slate-500">
          GETTING STARTED
        </p>

        <Link
          href="/docs"
          className={
            pathname === "/docs"
              ? activeStyle
              : linkStyle
          }
        >
          <span>↳</span>
          Introduction
        </Link>

        <Link href="/docs" className={linkStyle}>
          <span>↓</span>
          Installation
        </Link>

        <Link href="/docs" className={linkStyle}>
          <span>▱</span>
          Project Setup
        </Link>
      </div>

      {/* Core Concepts */}
      <div className="mt-7">
        <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.15em] text-slate-500">
          CORE CONCEPTS
        </p>

        <Link
          href="/docs/routing"
          className={
            isRoutingPage
              ? activeStyle
              : linkStyle
          }
        >
          <span>⚒</span>
          Routing
        </Link>

        {isRoutingPage && (
          <div className="ml-4 border-l border-slate-300 pl-2">
            <Link
              href="/docs/routing"
              className={subLinkStyle}
            >
              Defining Routes
            </Link>

            <Link
              href="/guides/dynamic-routes"
              className={
                pathname === "/guides/dynamic-routes"
                  ? activeSubLinkStyle
                  : subLinkStyle
              }
            >
              Dynamic Routes
            </Link>

            <Link
              href="/docs/routing#route-groups"
              className={subLinkStyle}
            >
              Parallel & Intercepting
            </Link>
          </div>
        )}

        <Link
          href="/docs/routing#route-groups"
          className={linkStyle}
        >
          <span>▤</span>
          Layouts
        </Link>

        <Link
          href="/docs/routing"
          className={linkStyle}
        >
          <span>♧</span>
          Data Fetching
        </Link>
      </div>

      <div className="mt-7">
        <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.15em] text-slate-500">
          REFERENCE
        </p>

        <Link href="/docs" className={linkStyle}>
          <span>⚙</span>
          Configuration
        </Link>

        <Link href="/docs" className={linkStyle}>
          <span>▣</span>
          CLI Commands
        </Link>
      </div>

      <div className="mt-auto border-t border-slate-200 pt-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className={linkStyle}
        >
          <span>⌘</span>
          GitHub Repo
        </a>

        <Link href="/docs" className={linkStyle}>
          <span>▤</span>
          API Reference
        </Link>
      </div>
    </aside>
  );
}
