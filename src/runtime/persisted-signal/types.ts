// Restored from ref/webview/assets/persisted-signal-Djfqb095.js
// persisted-signal-Djfqb095 chunk restored from the Codex webview bundle.
export type DraftThreadEntrypoint = "home" | "panel";
export type ProjectRouteContext = {
  hostId: string | null;
  projectId: string;
};
export type BaseRouteLocation = {
  pathname: string;
  routeTemplate: string;
  search: string;
};
export type HomeRouteLocation = BaseRouteLocation & {
  routeKind: "home";
  projectContext: ProjectRouteContext | null;
};
export type NewThreadPanelRouteLocation = BaseRouteLocation & {
  routeKind: "new-thread-panel";
};
export type LocalThreadRouteLocation = BaseRouteLocation & {
  routeKind: "local-thread";
  conversationId: string;
  projectContext: ProjectRouteContext | null;
};
export type RemoteThreadRouteLocation = BaseRouteLocation & {
  routeKind: "remote-thread";
  taskId: string;
};
export type ChatGptThreadRouteLocation = BaseRouteLocation & {
  routeKind: "chatgpt-thread";
  conversationId: string;
};
export type OtherRouteLocation = BaseRouteLocation & {
  routeKind: "other";
};
export type RouteLocation =
  | HomeRouteLocation
  | NewThreadPanelRouteLocation
  | LocalThreadRouteLocation
  | RemoteThreadRouteLocation
  | ChatGptThreadRouteLocation
  | OtherRouteLocation;
export type ParseRouteLocationInput = {
  pathname: string;
  routeTemplate: string;
  search?: string;
};
export type ThreadRouteScopeValue = {
  clientThreadId: string;
} & RouteLocation;
export type ThreadScopeStore = {
  value: ThreadRouteScopeValue;
  get<TValue>(atom: unknown, key: string): TValue;
  set<TValue>(atom: unknown, key: string, value: TValue): void;
};
export type CommitClientThreadOptions = {
  conversationId: string;
  draftThreadLocationId: string;
};
export type BrowserPanelLocation = {
  kind?: string | null;
  tabId: string;
} | null;
export type PersistedSignalInitialValue<TValue = unknown> = {
  key: string;
  initialValue: TValue;
};
export type PersistedSignalSubscriber = (
  values: Array<PersistedSignalInitialValue>,
) => void;
export type ScopedAtomMountEvent<TKey> = {
  key: TKey;
  watch(callback: {
    (helpers: { get<TValue>(atom: unknown, key: TKey): TValue }): void;
  }): () => void;
};
export type ScopedAtomSetter<TValue> = (value: TValue) => void;
