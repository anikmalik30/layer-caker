import { FeaturesBlock } from "@/sanity/page-builder-types";

export function Features({ features, title }: FeaturesBlock) {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-20 lg:px-10">
      {title ? (
        <h2
          data-animate-item
          className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl"
        >
          {title}
        </h2>
      ) : null}

      {Array.isArray(features) ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature._key}
              data-animate-item
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(148,163,184,0.16)]"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
