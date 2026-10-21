
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-12 max-w-350 items-center gap-6 px-4">
        <Link href="/docs" className="font-bold text-slate-900"> Orbit Docs </Link>

        <div className="flex h-full items-center gap-5 text-slate-600">
          <Link href="/docs" className="py-4 hover:text-indigo-600">
            Documentation
          </Link>
          <Link href="/guides/dynamic-routes" className="hover:text-indigo-600">
            Guides
          </Link>
          <Link href="/about" className="hover:text-indigo-600">
            About
          </Link>
        </div>

        <div className="ml-auto hidden items-center gap-2 sm:flex text-slate-500">
          <input
            placeholder="⌕  Search documentation..."
            className="w-44 rounded border border-slate-200 bg-slate-50 px-2 py-1 text-xs outline-none focus:border-indigo-400"
          />
          <span className="rounded border border-slate-200 px-2 py-1 text-xs">
            v1.0
          </span>
        </div>
      </nav>
    </header>
  );
}
