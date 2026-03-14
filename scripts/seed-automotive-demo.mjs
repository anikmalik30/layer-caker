import { createClient } from "@sanity/client";

function required(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function block(text) {
  return [
    {
      _type: "block",
      _key: crypto.randomUUID(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: crypto.randomUUID(),
          text,
          marks: [],
        },
      ],
    },
  ];
}

function animation(preset, delay = 0) {
  return {
    _type: "animationSettings",
    preset,
    trigger: "onEnter",
    duration: 1,
    delay,
    stagger: 0.08,
    once: true,
    disableOnMobile: false,
  };
}

const client = createClient({
  projectId: required("NEXT_PUBLIC_SANITY_PROJECT_ID"),
  dataset: required("NEXT_PUBLIC_SANITY_DATASET"),
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-01",
  token: required("SANITY_API_WRITE_TOKEN"),
  useCdn: false,
});

const pageId = "demo-astral-gt-page";
const faqDocs = [
  {
    _id: "faq-astral-gt-scale",
    _type: "faq",
    title: "Can this page structure scale across multiple vehicle launches?",
    body: block(
      "Yes. The page builder is designed so the same core blocks can be reused for model pages, regional launches, and campaign landers while keeping content manageable in Sanity Studio."
    ),
  },
  {
    _id: "faq-astral-gt-motion",
    _type: "faq",
    title: "Can the frontend team add advanced animation on top of this?",
    body: block(
      "Yes. The blocks are intentionally clean and modular, which makes them suitable for GSAP or other motion systems without forcing animation logic into the CMS layer."
    ),
  },
  {
    _id: "faq-astral-gt-editors",
    _type: "faq",
    title: "Can editors update the page without developer involvement?",
    body: block(
      "Yes. Editors can update copy, swap media, reorder sections, and review changes through live visual editing before publishing."
    ),
  },
];

const page = {
  _id: pageId,
  _type: "page",
  title: "The New Astral GT",
  slug: {
    _type: "slug",
    current: "astral-gt",
  },
  seo: {
    _type: "seo",
    title: "Velocity Atelier | The New Astral GT",
    description:
      "A premium electric grand tourer landing page built with Sanity page building, live visual editing, and editorial flexibility.",
  },
  content: [
    {
      _type: "videoHero",
      _key: crypto.randomUUID(),
      eyebrow: "Launch Platform Demo",
      title: "The electric grand tourer, refined for the long road.",
      text: block(
        "Astral GT pairs silent performance with a sculpted touring silhouette, a lounge-grade cabin, and the kind of editorial presence premium automotive brands need online."
      ),
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      primaryLabel: "Book a Discovery Call",
      primaryHref: "/contact",
      secondaryLabel: "View More Work",
      secondaryHref: "/posts",
      animation: animation("fade-up"),
    },
    {
      _type: "modelShowcase",
      _key: crypto.randomUUID(),
      eyebrow: "Signature Model",
      title: "Crafted to feel fast before the wheels even turn.",
      text: block(
        "Designed for premium launch campaigns, Astral GT brings together aerodynamic bodywork, a panoramic cabin, and a restrained luxury language. This demo page is intentionally built as a modular Sanity experience so every section can be reordered, rewritten, and previewed live."
      ),
      stats: [
        {
          _type: "stat",
          _key: crypto.randomUUID(),
          label: "Range",
          value: "620 km",
        },
        {
          _type: "stat",
          _key: crypto.randomUUID(),
          label: "0-100 km/h",
          value: "3.8 s",
        },
        {
          _type: "stat",
          _key: crypto.randomUUID(),
          label: "Power",
          value: "540 hp",
        },
        {
          _type: "stat",
          _key: crypto.randomUUID(),
          label: "Charge 10-80%",
          value: "18 min",
        },
      ],
      animation: animation("slide-right", 0.1),
    },
    {
      _type: "specGrid",
      _key: crypto.randomUUID(),
      eyebrow: "Technical Profile",
      title: "Performance data presented like a launch deck, not a brochure.",
      specs: [
        {
          _type: "spec",
          _key: crypto.randomUUID(),
          title: "Architecture",
          value: "800V",
          detail:
            "High-efficiency platform engineered for rapid charging and sustained output.",
        },
        {
          _type: "spec",
          _key: crypto.randomUUID(),
          title: "Drivetrain",
          value: "AWD",
          detail:
            "Dual-motor torque delivery tuned for composed highway speed and confident traction.",
        },
        {
          _type: "spec",
          _key: crypto.randomUUID(),
          title: "Battery",
          value: "108 kWh",
          detail:
            "Long-range pack with thermal management for repeated performance runs.",
        },
        {
          _type: "spec",
          _key: crypto.randomUUID(),
          title: "Top Speed",
          value: "250 km/h",
          detail:
            "Electronically governed to balance performance and touring stability.",
        },
        {
          _type: "spec",
          _key: crypto.randomUUID(),
          title: "Cabin",
          value: "5 Seats",
          detail:
            "Low, wide seating position with executive rear-space proportions.",
        },
        {
          _type: "spec",
          _key: crypto.randomUUID(),
          title: "Cargo",
          value: "540 L",
          detail:
            "Practical storage without breaking the fastback silhouette.",
        },
      ],
      animation: animation("fade-up", 0.15),
    },
    {
      _type: "features",
      _key: crypto.randomUUID(),
      title: "Luxury, performance, and clarity in the same system",
      features: [
        {
          _type: "feature",
          _key: crypto.randomUUID(),
          title: "Editorial Flexibility",
          text:
            "Every section on this page can be edited, reordered, and previewed from Sanity Studio without rebuilding the content model.",
        },
        {
          _type: "feature",
          _key: crypto.randomUUID(),
          title: "Launch-Ready Content",
          text:
            "Use the same structure for hero campaigns, model launches, market pages, and limited edition stories.",
        },
        {
          _type: "feature",
          _key: crypto.randomUUID(),
          title: "Animation-Friendly Layouts",
          text:
            "Blocks are designed for strong visual sequencing so frontend teams can layer in motion without breaking the editor workflow.",
        },
      ],
      animation: animation("fade-up", 0.2),
    },
    {
      _type: "splitImage",
      _key: crypto.randomUUID(),
      orientation: "imageRight",
      title: "Minimal surfaces outside. Lounge atmosphere inside.",
      animation: animation("slide-left", 0.15),
    },
    {
      _type: "galleryRail",
      _key: crypto.randomUUID(),
      eyebrow: "Visual Story",
      title: "A curated image sequence that feels cinematic in motion.",
      images: [],
      animation: animation("parallax-soft", 0.1),
    },
    {
      _type: "ctaBand",
      _key: crypto.randomUUID(),
      eyebrow: "Built For Premium Campaigns",
      title: "Want this same experience for your next automotive launch?",
      text:
        "This demo shows how Sanity can power modular campaign pages, visual editing, editorial workflows, and modern block-based storytelling for premium vehicle brands.",
      primaryLabel: "Book a Discovery Call",
      primaryHref: "/contact",
      secondaryLabel: "View More Work",
      secondaryHref: "/posts",
      animation: animation("scale-in", 0.1),
    },
    {
      _type: "faqs",
      _key: crypto.randomUUID(),
      title: "Common Questions",
      faqs: faqDocs.map((faq) => ({
        _type: "reference",
        _key: crypto.randomUUID(),
        _ref: faq._id,
      })),
      animation: animation("fade-up", 0.1),
    },
  ],
};

for (const faq of faqDocs) {
  await client.createOrReplace(faq);
}

await client.createOrReplace(page);
await client
  .patch("siteSettings")
  .setIfMissing({ _type: "siteSettings" })
  .set({
    homePage: {
      _type: "reference",
      _ref: pageId,
    },
  })
  .commit();

console.log("Automotive demo page created.");
console.log("Page id:", pageId);
console.log("Slug: /astral-gt");
console.log("Next step: upload real automotive images into modelShowcase, splitImage, and galleryRail.");
