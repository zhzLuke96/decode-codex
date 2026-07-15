// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Local-conversation automation tooltip and composer outside-pointer surface.
import React from "react";
import {
  initTooltipPrimitives,
  Tooltip,
  TooltipProvider,
} from "../ui/tooltip-b";
import { once } from "../runtime/commonjs-interop";

type ComposerDismissableLayerProps = {
  children: React.ReactNode;
  onPointerDownOutside?: (event: Event) => void;
};

export function ComposerDismissableLayer({
  children,
  onPointerDownOutside,
}: ComposerDismissableLayerProps): React.ReactElement {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const outsideHandlerRef = React.useRef(onPointerDownOutside);
  outsideHandlerRef.current = onPointerDownOutside;

  React.useEffect(() => {
    if (outsideHandlerRef.current == null) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && !containerRef.current?.contains(target)) {
        outsideHandlerRef.current?.(event);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown, true);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

type AutomationTooltipContextValue = {
  content: React.ReactNode;
  setContent(content: React.ReactNode): void;
};

const AutomationTooltipContext =
  React.createContext<AutomationTooltipContextValue | null>(null);

type AutomationTooltipRootProps = {
  children: React.ReactNode;
};

function AutomationTooltipRoot({
  children,
}: AutomationTooltipRootProps): React.ReactElement {
  const [content, setContent] = React.useState<React.ReactNode>(null);
  const contextValue = React.useMemo(
    () => ({ content, setContent }),
    [content],
  );

  return (
    <TooltipProvider delayDuration={300}>
      <AutomationTooltipContext.Provider value={contextValue}>
        {children}
      </AutomationTooltipContext.Provider>
    </TooltipProvider>
  );
}

type AutomationTooltipTriggerProps = {
  asChild?: boolean;
  children: React.ReactElement;
};

function AutomationTooltipTrigger({
  asChild = false,
  children,
}: AutomationTooltipTriggerProps): React.ReactElement {
  const context = React.useContext(AutomationTooltipContext);
  const trigger = asChild ? children : <span>{children}</span>;

  return (
    <Tooltip
      align="center"
      interactive={true}
      side="bottom"
      tooltipContent={context?.content}
      variant="rich"
    >
      {trigger}
    </Tooltip>
  );
}

type AutomationTooltipContentProps = {
  children: React.ReactNode;
};

function AutomationTooltipContent({
  children,
}: AutomationTooltipContentProps): null {
  const context = React.useContext(AutomationTooltipContext);
  const setContent = context?.setContent;

  React.useEffect(() => {
    setContent?.(children);
    return () => {
      setContent?.(null);
    };
  }, [children, setContent]);

  return null;
}

export class AutomationTooltipSurface {
  static Root = AutomationTooltipRoot;
  static Trigger = AutomationTooltipTrigger;
  static Content = AutomationTooltipContent;

  private constructor() {}
}

export const initAutomationSurface = once(() => {
  initTooltipPrimitives();
});
