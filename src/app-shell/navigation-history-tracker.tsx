// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Tracks the in-memory router history stack to derive whether back/forward
// navigation is currently available, publishing the result to the app-shell
// navigation-chrome signals. Renders nothing.
import React from "react";
import {
  useLocation,
  useNavigationType,
  NavigationType,
} from "../vendor/react-router";
import { _appScopeO as useAppScopeStore } from "../boundaries/app-scope";
import {
  canNavigateBackSignal,
  canNavigateForwardSignal,
} from "./navigation-history-signals";

export interface NavigationHistoryState {
  entries: string[];
  index: number;
}

export function reduceNavigationHistory(
  state: NavigationHistoryState,
  locationKey: string,
  navigationType: NavigationType,
): NavigationHistoryState {
  if (state.entries[state.index] === locationKey) return state;
  if (navigationType === NavigationType.Push) {
    const entries = state.entries.slice(0, state.index + 1);
    entries.push(locationKey);
    return { entries, index: entries.length - 1 };
  }
  if (navigationType === NavigationType.Replace) {
    const entries = state.entries.slice();
    entries[state.index] = locationKey;
    return { entries, index: state.index };
  }
  if (navigationType === NavigationType.Pop) {
    const existingIndex = state.entries.indexOf(locationKey);
    if (existingIndex !== -1) {
      return { entries: state.entries, index: existingIndex };
    }
    const entries = state.entries.slice(0, state.index + 1);
    entries.push(locationKey);
    return { entries, index: entries.length - 1 };
  }
  throw Error("Unhandled navigation type");
}

export function NavigationHistoryTracker(): null {
  const scope = useAppScopeStore();
  const location = useLocation();
  const navigationType = useNavigationType();
  const historyRef = React.useRef<NavigationHistoryState>({
    entries: [location.key],
    index: 0,
  });
  const nextState = reduceNavigationHistory(
    historyRef.current,
    location.key,
    navigationType,
  );
  historyRef.current = nextState;
  React.useLayoutEffect(() => {
    scope.set(canNavigateBackSignal, nextState.index > 0);
    scope.set(
      canNavigateForwardSignal,
      nextState.index < nextState.entries.length - 1,
    );
  }, [nextState, scope]);
  return null;
}
