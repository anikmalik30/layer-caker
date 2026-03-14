import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SplitImageBlock } from "@/sanity/page-builder-types";
import { stegaClean } from "next-sanity";

export function SplitImage({ title, image, orientation }: SplitImageBlock) {
  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-20 data-[orientation='imageRight']:lg:flex-row-reverse lg:flex-row lg:px-10"
      data-orientation={stegaClean(orientation) || "imageLeft"}
    >
      {image?.asset?._ref ? (
        <Image
          data-animate-item
          className="h-auto w-full rounded-[1.75rem] object-cover lg:w-[62%]"
          src={urlFor(image).width(1200).height(900).url()}
          width={1200}
          height={900}
          alt={title ?? ""}
        />
      ) : null}
      <div className="flex flex-1 items-center">
        {title ? (
          <h2
            data-animate-item
            className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl lg:text-6xl"
          >
            {title}
          </h2>
        ) : null}
      </div>
    </section>
  );
}
