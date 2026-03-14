"use client";

import Link, { LinkProps } from "next/link";
import { useIsPresentationTool } from "next-sanity/hooks";
import { MouseEvent, PropsWithChildren } from "react";

type PresentationLinkProps = PropsWithChildren<
  LinkProps & {
    className?: string;
    target?: string;
    rel?: string;
  }
>;

export function PresentationLink({
  children,
  className,
  href,
  rel,
  target,
  ...props
}: PresentationLinkProps) {
  const isPresentationTool = useIsPresentationTool();
  const shouldDisableNavigation = isPresentationTool !== false;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (shouldDisableNavigation) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <Link
      {...props}
      href={href}
      className={className}
      target={shouldDisableNavigation ? undefined : target}
      rel={shouldDisableNavigation ? undefined : rel}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
