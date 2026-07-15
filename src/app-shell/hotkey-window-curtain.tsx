// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Hotkey-window curtain: listens for host "hotkey-window-transition" messages and
// renders a raising/lowering curtain overlay for the animation duration, then
// reports the transition step back to the host once the animation completes.
import { useEffect, useRef, useState, type ReactNode } from "react";
import { appServices } from "../boundaries/rpc.facade";
import { useHostMessageSubscription } from "../boundaries/onboarding-commons-externals.facade";

type CurtainPhase = "raise" | "lower";

interface CurtainState {
  transitionId: string;
  curtainPhase: CurtainPhase;
  durationMs: number;
}

type HotkeyWindowTransitionMessage =
  | { step: "commit" }
  | { step: "raise-curtain"; transitionId: string; durationMs: number }
  | { step: "lower-curtain"; transitionId: string; durationMs: number };

const curtainClasses = {
  curtain: "_curtain_6t09y_1",
  curtainRaise: "_curtainRaise_6t09y_1",
  curtainLower: "_curtainLower_6t09y_1",
};

export interface HotkeyWindowCurtainProps {
  children: ReactNode;
}

export function HotkeyWindowCurtain({ children }: HotkeyWindowCurtainProps) {
  const [curtain, setCurtain] = useState<CurtainState | null>(null);
  const transitionTimeoutRef = useRef<number | null>(null);

  const clearTransitionTimeout = () => {
    if (transitionTimeoutRef.current != null) {
      window.clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  };

  const handleTransition = (message: HotkeyWindowTransitionMessage) => {
    clearTransitionTimeout();
    switch (message.step) {
      case "commit":
        setCurtain(null);
        return;
      case "raise-curtain":
        setCurtain({
          transitionId: message.transitionId,
          curtainPhase: "raise",
          durationMs: message.durationMs,
        });
        transitionTimeoutRef.current = window.setTimeout(() => {
          appServices.hotkeyWindowHotkeys?.transitionDone({
            transitionId: message.transitionId,
            step: "raised",
          });
        }, message.durationMs);
        return;
      case "lower-curtain":
        setCurtain({
          transitionId: message.transitionId,
          curtainPhase: "lower",
          durationMs: message.durationMs,
        });
        transitionTimeoutRef.current = window.setTimeout(() => {
          appServices.hotkeyWindowHotkeys?.transitionDone({
            transitionId: message.transitionId,
            step: "lowered",
          });
          setCurtain(null);
        }, message.durationMs);
        return;
    }
  };

  useHostMessageSubscription("hotkey-window-transition", handleTransition);

  useEffect(
    () => () => {
      clearTransitionTimeout();
    },
    [],
  );

  return (
    <>
      {children}
      {curtain ? (
        <div
          key={`${curtain.transitionId}:${curtain.curtainPhase}`}
          data-hotkey-window-curtain={true}
          className={curtainClasses.curtain}
          data-phase={curtain.curtainPhase}
          style={{ animationDuration: `${curtain.durationMs}ms` }}
        />
      ) : null}
    </>
  );
}
