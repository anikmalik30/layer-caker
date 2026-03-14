import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { VideoHeroBlock } from "@/sanity/page-builder-types";
import { PresentationLink } from "@/components/presentation-link";
import { useIsPresentationTool } from "next-sanity/hooks";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function VideoHero({
  eyebrow,
  poster,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  text,
  title,
  videoUrl,
}: VideoHeroBlock) {
  const isPresentationTool = useIsPresentationTool();
  const shouldUsePresentationSafeMode = isPresentationTool !== false;

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.1),rgba(248,250,252,0.92))]" />
      <div className="relative mx-auto grid min-h-[82svh] max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="relative z-20 flex flex-col justify-end gap-8">
          {eyebrow ? (
            <p
              data-animate-item
              className="inline-flex w-fit rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.34em] text-slate-700 backdrop-blur-sm"
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            data-animate-item
            className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl lg:text-7xl"
          >
            {title}
          </h1>
          {text ? (
            <div
              data-animate-item
              className="prose prose-lg max-w-2xl prose-slate prose-p:text-slate-700 prose-strong:text-slate-950"
            >
              <PortableText value={text} />
            </div>
          ) : null}
          {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
            <div data-animate-item className="flex flex-col gap-3 sm:flex-row">
              {primaryHref && primaryLabel ? (
                <PresentationLink
                  href={primaryHref}
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800"
                  target={isExternalHref(primaryHref) ? "_blank" : undefined}
                  rel={isExternalHref(primaryHref) ? "noreferrer" : undefined}
                >
                  {primaryLabel}
                </PresentationLink>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <PresentationLink
                  href={secondaryHref}
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
                  target={isExternalHref(secondaryHref) ? "_blank" : undefined}
                  rel={isExternalHref(secondaryHref) ? "noreferrer" : undefined}
                >
                  {secondaryLabel}
                </PresentationLink>
              ) : null}
            </div>
          ) : null}
        </div>

        <div
          data-animate-item
          className="relative z-20 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_26px_70px_rgba(148,163,184,0.2)]"
        >
          {!shouldUsePresentationSafeMode ? (
            <video
              className="h-full min-h-[26rem] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={
                poster?.asset?._ref
                  ? urlFor(poster).width(1600).height(1200).url()
                  : undefined
              }
            >
              <source src={videoUrl} />
            </video>
          ) : null}
          {poster?.asset?._ref ? (
            <Image
              className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${
                shouldUsePresentationSafeMode ? "" : "-z-10 opacity-0"
              }`}
              src={urlFor(poster).width(1600).height(1200).url()}
              width={1600}
              height={1200}
              alt={title}
            />
          ) : shouldUsePresentationSafeMode ? (
            <div className="flex min-h-[26rem] items-center justify-center bg-slate-100 text-sm uppercase tracking-[0.28em] text-slate-500">
              Add a poster image for Presentation mode
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
