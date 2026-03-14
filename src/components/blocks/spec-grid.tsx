import { SpecGridBlock } from "@/sanity/page-builder-types";

export function SpecGrid({ eyebrow, specs, title }: SpecGridBlock) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
      <div className="mb-10 space-y-4">
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

      {Array.isArray(specs) ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {specs.map((spec) => (
            <article
              key={spec._key}
              data-animate-item
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(148,163,184,0.16)]"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                {spec.title}
              </p>
              <p className="mt-4 text-4xl font-semibold text-slate-950">
                {spec.value}
              </p>
              {spec.detail ? (
                <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
                  {spec.detail}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
