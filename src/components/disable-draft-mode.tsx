"use client";

import Link from "next/link";
import { useIsPresentationTool } from "next-sanity/hooks";

export function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool();

  if (isPresentationTool) {
    return null;
  }

  return (
    <Link
      href="/api/draft-mode/disable"
      className="fixed bottom-4 right-4 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl"
    >
      Disable Draft Mode
    </Link>
  );
}
