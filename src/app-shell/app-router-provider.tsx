// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// React-router setup for the Electron app shell: the CodexApp root mounts the
// whole UI inside a react-router MemoryRouter (the renderer has no real URL bar,
// so history is kept in memory and the app's own route signals drive navigation
// via parseRouteLocation + useNavigate). `unstable_useTransitions` is disabled so
// route changes apply synchronously instead of being wrapped in a transition.
import type { ComponentProps, ReactNode } from "react";
import { MemoryRouter } from "../vendor/react-router";

export interface AppMemoryRouterProps {
  children: ReactNode;
  /**
   * Seed entries for the in-memory history stack. When omitted, react-router
   * starts at "/" and the app navigates to the resolved initial route after
   * mount (see runtime/persisted-signal/routes.ts → parseRouteLocation).
   */
  initialEntries?: MemoryRouterInitialEntries;
}

type MemoryRouterInitialEntries = NonNullable<
  ComponentProps<typeof MemoryRouter>["initialEntries"]
>;

export function AppMemoryRouter({
  children,
  initialEntries,
}: AppMemoryRouterProps) {
  return (
    <MemoryRouter
      initialEntries={initialEntries}
      // Renderer route changes are applied eagerly, not inside a React transition.
      {...({ unstable_useTransitions: false } as {
        unstable_useTransitions: boolean;
      })}
    >
      {children}
    </MemoryRouter>
  );
}

export interface AppRouterProviderProps {
  children: ReactNode;
}

/**
 * App-shell-level wrapper rendered by CodexApp. Keeps the MemoryRouter setup in
 * one place so the rest of the shell can use react-router hooks (useNavigate,
 * useLocation, matchPath) without each surface re-creating a router.
 */
export function AppRouterProvider({ children }: AppRouterProviderProps) {
  return <AppMemoryRouter>{children}</AppMemoryRouter>;
}
