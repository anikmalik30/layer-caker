import { PortableText } from "next-sanity";
import { FAQPage, WithContext } from "schema-dts";
import { FaqsBlock } from "@/sanity/page-builder-types";

const generateFaqData = (faqs: FaqsBlock["faqs"]): WithContext<FAQPage> => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs?.map((faq) => ({
    "@type": "Question",
    name: faq.title!,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.text!,
    },
  })),
});

export function FAQs({ _key, title, faqs }: FaqsBlock) {
  const faqData = generateFaqData(faqs);
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-20 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      {title ? (
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          {title}
        </h2>
      ) : null}
      {Array.isArray(faqs) ? (
        <div className="max-w-3xl border-b border-slate-200 bg-white">
          {faqs.map((faq) => (
            <details
              key={faq._id}
              className="group border-t border-slate-200 px-5 transition-colors duration-150 [&[open]]:bg-slate-50"
              name={_key}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-xl font-semibold text-slate-950">
                {faq.title}
                <span className="origin-center rotate-90 transform text-sky-700 transition-transform duration-200 group-open:-rotate-90">
                  &larr;
                </span>
              </summary>
              <div className="prose prose-slate max-w-none pb-5 prose-p:text-slate-700">
                {faq.body ? <PortableText value={faq.body} /> : null}
              </div>
            </details>
          ))}
        </div>
      ) : null}
    </section>
  );
}
