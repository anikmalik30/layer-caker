"use client";

import { useRef } from "react";
import { Hero } from "@/components/blocks/hero";
import { VideoHero } from "@/components/blocks/video-hero";
import { Features } from "@/components/blocks/features";
import { SplitImage } from "@/components/blocks/split-image";
import { FAQs } from "@/components/blocks/faqs";
import { ModelShowcase } from "@/components/blocks/model-showcase";
import { SpecGrid } from "@/components/blocks/spec-grid";
import { GalleryRail } from "@/components/blocks/gallery-rail";
import { CtaBand } from "@/components/blocks/cta-band";
import { AnimationLayer } from "@/components/animation-layer";
import {
  AnimationConfig,
  PageBuilderContent,
  PageDocumentBase,
} from "@/sanity/page-builder-types";
import { client } from "@/sanity/lib/client";
import { createDataAttribute } from "next-sanity";

type PageBuilderProps = {
  content: PageBuilderContent;
  documentId: PageDocumentBase["_id"];
  documentType: PageDocumentBase["_type"];
};

const { projectId, dataset, stega } = client.config();
export const createDataAttributeConfig = {
  projectId,
  dataset,
  baseUrl: typeof stega.studioUrl === "string" ? stega.studioUrl : "",
};

function getAnimationDataAttributes(animation?: AnimationConfig) {
  return {
    "data-animation-preset": animation?.preset ?? "",
    "data-animation-trigger": animation?.trigger ?? "",
    "data-animation-duration":
      typeof animation?.duration === "number" ? String(animation.duration) : "",
    "data-animation-delay":
      typeof animation?.delay === "number" ? String(animation.delay) : "",
    "data-animation-stagger":
      typeof animation?.stagger === "number" ? String(animation.stagger) : "",
    "data-animation-once":
      typeof animation?.once === "boolean" ? String(animation.once) : "",
    "data-animation-disable-mobile":
      typeof animation?.disableOnMobile === "boolean"
        ? String(animation.disableOnMobile)
        : "",
  };
}

export function PageBuilder({
  content,
  documentId,
  documentType,
}: PageBuilderProps) {
  const blocks = content;
  const scopeRef = useRef<HTMLElement | null>(null);

  if (!Array.isArray(blocks)) {
    return null;
  }

  const contentKey = blocks.map((block) => block._key).join("|");

  return (
    <main
      ref={scopeRef}
      data-sanity={createDataAttribute({
        ...createDataAttributeConfig,
        id: documentId,
        type: documentType,
        path: "content",
      }).toString()}
    >
      <AnimationLayer scopeRef={scopeRef} contentKey={contentKey} />
      {blocks.map((block) => {
        const DragHandle = ({ children }: { children: React.ReactNode }) => (
          <div
            data-sanity={createDataAttribute({
              ...createDataAttributeConfig,
              id: documentId,
              type: documentType,
              path: `content[_key=="${block._key}"]`,
            }).toString()}
            {...getAnimationDataAttributes(
              "animation" in block ? block.animation : undefined
            )}
          >
            {children}
          </div>
        );

        switch (block._type) {
          case "hero":
            return (
              <DragHandle key={block._key}>
                <Hero {...block} />
              </DragHandle>
            );
          case "videoHero":
            return (
              <DragHandle key={block._key}>
                <VideoHero {...block} />
              </DragHandle>
            );
          case "features":
            return (
              <DragHandle key={block._key}>
                <Features {...block} />
              </DragHandle>
            );
          case "modelShowcase":
            return (
              <DragHandle key={block._key}>
                <ModelShowcase {...block} />
              </DragHandle>
            );
          case "specGrid":
            return (
              <DragHandle key={block._key}>
                <SpecGrid {...block} />
              </DragHandle>
            );
          case "splitImage":
            return (
              <DragHandle key={block._key}>
                <SplitImage {...block} />
              </DragHandle>
            );
          case "galleryRail":
            return (
              <DragHandle key={block._key}>
                <GalleryRail {...block} />
              </DragHandle>
            );
          case "ctaBand":
            return (
              <DragHandle key={block._key}>
                <CtaBand {...block} />
              </DragHandle>
            );
          case "faqs":
            return (
              <DragHandle key={block._key}>
                <FAQs {...block} />
              </DragHandle>
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
