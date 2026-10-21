"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackMetaPageView } from "@/lib/metaPixel";

/**
 * Tracks a Meta Pixel PageView on each client-side navigation. The initial
 * page load is already tracked by the base code in layout.tsx, so skip it.
 */
export default function MetaPixelPageView() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    trackMetaPageView();
  }, [pathname]);

  return null;
}
