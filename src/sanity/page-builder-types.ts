import { BlockContent, PAGE_QUERYResult } from "@/sanity/types";

type SanityImage = {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
  };
  media?: unknown;
  hotspot?: unknown;
  crop?: unknown;
  alt?: string;
  caption?: string;
  _type: "image";
  _key?: string;
};

export type AnimationConfig = {
  _type?: "animationSettings";
  preset?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in" | "parallax-soft";
  trigger?: "onEnter" | "onLoad" | "onScroll";
  duration?: number;
  delay?: number;
  stagger?: number;
  once?: boolean;
  disableOnMobile?: boolean;
};

export type HeroBlock = {
  _key: string;
  _type: "hero";
  title?: string;
  text?: BlockContent;
  image?: SanityImage;
  animation?: AnimationConfig;
};

export type VideoHeroBlock = {
  _key: string;
  _type: "videoHero";
  eyebrow?: string;
  title: string;
  text?: BlockContent;
  videoUrl: string;
  poster?: SanityImage;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  animation?: AnimationConfig;
};

export type ModelShowcaseBlock = {
  _key: string;
  _type: "modelShowcase";
  eyebrow?: string;
  title: string;
  text?: BlockContent;
  image?: SanityImage;
  stats?: Array<{
    _key: string;
    _type?: "stat";
    label: string;
    value: string;
  }>;
  animation?: AnimationConfig;
};

export type SpecGridBlock = {
  _key: string;
  _type: "specGrid";
  eyebrow?: string;
  title: string;
  specs: Array<{
    _key: string;
    _type?: "spec";
    title: string;
    value: string;
    detail?: string;
  }>;
  animation?: AnimationConfig;
};

export type FeaturesBlock = {
  _key: string;
  _type: "features";
  title?: string;
  features?: Array<{
    _key: string;
    _type?: "feature";
    title?: string;
    text?: string;
  }>;
  animation?: AnimationConfig;
};

export type SplitImageBlock = {
  _key: string;
  _type: "splitImage";
  orientation?: "imageLeft" | "imageRight";
  title?: string;
  image?: SanityImage;
  animation?: AnimationConfig;
};

export type GalleryRailBlock = {
  _key: string;
  _type: "galleryRail";
  eyebrow?: string;
  title: string;
  images: Array<SanityImage & { _key: string }>;
  animation?: AnimationConfig;
};

export type CtaBandBlock = {
  _key: string;
  _type: "ctaBand";
  eyebrow?: string;
  title: string;
  text?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  animation?: AnimationConfig;
};

export type FaqsBlock = {
  _key: string;
  _type: "faqs";
  title?: string;
  faqs: Array<{
    _id: string;
    title: string | null;
    body: BlockContent | null;
    text: string;
  }> | null;
  animation?: AnimationConfig;
};

export type PageBuilderBlock =
  | HeroBlock
  | VideoHeroBlock
  | ModelShowcaseBlock
  | SpecGridBlock
  | FeaturesBlock
  | SplitImageBlock
  | GalleryRailBlock
  | CtaBandBlock
  | FaqsBlock;

export type PageBuilderContent = PageBuilderBlock[];

export type PageDocumentBase = Pick<
  NonNullable<PAGE_QUERYResult>,
  "_id" | "_type"
>;
