# Automotive Demo Content

Use this page as a polished white-theme automotive landing page demo in Sanity Presentation mode.

## Quick Seed

You can create the demo page structure automatically with:

```bash
pnpm run seed:automotive-demo
```

Required environment variables for the seed script:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` (optional, defaults in script)
- `SANITY_API_WRITE_TOKEN`

The seed script creates the page content, homepage reference, and FAQ documents. You still need to upload real automotive images in Studio for `modelShowcase`, `splitImage`, and `galleryRail`.

## Page Positioning

- Brand name: `Velocity Atelier`
- Page title: `The New Astral GT`
- Page slug: `astral-gt`
- SEO title: `Velocity Atelier | The New Astral GT`
- SEO description: `A premium electric grand tourer landing page built with Sanity page building, live visual editing, and editorial flexibility.`

## Recommended Block Order

1. `videoHero`
2. `modelShowcase`
3. `specGrid`
4. `features`
5. `splitImage`
6. `galleryRail`
7. `ctaBand`
8. `faqs`

## Hero

- Title: `The electric grand tourer, refined for the long road.`
- Text:

```text
Astral GT pairs silent performance with a sculpted touring silhouette, a lounge-grade cabin, and the kind of editorial presence premium automotive brands need online.
```

## Model Showcase

- Eyebrow: `Signature Model`
- Title: `Crafted to feel fast before the wheels even turn.`
- Text:

```text
Designed for premium launch campaigns, Astral GT brings together aerodynamic bodywork, a panoramic cabin, and a restrained luxury language. This demo page is intentionally built as a modular Sanity experience so every section can be reordered, rewritten, and previewed live.
```

- Stats:
  - Label: `Range` | Value: `620 km`
  - Label: `0-100 km/h` | Value: `3.8 s`
  - Label: `Power` | Value: `540 hp`
  - Label: `Charge 10-80%` | Value: `18 min`

## Spec Grid

- Eyebrow: `Technical Profile`
- Title: `Performance data presented like a launch deck, not a brochure.`
- Specs:
  - `Architecture` | `800V` | `High-efficiency platform engineered for rapid charging and sustained output.`
  - `Drivetrain` | `AWD` | `Dual-motor torque delivery tuned for composed highway speed and confident traction.`
  - `Battery` | `108 kWh` | `Long-range pack with thermal management for repeated performance runs.`
  - `Top Speed` | `250 km/h` | `Electronically governed to balance performance and touring stability.`
  - `Cabin` | `5 Seats` | `Low, wide seating position with executive rear-space proportions.`
  - `Cargo` | `540 L` | `Practical storage without breaking the fastback silhouette.`

## Features

- Title: `Luxury, performance, and clarity in the same system`
- Features:
  - `Editorial Flexibility` | `Every section on this page can be edited, reordered, and previewed from Sanity Studio without rebuilding the content model.`
  - `Launch-Ready Content` | `Use the same structure for hero campaigns, model launches, market pages, and limited edition stories.`
  - `Animation-Friendly Layouts` | `Blocks are designed for strong visual sequencing so frontend teams can layer in motion without breaking the editor workflow.`

## Split Image

- Orientation: `imageRight`
- Title: `Minimal surfaces outside. Lounge atmosphere inside.`

## Gallery Rail

- Eyebrow: `Visual Story`
- Title: `A curated image sequence that feels cinematic in motion.`
- Captions:
  - `Front three-quarter stance with clean daylight reflections`
  - `Side profile emphasizing wheelbase and roofline`
  - `Interior cockpit with premium materials and screen layout`
  - `Rear light signature during blue hour`

## CTA Band

- Eyebrow: `Built For Premium Campaigns`
- Title: `Want this same experience for your next automotive launch?`
- Text: `This demo shows how Sanity can power modular campaign pages, visual editing, editorial workflows, and modern block-based storytelling for premium vehicle brands.`
- Primary label: `Book a Discovery Call`
- Primary href: `/contact`
- Secondary label: `View More Work`
- Secondary href: `/posts`

## FAQs

- Section title: `Common Questions`
- FAQ 1:
  - Title: `Can this page structure scale across multiple vehicle launches?`
  - Body: `Yes. The page builder is designed so the same core blocks can be reused for model pages, regional launches, and campaign landers while keeping content manageable in Sanity Studio.`
- FAQ 2:
  - Title: `Can the frontend team add advanced animation on top of this?`
  - Body: `Yes. The blocks are intentionally clean and modular, which makes them suitable for GSAP or other motion systems without forcing animation logic into the CMS layer.`
- FAQ 3:
  - Title: `Can editors update the page without developer involvement?`
  - Body: `Yes. Editors can update copy, swap media, reorder sections, and review changes through live visual editing before publishing.`

## Image Direction

Use a consistent set from one vehicle model only. Do not mix brands or unrelated cars.

- Hero image: wide front three-quarter shot, clean architectural background, daylight or soft overcast light
- Model showcase image: static side or front-side image with strong body lines
- Split image: interior cockpit, seats, steering wheel, or detail shot
- Gallery rail: 4 to 6 images from the same shoot, including exterior, interior, detail, rear, and motion-style frame

## Best Image Style For This Demo

- White, silver, graphite, or champagne car colors
- Premium studio, rooftop, museum, or modern architectural locations
- Minimal backgrounds with strong negative space
- Consistent color temperature across all images
- Avoid dealership photos, busy streets, crowds, or mixed-brand stock packs

## Recording Script

- Start in Sanity Studio and open the page document
- Reorder `specGrid` and `modelShowcase`
- Change the hero title live
- Swap one gallery image
- Update a CTA label
- Open Presentation mode and show the page updating instantly
