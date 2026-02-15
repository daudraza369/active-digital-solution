"use client";

import { useEffect } from "react";

/**
 * Load TRG CSS asynchronously to avoid inflating the layout chunk.
 * ChunkLoadError occurs when layout.js (~705KB with inline CSS) exceeds webpack timeout.
 */
export default function TrgStyles() {
  useEffect(() => {
    import("@/styles/trg/post-473.css");
    import("@/styles/trg/post-45.css");
    import("@/styles/trg/post-131.css");
    import("@/styles/trg/post-16.css");
    import("@/styles/trg/e-animation-float.min.css");
    import("@/styles/trg/fadeInUp.min.css");
    import("@/styles/trg/fadeInLeft.min.css");
    import("@/styles/trg/fadeIn.min.css");
  }, []);
  return null;
}
