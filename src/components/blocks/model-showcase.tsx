import Image from "next/image";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import { ModelShowcaseBlock } from "@/sanity/page-builder-types";

export function ModelShowcase({
  eyebrow,
  image,
  stats,
  text,
  title,
}: ModelShowcaseBlock) {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] lg:px-10">
      <div
        data-animate-item
        className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top,rgba(191,219,254,0.55),transparent_44%),linear-gradient(145deg,#ffffff,#eff6ff)] p-8 shadow-[0_26px_70px_rgba(148,163,184,0.22)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.55),transparent)]" />
        {image?.asset?._ref ? (
          <Image
            className="h-full w-full rounded-[1.5rem] object-cover"
            src={urlFor(image).width(1400).height(1100).url()}
            width={1400}
            height={1100}
            alt={title ?? ""}
          />
        ) : null}
      </div>

      <div className="flex flex-col justify-center gap-8">
        {eyebrow ? (
          <p
            data-animate-item
            className="text-xs font-medium uppercase tracking-[0.4em] text-sky-700"
          >
            {eyebrow}
          </p>
        ) : null}

        <div className="space-y-4">
          <h2
            data-animate-item
            className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl lg:text-6xl"
          >
            {title}
          </h2>
          {text ? (
            <div
              data-animate-item
              className="prose prose-lg max-w-xl prose-slate prose-p:text-slate-700 prose-strong:text-slate-950"
            >
              <PortableText value={text} />
            </div>
          ) : null}
        </div>

        {Array.isArray(stats) && stats.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat._key}
                data-animate-item
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(148,163,184,0.16)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
