"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsPresentationTool } from "next-sanity/hooks";

type AnimationLayerProps = {
  scopeRef: RefObject<HTMLElement | null>;
  contentKey: string;
};

type AnimationElement = HTMLElement & {
  dataset: DOMStringMap & {
    animationPreset?: string;
    animationTrigger?: string;
    animationDuration?: string;
    animationDelay?: string;
    animationStagger?: string;
    animationOnce?: string;
    animationDisableMobile?: string;
  };
};

function readNumber(value: string | undefined, fallback: number) {
  if (!value) {
    return fallback;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function readBoolean(value: string | undefined, fallback: boolean) {
  if (!value) {
    return fallback;
  }

  return value === "true";
}

function createBaseTween(
  element: AnimationElement,
  vars: gsap.TweenVars,
  triggerType: string,
  once: boolean
) {
  if (triggerType === "onLoad") {
    return gsap.to(element, vars);
  }

  const start = triggerType === "onScroll" ? "top bottom" : "top 82%";

  return gsap.to(element, {
    ...vars,
    scrollTrigger: {
      trigger: element,
      start,
      end: triggerType === "onScroll" ? "bottom top" : undefined,
      toggleActions: once ? "play none none none" : "play none none reverse",
      scrub: triggerType === "onScroll" ? 0.8 : false,
      once: triggerType !== "onScroll" ? once : undefined,
    },
  });
}

function animatePreset(element: AnimationElement) {
  const preset = element.dataset.animationPreset;
  if (!preset) {
    return;
  }

  const disableOnMobile = readBoolean(
    element.dataset.animationDisableMobile,
    false
  );

  if (disableOnMobile && window.matchMedia("(max-width: 767px)").matches) {
    return;
  }

  const duration = readNumber(element.dataset.animationDuration, 1);
  const delay = readNumber(element.dataset.animationDelay, 0);
  const stagger = readNumber(element.dataset.animationStagger, 0);
  const once = readBoolean(element.dataset.animationOnce, true);
  const triggerType = element.dataset.animationTrigger ?? "onEnter";

  if (preset === "parallax-soft") {
    const media = element.querySelector("img, video");
    if (media instanceof HTMLElement) {
      gsap.fromTo(
        media,
        { yPercent: -8, scale: 1.04 },
        {
          yPercent: 8,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }

    gsap.fromTo(
      element,
      { opacity: 0.4, y: 24 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 84%",
          toggleActions: once ? "play none none none" : "play none none reverse",
          once,
        },
      }
    );
    return;
  }

  const itemTargets = element.querySelectorAll<HTMLElement>("[data-animate-item]");
  const target = itemTargets.length > 0 ? itemTargets : element;

  switch (preset) {
    case "fade-up":
      gsap.set(target, { opacity: 0, y: 48 });
      createBaseTween(
        element,
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
        },
        triggerType,
        once
      );
      if (itemTargets.length > 0) {
        gsap.to(itemTargets, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger:
            triggerType === "onLoad"
              ? undefined
              : {
                  trigger: element,
                  start: triggerType === "onScroll" ? "top bottom" : "top 82%",
                  toggleActions: once
                    ? "play none none none"
                    : "play none none reverse",
                  once,
                  scrub: triggerType === "onScroll" ? 0.8 : false,
                },
        });
      }
      return;
    case "fade-in":
      gsap.set(target, { opacity: 0 });
      gsap.to(target, {
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: "power2.out",
        scrollTrigger:
          triggerType === "onLoad"
            ? undefined
            : {
                trigger: element,
                start: triggerType === "onScroll" ? "top bottom" : "top 82%",
                toggleActions: once
                  ? "play none none none"
                  : "play none none reverse",
                once,
                scrub: triggerType === "onScroll" ? 0.8 : false,
              },
      });
      return;
    case "slide-left":
      gsap.set(target, { opacity: 0, x: 60 });
      gsap.to(target, {
        opacity: 1,
        x: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger:
          triggerType === "onLoad"
            ? undefined
            : {
                trigger: element,
                start: triggerType === "onScroll" ? "top bottom" : "top 82%",
                toggleActions: once
                  ? "play none none none"
                  : "play none none reverse",
                once,
                scrub: triggerType === "onScroll" ? 0.8 : false,
              },
      });
      return;
    case "slide-right":
      gsap.set(target, { opacity: 0, x: -60 });
      gsap.to(target, {
        opacity: 1,
        x: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger:
          triggerType === "onLoad"
            ? undefined
            : {
                trigger: element,
                start: triggerType === "onScroll" ? "top bottom" : "top 82%",
                toggleActions: once
                  ? "play none none none"
                  : "play none none reverse",
                once,
                scrub: triggerType === "onScroll" ? 0.8 : false,
              },
      });
      return;
    case "scale-in":
      gsap.set(target, { opacity: 0, scale: 0.94, y: 24 });
      gsap.to(target, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger:
          triggerType === "onLoad"
            ? undefined
            : {
                trigger: element,
                start: triggerType === "onScroll" ? "top bottom" : "top 82%",
                toggleActions: once
                  ? "play none none none"
                  : "play none none reverse",
                once,
                scrub: triggerType === "onScroll" ? 0.8 : false,
              },
      });
      return;
    default:
      return;
  }
}

export function AnimationLayer({
  scopeRef,
  contentKey,
}: AnimationLayerProps) {
  const isPresentationTool = useIsPresentationTool();

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) {
      return;
    }

    if (isPresentationTool) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<AnimationElement>(
        "[data-animation-preset]",
        scope
      );

      elements.forEach((element) => {
        animatePreset(element);
      });
    }, scope);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [contentKey, isPresentationTool, scopeRef]);

  return null;
}
