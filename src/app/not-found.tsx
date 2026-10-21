
import Link from "next/link";
import DocLayout from "@/components/DocLayout";

const suggestions = [
  {
    title: "Quickstart & Installation",
    description:
      "Step-by-step setup guide to initialize your project and configure the environment.",
    href: "/docs",
  },
  {
    title: "Routing and Catch-All Rules",
    description:
      "Learn about file-based routing, dynamic segments, and custom 404 fallback handlers.",
    href: "/docs/routing",
  },
  {
    title: "Dynamic Routes",
    description:
      "Understand route parameters and optional catch-all segments.",
    href: "/guides/dynamic-routes",
  },
];

export default function NotFound() {
  return (
    <DocLayout>

    <div className="mx-auto min-h-[calc(100vh-48px)] max-w-4xl px-5 py-10">
      <p className="text-xs text-slate-400">
        Documentation / 404 Not Found
      </p>

      <span className="mt-6 inline-block border border-indigo-200 bg-indigo-50 px-2 py-1 text-[10px] font-semibold text-indigo-700">
        STATUS: 404_PAGE_NOT_FOUND
      </span>

      <h1 className="mt-3 text-3xl font-bold">Page not found</h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
        The documentation page you requested could not be located.
        The path may have changed or the slug identifier might be invalid.
      </p>

      <Link
        href="/docs"
        className="mt-4 inline-block text-sm text-indigo-600 hover:underline"
        >
        ← Back to Documentation
      </Link>

      <section className="mt-7 rounded border border-slate-200 bg-white p-4">
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="font-semibold uppercase tracking-wider text-slate-500">
            Quick Path Lookup
          </span>
          <span className="text-slate-400">Search documentation</span>
        </div>

        <form action="/docs" className="mt-3 flex gap-2">
          <input
            name="q"
            placeholder="/docs/routing"
            className="min-w-0 flex-1 rounded border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500"
          />
          <button className="rounded bg-indigo-600 px-4 py-2 text-sm text-white">
            Search
          </button>
        </form>
      </section>

      <div className="mb-3 mt-7 flex items-center justify-between">
        <h2 className="font-semibold">Suggested articles</h2>
        <span className="text-[10px] text-slate-400">
          Frequently accessed resources
        </span>
      </div>

      <div className="space-y-2">
        {suggestions.map((item) => (
          <Link
          href={item.href}
            key={item.title}
            className="flex items-center gap-3 rounded border border-slate-200 bg-white p-3 hover:border-indigo-300"
            >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-indigo-100 bg-indigo-50 text-indigo-600">
              ↗
            </span>
            <span className="min-w-0 flex-1">
              <strong className="block text-sm">{item.title}</strong>
              <span className="mt-1 block text-xs leading-5 text-slate-500">
                {item.description}
              </span>
            </span>
            <span className="text-slate-400">→</span>
          </Link>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded border border-slate-700">
        <div className="flex justify-between bg-slate-100 px-3 py-2 text-[10px] text-slate-500">
          <span>orbit-diagnostic.log</span>
          <span>HTTP 404</span>
        </div>

        <pre className="overflow-x-auto bg-slate-900 p-4 text-xs leading-6 text-slate-100">
{`# Diagnostic route trace
$ orbit-cli verify --path "/docs/unknown"
ERR_ROUTER_SLUG_UNMATCHED: No route matching slug segment in manifest tree.
+ Suggested resolution: inspect available documentation routes.`}
        </pre>
      </div>

      <footer className="mt-8 flex flex-wrap justify-between gap-3 border-t border-slate-200 pt-4 text-[10px] text-slate-500">
        <span>Looking for something specific?</span>
        <span>Report broken link · Community Discord</span>
      </footer>
    </div>
</DocLayout>  
  );
}
