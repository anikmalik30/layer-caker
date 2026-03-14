import Link from "next/link";
import { CtaBandBlock } from "@/sanity/page-builder-types";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function CtaBand({
  eyebrow,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  text,
  title,
}: CtaBandBlock) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(191,219,254,0.6),transparent_35%),linear-gradient(135deg,#ffffff,#eff6ff_55%,#f8fafc)] px-8 py-10 shadow-[0_24px_70px_rgba(148,163,184,0.18)] md:px-12 md:py-14">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55))] lg:block" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            {eyebrow ? (
              <p
                data-animate-item
                className="text-xs font-medium uppercase tracking-[0.38em] text-sky-700"
              >
                {eyebrow}
              </p>
            ) : null}
            <h2
              data-animate-item
              className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl"
            >
              {title}
            </h2>
            {text ? (
              <p
                data-animate-item
                className="max-w-xl text-base leading-7 text-slate-700"
              >
                {text}
              </p>
            ) : null}
          </div>

          <div data-animate-item className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800"
              target={isExternalHref(primaryHref) ? "_blank" : undefined}
              rel={isExternalHref(primaryHref) ? "noreferrer" : undefined}
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                target={isExternalHref(secondaryHref) ? "_blank" : undefined}
                rel={isExternalHref(secondaryHref) ? "noreferrer" : undefined}
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
