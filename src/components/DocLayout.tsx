
import Sidebar from "@/components/Sidebar";

export default function DocLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <main className="min-w-0 flex-1 px-5 py-8 sm:px-10 lg:px-12">
        <div className="mx-auto w-full max-w-187">
          {children}
        </div>
      </main>
    </div>
  );
}
