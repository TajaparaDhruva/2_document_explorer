import DocLayout from "@/components/DocLayout";
import CodeBlock from "@/components/CodeBlock";

export default function RoutingPage() {
  return (
    <DocLayout>
      <p className="mb-4 text-xs text-slate-400">
        Documentation / Core Concepts / Routing
      </p>

      <h1 className="text-3xl font-bold">Routing</h1>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        Orbit uses a file-system based routing mechanism with support for
        static paths, nested segments, and catch-all routes.
      </p>

      <hr className="my-5 border-slate-200" />

      <section id="overview">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Every directory inside the app directory maps directly to a
          matching URL path segment. When an incoming request reaches
          your application, Orbit analyzes the matching segment tree
          and evaluates each layout node before rendering the page.
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Route resolution runs deterministically with zero runtime
          regex overhead. Leaf pages defined inside page.tsx or route.ts
          automatically export their execution strategy.
        </p>

        <div className="my-4 border border-indigo-200 border-l-2 border-l-indigo-600 bg-indigo-50 p-3 text-xs leading-5 text-slate-600">
          Convention Note: Orbit reserves system file identifiers
          including layout.tsx, loading.tsx, and error.tsx to indicate
          distinct lifecycle roles.
        </div>
      </section>

      <section id="catch-all">
        <h2 className="mt-6 text-xl font-semibold">Catch-all Routes</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Dynamic segments can be extended to catch all subsequent URL
          segments by prepending an ellipsis inside square brackets.
          The matched parameters are parsed into an array of path parts.
        </p>

        <CodeBlock title="app/docs/[...slug]/page.tsx">
          {`type Props = {\n  params: Promise<{ slug: string[] }>;\n};\n\nexport default async function Page({ params }: Props) {\n  const { slug } = await params;\n  return <div>Path: {slug.join("/")}</div>;\n}`}
        </CodeBlock>
        </section>
        {/* Catch-all Routes Table */}
<div className="mt-4 overflow-x-auto">
  <table className="w-full border-collapse text-left text-xs">
    <thead className="bg-slate-50 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
      <tr>
        <th className="border border-slate-200 px-3 py-2">
          Route Path Pattern
        </th>
        <th className="border border-slate-200 px-3 py-2">
          Example URL
        </th>
        <th className="border border-slate-200 px-3 py-2">
          Params Object
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-slate-200 px-3 py-3">
          <code>app/shop/[...slug]/page.tsx</code>
        </td>
        <td className="border border-slate-200 px-3 py-3 text-slate-600">
          /shop/clothes
        </td>
        <td className="border border-slate-200 px-3 py-3">
          <code className="text-indigo-700">
            {"{ slug: ['clothes'] }"}
          </code>
        </td>
      </tr>

      <tr>
        <td className="border border-slate-200 px-3 py-3">
          <code>app/shop/[...slug]/page.tsx</code>
        </td>
        <td className="border border-slate-200 px-3 py-3 text-slate-600">
          /shop/clothes/tops
        </td>
        <td className="border border-slate-200 px-3 py-3">
          <code className="text-indigo-700">
            {"{ slug: ['clothes', 'tops'] }"}
          </code>
        </td>
      </tr>
    </tbody>
  </table>
</div>
{/* Route Groups */}
<section id="route-groups" className="mt-9 scroll-mt-20">
  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
    Route Groups
  </h2>

  <p className="mt-3 text-sm leading-6 text-slate-700">
    Folders wrapped with parentheses, such as{" "}
    <code className="rounded border border-slate-300 bg-slate-50 px-1 py-0.5 text-xs">
      (marketing)
    </code>{" "}
    or{" "}
    <code className="rounded border border-slate-300 bg-slate-50 px-1 py-0.5 text-xs">
      (dashboard)
    </code>
    , serve purely as organizational conventions and are omitted from
    the final URL path resolution. Refer to the{" "}
    <a
      href="/docs/layouts"
      className="text-indigo-700 hover:underline"
    >
      nested layout hierarchy
    </a>{" "}
    or explore{" "}
    <a
      href="/guides/parallel-intercepting"
      className="text-indigo-700 hover:underline"
    >
      multi-root application strategies
    </a>{" "}
    for complex multi-tenant projects.
  </p>
</section>
        </DocLayout>
  )
}