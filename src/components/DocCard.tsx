
// import Link from "next/link";

// type DocCardProps = {
//   title: string;
//   description: string;
//   href: string;
//   action: string;
// };

// export default function DocCard({
//   title,
//   description,
//   href,
//   action,
// }: DocCardProps) {
//   return (
//     <article className="rounded border border-slate-200 bg-blue-50 p-4">
//       <h2 className="font-semibold text-slate-900">{title}</h2>

//       <p className="mt-1 text-[13px] leading-5 text-slate-700">
//         {description}
//       </p>

//       <div className="mt-3 border-t border-slate-100 pt-2">

//         <hr className="border border-slate-200" />
//         <Link
//           href={href}
//           className="text-xs font-medium text-indigo-600 hover:underline"
//         >
//           {action} →
//         </Link>
//       </div>
//     </article>
//   );
// }

import Link from "next/link";

type DocCardProps = {
  title: string;
  description: string;
  href: string;
  action: string;
};

export default function DocCard({
  title,
  description,
  href,
  action,
}: DocCardProps) {
  return (
    <article className="rounded border border-indigo-200 bg-[#f8f9ff] p-6">
      <h2 className="text-xl font-semibold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-700">
        {description}
      </p>

      <div className="mt-4 border-t border-slate-200 pt-3">
        <Link
          href={href}
          className="text-sm font-medium text-indigo-700 hover:underline"
        >
          {action} →
        </Link>
      </div>
    </article>
  );
}
