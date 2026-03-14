import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { GalleryRailBlock } from "@/sanity/page-builder-types";

export function GalleryRail({ eyebrow, images, title }: GalleryRailBlock) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
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
            className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl"
          >
            {title}
          </h2>
        </div>
        <p
          data-animate-item
          className="max-w-md text-sm leading-6 text-slate-600"
        >
          Curated image sequences, designed for horizontal motion and visual
          storytelling in presentation mode or production pages.
        </p>
      </div>

      {Array.isArray(images) ? (
        <div className="flex snap-x gap-5 overflow-x-auto pb-4">
          {images.map((image) => {
            if (!image.asset?._ref) {
              return null;
            }

            return (
              <figure
                key={image._key}
                data-animate-item
                className="min-w-[18rem] snap-start overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(148,163,184,0.14)] md:min-w-[24rem] lg:min-w-[30rem]"
              >
                <Image
                  className="aspect-[4/5] w-full object-cover"
                  src={urlFor(image).width(1000).height(1200).url()}
                  width={1000}
                  height={1200}
                  alt={image.alt ?? title ?? ""}
                />
                {image.caption ? (
                  <figcaption className="px-5 py-4 text-sm text-slate-600">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
