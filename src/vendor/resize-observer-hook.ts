// Restored from ref/webview/assets/dist-8ofUNnGK.js
// Dist chunk restored from the Codex webview bundle.
import React from "react";
import * as RadixCore from "./radix-ui-core";

type ElementSize = {
  width: number;
  height: number;
};

const useLayoutEffect = RadixCore.distR;

function useSize(
  element: HTMLElement | null | undefined,
): ElementSize | undefined {
  const [size, setSize] = React.useState<ElementSize | undefined>(undefined);

  useLayoutEffect(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight,
      });

      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries) || !entries.length) return;

        const entry = entries[0];
        let width: number;
        let height: number;

        if ("borderBoxSize" in entry) {
          const borderBoxSize = entry.borderBoxSize;
          const firstBorderBox = Array.isArray(borderBoxSize)
            ? borderBoxSize[0]
            : borderBoxSize;
          width = firstBorderBox.inlineSize;
          height = firstBorderBox.blockSize;
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }

        setSize({
          width,
          height,
        });
      });

      resizeObserver.observe(element, {
        box: "border-box",
      });

      return () => resizeObserver.unobserve(element);
    }

    setSize(undefined);
  }, [element]);

  return size;
}

export { useSize, useSize as Dist };
