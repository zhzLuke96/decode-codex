// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Small Radix helper primitives bundled alongside dialog/menu internals.
import React, {
  type ComponentType,
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

type ProviderProps<TContext extends object> = TContext & {
  children: ReactNode;
  scope?: Record<string, React.Context<TContext | undefined>[]>;
};

type ScopeFactory = () => Record<string, React.Context<unknown>[]>;

export function createWarningContext<TContext extends object>(
  rootComponentName: string,
  defaultContext?: TContext,
): [
  ComponentType<ProviderProps<TContext>>,
  (consumerName: string) => TContext,
] {
  const Context = createContext<TContext | undefined>(defaultContext);

  function Provider({ children, ...context }: ProviderProps<TContext>) {
    const value = useMemo(
      () => context as TContext,
      Object.values(context as Record<string, unknown>),
    );
    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  Provider.displayName = `${rootComponentName}Provider`;

  function useWarningContext(consumerName: string): TContext {
    const context = useContext(Context);
    if (context != null) return context;
    if (defaultContext !== undefined) return defaultContext;
    throw new Error(
      `\`${consumerName}\` must be used within \`${rootComponentName}\``,
    );
  }

  return [Provider, useWarningContext];
}

export function createContextScope(
  scopeName: string,
  deps: readonly ScopeFactory[] = [],
): [
  <TContext extends object>(
    rootComponentName: string,
    defaultContext?: TContext,
  ) => [
    ComponentType<ProviderProps<TContext>>,
    (consumerName: string, scope?: Record<string, unknown>) => TContext,
  ],
  ScopeFactory,
] {
  let defaultContexts: React.Context<unknown>[] = [];

  function createScopedContext<TContext extends object>(
    rootComponentName: string,
    defaultContext?: TContext,
  ) {
    const BaseContext = createContext<TContext | undefined>(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, BaseContext];

    function Provider({
      children,
      scope,
      ...context
    }: ProviderProps<TContext>) {
      const ScopedContext =
        (scope?.[scopeName]?.[index] as React.Context<TContext | undefined>) ??
        BaseContext;
      const value = useMemo(
        () => context as TContext,
        Object.values(context as Record<string, unknown>),
      );
      return (
        <ScopedContext.Provider value={value}>
          {children}
        </ScopedContext.Provider>
      );
    }

    Provider.displayName = `${rootComponentName}Provider`;

    function useScopedContext(
      consumerName: string,
      scope?: Record<string, unknown>,
    ): TContext {
      const scopedContexts = scope as
        | Record<string, React.Context<TContext | undefined>[]>
        | undefined;
      const ScopedContext =
        (scopedContexts?.[scopeName]?.[index] as
          | React.Context<TContext | undefined>
          | undefined) ?? BaseContext;
      const context = useContext(ScopedContext);
      if (context != null) return context;
      if (defaultContext !== undefined) return defaultContext;
      throw new Error(
        `\`${consumerName}\` must be used within \`${rootComponentName}\``,
      );
    }

    return [Provider, useScopedContext] as const;
  }

  function createScope(): Record<string, React.Context<unknown>[]> {
    const parentScopes = deps.map((createDepScope) => createDepScope());
    return {
      ...Object.assign({}, ...parentScopes),
      [scopeName]: defaultContexts,
    };
  }

  return [createScopedContext, createScope];
}

export function useControllableState<TValue>({
  prop,
  defaultProp,
  onChange = () => {},
}: {
  caller?: string;
  defaultProp?: TValue;
  onChange?: (value: TValue) => void;
  prop?: TValue;
}): [
  TValue | undefined,
  (value: TValue | ((value: TValue) => TValue)) => void,
] {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultProp);
  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledValue;
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const setValue = useCallback(
    (nextValue: TValue | ((value: TValue) => TValue)) => {
      const resolvedValue =
        typeof nextValue === "function"
          ? (nextValue as (value: TValue) => TValue)(value as TValue)
          : nextValue;
      if (isControlled) {
        if (resolvedValue !== prop) onChangeRef.current(resolvedValue);
        return;
      }
      setUncontrolledValue(resolvedValue);
      onChangeRef.current(resolvedValue);
    },
    [isControlled, prop, value],
  );

  return [value, setValue];
}

export function hideOthers(
  targets: Element | Element[],
  container: Element | null = globalThis.document?.body ?? null,
  markerName: string = "data-aria-hidden",
): () => void {
  if (container == null) return () => null;
  const targetSet = new Set(Array.isArray(targets) ? targets : [targets]);
  const changedElements: Array<{
    element: Element;
    marker: string | null;
    ariaHidden: string | null;
  }> = [];

  for (const element of Array.from(container.children)) {
    if (targetSet.has(element) || containsTarget(element, targetSet)) continue;
    changedElements.push({
      element,
      marker: element.getAttribute(markerName),
      ariaHidden: element.getAttribute("aria-hidden"),
    });
    element.setAttribute(markerName, "true");
    element.setAttribute("aria-hidden", "true");
  }

  return () => {
    for (const { ariaHidden, element, marker } of changedElements) {
      if (marker == null) element.removeAttribute(markerName);
      else element.setAttribute(markerName, marker);
      if (ariaHidden == null) element.removeAttribute("aria-hidden");
      else element.setAttribute("aria-hidden", ariaHidden);
    }
  };
}

export function useStableId(deterministicId?: string): string {
  const reactId = useId();
  return deterministicId ?? `radix-${reactId.replace(/:/g, "")}`;
}

function containsTarget(
  element: Element,
  targetSet: ReadonlySet<Element>,
): boolean {
  for (const target of targetSet) {
    if (element.contains(target)) return true;
  }
  return false;
}
