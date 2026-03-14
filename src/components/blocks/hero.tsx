import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { HeroBlock } from "@/sanity/page-builder-types";

export function Hero({ title, text, image }: HeroBlock) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.82),transparent_34%),linear-gradient(180deg,rgba(248,250,252,0.18),rgba(255,255,255,0.88))]" />
      <div className="relative z-20 mx-auto flex min-h-[78svh] w-full max-w-7xl flex-col justify-end gap-8 px-6 py-20 lg:px-10">
        <div className="inline-flex w-fit rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.34em] text-slate-700 backdrop-blur-sm">
          <span data-animate-item>Automotive editorial experience</span>
        </div>
        {title ? (
          <h1
            data-animate-item
            className="max-w-5xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl lg:text-7xl"
          >
            {title}
          </h1>
        ) : null}
        <div
          data-animate-item
          className="prose prose-lg max-w-2xl prose-slate prose-p:text-slate-700 prose-strong:text-slate-950"
        >
          {text ? <PortableText value={text} /> : null}
        </div>
      </div>
      {image?.asset?._ref ? (
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={urlFor(image).width(2000).height(1600).url()}
          width={2000}
          height={1600}
          alt={title ?? ""}
        />
      ) : null}
    </section>
  );
}
