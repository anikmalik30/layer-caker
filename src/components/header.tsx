import { PresentationLink } from "@/components/presentation-link";

export function Header() {
  return (
    <div className="sticky top-0 z-40 p-4 md:p-6">
      <header className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-slate-200/80 bg-white/85 px-5 py-4 shadow-[0_18px_60px_rgba(148,163,184,0.18)] backdrop-blur-xl">
        <PresentationLink
          className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 md:text-base"
          href="/"
        >
          Velocity Atelier
        </PresentationLink>
        <ul className="flex items-center gap-5 text-sm font-medium text-slate-600">
          <li>
            <PresentationLink
              className="transition-colors hover:text-slate-950"
              href="/posts"
            >
              Posts
            </PresentationLink>
          </li>
          <li>
            <PresentationLink
              className="transition-colors hover:text-slate-950"
              href="/studio"
            >
              Sanity Studio
            </PresentationLink>
          </li>
        </ul>
      </header>
    </div>
  );
}
