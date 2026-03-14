import Link from "next/link";

export function Header() {
  return (
    <div className="sticky top-0 z-40 p-4 md:p-6">
      <header className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/85 px-5 py-4 shadow-[0_18px_60px_rgba(148,163,184,0.18)] backdrop-blur-xl">
        <Link
          className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 md:text-base"
          href="/"
        >
          Velocity Atelier
        </Link>
        <ul className="flex items-center gap-5 text-sm font-medium text-slate-600">
          <li>
            <Link
              className="transition-colors hover:text-slate-950"
              href="/posts"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className="transition-colors hover:text-slate-950"
              href="/studio"
            >
              Sanity Studio
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
