import DocLayout from "@/components/DocLayout";
import DocCard from "@/components/DocCard";
import CodeBlock from "@/components/CodeBlock";

export default function DocsPage() {
  return (
    <DocLayout>
      <p className="mb-4 text-xs text-slate-400">
        Orbit Docs / <span className="text-slate-900 font-semibold">Overview</span>
      </p>

      <h1 className="text-3xl font-bold text-slate-900">
        Documentation
      </h1>

      <p className="mt-3 text-sm leading-6 text-slate-800 text-[14px]">
        Welcome to Orbit Docs. Explore the core architecture,
        installation guides, and complete API references for building
        scalable modern web applications.
      </p>

      <hr className="my-5 border border-slate-200" />

      <div className="space-y-3">
        <DocCard
          title="↳ Getting Started"
          description="Quickstart guides, prerequisites, and initial project configuration."
          href="/docs"
          action="Start reading"
        />

        <DocCard
          title="⚒ Core Concepts"
          description="Deep dive into nested routing patterns, catch-all paths, and data loading."
          href="/docs/routing"
          action="Explore concepts"
        />

        <DocCard
          title="⚙ Reference"
          description="Detailed configuration parameters, flags, and CLI commands."
          href="/docs"
          action="View reference"
        />
      </div>

      <div className="my-6 rounded border border-indigo-200 border-l-2 border-l-indigo-600 bg-indigo-50 p-5">
        <h2 className="text-xs font-semibold text-slate-800">
          ⓘ Architecture Alignment
        </h2>
        <p className="mt-2 ml-3 text-xs leading-5 text-slate-600">
          Orbit uses file-system based routing and reusable components.
          Review configuration parameters before migrating your application.
        </p>
      </div>

      <CodeBlock title="Terminal - Quick Setup">
        {`$ npx create-next-app@latest my-app --template standard\n$ cd my-app && npm run dev`}
        </CodeBlock>
        </DocLayout>
);
}