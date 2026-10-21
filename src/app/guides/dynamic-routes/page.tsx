
// import Link from "next/link";
// import DocLayout from "@/components/DocLayout";
// import CodeBlock from "@/components/CodeBlock";

// export default function DynamicRoutesPage() {
//   return (
//     <DocLayout>
//       <p className="mb-4 text-xs text-slate-400">
//         Guides / App Router / Dynamic Routes
//       </p>

//       <h1 className="text-3xl font-bold">Dynamic Routes</h1>

//       <p className="mt-3 text-sm leading-6 text-slate-600">
//         Learn how to define dynamic route segments and handle catch-all
//         parameters in nested applications.
//       </p>

//       <div className="my-5 border border-indigo-200 bg-indigo-50 p-3 text-xs leading-5 text-slate-600">
//         Prerequisite Knowledge: In the App Router, dynamic segments
//         allow segments of your URL path to be variables, rather than
//         fixed strings. These parameters are available to your page
//         through route parameters.
//       </div>

//       <section>
//         <h2 className="text-xl font-semibold">1. Creating the Segment Folder</h2>
//         <p className="mt-2 text-sm leading-6 text-slate-600">
//           Dynamic segments are created by naming a folder with square
//           brackets, such as [id] or [slug]. For example, a blog may use
//           a different URL for each article.
//         </p>

//         <CodeBlock title="app/blog/[slug]/page.tsx">
//           {`type Props = {\n  params: Promise<{ slug: string }>;\n};\n\nexport default async function Page({ params }: Props) {\n  const { slug } = await params;\n  return <h1>Article: {slug}</h1>;\n}`}
//         </CodeBlock>
//         </section>
//         </DocLayout>

//   )}



import Link from "next/link";
import DocLayout from "@/components/DocLayout";
import CodeBlock from "@/components/CodeBlock";

const routeExamples = [
  {
    pattern: "app/blog/[slug]/page.tsx",
    url: "/blog/hello-world",
    params: "{ slug: 'hello-world' }",
  },
  {
    pattern: "app/shop/[category]/[item]/page.tsx",
    url: "/shop/shoes/boots",
    params: "{ category: 'shoes', item: 'boots' }",
  },
];

export default function DynamicRoutesPage() {
  return (
    <DocLayout>
      <p className="mb-5 text-xs text-slate-500">
        <Link href="/docs" className="hover:text-indigo-600">
          Guides
        </Link>
        {" / Next.js / App Router / "}
        <span className="text-slate-800">Dynamic Routes</span>
      </p>

      <div className="border-b border-slate-200 pb-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="bg-indigo-100 px-2 py-1 text-[10px] font-bold text-indigo-700">
            GUIDE
          </span>
          <span className="text-xs text-slate-500">
            Estimated read: 4 min
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950">
          Dynamic Routes
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Learn how to define dynamic route segments and handle catch-all
          parameters in nested application architectures.
        </p>
      </div>

      {/* Prerequisite notice */}
      <div className="my-6 flex gap-3 border border-indigo-200 border-l-[3px] border-l-indigo-600 bg-indigo-50 p-4">
        <span className="text-indigo-600">ⓘ</span>
        <p className="text-xs leading-5 text-slate-700">
          <strong className="text-indigo-800">
            Prerequisite Knowledge:
          </strong>{" "}
          In the App Router, dynamic segments allow segments of your URL
          path to be variable without relying on query parameters.
          Dynamic segments can be pre-rendered at build time with{" "}
          <code className="rounded border border-slate-200 bg-white px-1">
            generateStaticParams()
          </code>.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="flex items-center gap-3 text-xl font-semibold">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-indigo-700 text-xs text-white">
            1
          </span>
          Creating the segment folder
        </h2>

        <p className="mt-3 text-xs leading-6 text-slate-600">
          A dynamic segment can be created by wrapping a folder name in
          square brackets:{" "}
          <code className="rounded border border-slate-200 bg-slate-50 px-1">
            [id]
          </code>{" "}
          or{" "}
          <code className="rounded border border-slate-200 bg-slate-50 px-1">
            [slug]
          </code>
          . For example, a project page can use its ID to display the
          correct project.
        </p>

        <CodeBlock title="app/projects/[id]/page.tsx">
          {`type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;

  return (
    <section className="project-container">
      <h1>Active Project ID: {id}</h1>
    </section>
  );
}`}

        </CodeBlock>
        </section>
        {/* Section 2: Accessing route parameters */}
<section id="route-parameters" className="mb-10 scroll-mt-20">
  <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight">
    <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-indigo-700 text-xs text-white">
      2
    </span>
    Accessing route parameters
  </h2>

  <p className="mt-3 text-xs leading-6 text-slate-600">
    Dynamic segment values are passed as the{" "}
    <code className="rounded border border-slate-200 bg-slate-50 px-1">
      params
    </code>{" "}
    object inside the page, layout, and metadata generator functions.
    In asynchronous environments, you resolve or destructure this object
    directly from your component arguments.
  </p>

  <div className="mt-4 overflow-x-auto">
    <table className="w-full border-collapse text-left text-xs">
      <thead className="bg-slate-50 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
        <tr>
          <th className="border border-slate-200 px-3 py-2">
            Route pattern
          </th>
          <th className="border border-slate-200 px-3 py-2">
            Example URL
          </th>
          <th className="border border-slate-200 px-3 py-2">
            Resolved params
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="hover:bg-slate-50">
          <td className="border border-slate-200 px-3 py-2">
            <code className="text-indigo-700">
              app/blog/[slug]/page.tsx
            </code>
          </td>

          <td className="border border-slate-200 px-3 py-2 text-slate-600">
            /blog/hello-world
          </td>

          <td className="border border-slate-200 px-3 py-2">
            <code className="rounded border border-slate-200 bg-slate-50 px-1 py-1">
              {"{ slug: 'hello-world' }"}
            </code>
          </td>
        </tr>

        <tr className="hover:bg-slate-50">
          <td className="border border-slate-200 px-3 py-2">
            <code className="text-indigo-700">
              app/shop/[category]/[item]/page.tsx
            </code>
          </td>

          <td className="border border-slate-200 px-3 py-2 text-slate-600">
            /shop/shoes/boots
          </td>

          <td className="border border-slate-200 px-3 py-2">
            <code className="rounded border border-slate-200 bg-slate-50 px-1 py-1">
              {"{ category: 'shoes', item: 'boots' }"}
            </code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


{/* Section 3: Handling optional catch-all segments */}
<section id="optional-catch-all" className="mb-10 scroll-mt-20">
  <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-950">
    <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-indigo-700 text-xs text-white">
      3
    </span>
    Handling optional catch-all segments
  </h2>

  <p className="mt-3 text-xs leading-6 text-slate-600">
    When building documentation systems or multi-level CMS trees,
    paths can vary in depth. Use double brackets{" "}
    <code className="rounded border border-slate-200 bg-slate-50 px-1">
      [[...slug]]
    </code>{" "}
    to make catch-all segments optional, matching both the root parent
    path and arbitrarily nested sub-paths.
  </p>

  <CodeBlock title="app/docs/[[...slug]]/page.tsx">
    {`type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function DocsReader({ params }: Props) {
  const { slug } = await params;

  const currentPath = slug?.join("/") ?? "index";

  return (
    <article>
      Displaying documentation tree: {currentPath}
    </article>
  );
}`}
  </CodeBlock>
  </section>


{/* Section 4: Providing fallback behavior */}
<section id="fallback" className="mb-10 scroll-mt-20">
  <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-slate-950">
    <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-indigo-700 text-xs text-white">
      4
    </span>
    Providing fallback behavior
  </h2>

  <p className="mt-3 text-xs leading-5 text-slate-700">
    When dynamic segments fail to resolve to a known record in your
    backend database or content source, trigger the standard{" "}
    <code className="rounded border border-slate-300 bg-slate-50 px-1 py-0.5">
      notFound()
    </code>{" "}
    boundary to render your application's customized{" "}
    <code className="rounded border border-slate-300 bg-slate-50 px-1 py-0.5">
      not-found.tsx
    </code>{" "}
    view immediately.
  </p>

  {/* Safety Tip */}
  <div className="mt-4 flex gap-3 border border-amber-200 border-l-[3px] border-l-amber-500 bg-amber-50 p-4">
    <span className="shrink-0 text-amber-600">⚠</span>

    <p className="text-xs leading-5 text-slate-700">
      <strong className="text-amber-800">Safety Tip:</strong>{" "}
      Never serve un-sanitized dynamic route parameters directly into
      raw HTML or arbitrary queries. Always validate incoming params
      using schemas like Zod or Orbit Schema Validator before performing
      I/O operations.
    </p>
  </div>
</section>

        </DocLayout>
  )}