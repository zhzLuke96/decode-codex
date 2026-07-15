// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Bootstraps persisted atoms from the host before rendering the app. It hydrates
// the local (legacy) snapshot immediately, requests the host's persisted-atom
// state, merges host + legacy + any updates that arrived while syncing, and keeps
// atoms in sync via the "persisted-atom-updated" message. If the host never
// answers within the timeout it falls back to legacy state so the app still boots.
import React, { useEffect, useRef, useState } from "react";
import { appMainLogger, hostMessageBridge } from "./app-main-host-runtime";
import {
  AppLoadingFallback,
  hydratePersistedAtoms,
  markPersistedAtomsSynced,
  persistedAtomsRegistry,
  readPersistedAtomsSnapshot,
  setPersistedAtomValue,
} from "../boundaries/onboarding-commons-externals.facade";

const HOST_SYNC_TIMEOUT_MS = 5000;

type PersistedState = Record<string, unknown>;
type PersistedAtomSetter = (key: string, value: unknown) => void;
type PersistedAtomEntry = { key: string; value: unknown };

function mergePersistedState(
  base: PersistedState,
  hostState: PersistedState,
  pendingExternalUpdates: PersistedState,
): PersistedState {
  return { ...base, ...hostState, ...pendingExternalUpdates };
}

interface ComputeMergedPersistedStateInput {
  hostState: PersistedState;
  isInitialHostSync: boolean;
  legacyState: PersistedState;
  pendingExternalUpdates: PersistedState;
}

function computeMergedPersistedState({
  hostState,
  isInitialHostSync,
  legacyState,
  pendingExternalUpdates,
}: ComputeMergedPersistedStateInput): PersistedState {
  return mergePersistedState(
    isInitialHostSync ? legacyState : {},
    hostState,
    pendingExternalUpdates,
  );
}

function collectLegacyOnlyEntries(
  legacyState: PersistedState,
  hostState: PersistedState,
): PersistedAtomEntry[] {
  const entries: PersistedAtomEntry[] = [];
  Object.entries(legacyState).forEach(([key, value]) => {
    if (!Object.prototype.hasOwnProperty.call(hostState, key)) {
      entries.push({ key, value });
    }
  });
  return entries;
}

function createInitialPersistedSnapshot(): PersistedState {
  return readPersistedAtomsSnapshot(persistedAtomsRegistry);
}

function setPersistedAtom(key: string, value: unknown): void {
  hostMessageBridge.dispatchMessage("persisted-atom-update", {
    key,
    value,
    deleted: value === undefined,
  });
}

export interface PersistedStateProviderProps {
  children: React.ReactNode;
}

export function PersistedStateProvider({
  children,
}: PersistedStateProviderProps): React.JSX.Element {
  const [isReady, setIsReady] = useState(false);
  const hasSyncedRef = useRef(false);
  const hasReceivedInitialRef = useRef(false);
  const pendingExternalUpdatesRef = useRef<PersistedState>({});
  const [legacyState] = useState(createInitialPersistedSnapshot);
  const applyPersistedAtom: PersistedAtomSetter = setPersistedAtom;

  useState(() => {
    hydratePersistedAtoms(legacyState, applyPersistedAtom);
    return true;
  });

  useEffect(() => {
    let cancelled = false;
    const unsubscribeSync = hostMessageBridge.subscribe(
      "persisted-atom-sync",
      ({ state }: { state?: PersistedState }) => {
        if (cancelled) return;
        const isInitialHostSync = !hasReceivedInitialRef.current;
        const merged = computeMergedPersistedState({
          hostState: state ?? {},
          isInitialHostSync,
          legacyState,
          pendingExternalUpdates: pendingExternalUpdatesRef.current,
        });
        hydratePersistedAtoms(merged, applyPersistedAtom);
        pendingExternalUpdatesRef.current = {};
        hasReceivedInitialRef.current = true;
        hasSyncedRef.current = true;
        setIsReady(true);
        if (isInitialHostSync) {
          collectLegacyOnlyEntries(legacyState, merged).forEach(
            ({ key, value }) => applyPersistedAtom(key, value),
          );
          markPersistedAtomsSynced();
        }
      },
    );
    const unsubscribeUpdated = hostMessageBridge.subscribe(
      "persisted-atom-updated",
      ({
        key,
        value,
        deleted,
      }: {
        key: string;
        value: unknown;
        deleted?: boolean;
      }) => {
        const nextValue = deleted ? undefined : value;
        if (!hasReceivedInitialRef.current) {
          pendingExternalUpdatesRef.current = {
            ...pendingExternalUpdatesRef.current,
            [key]: nextValue,
          };
        }
        if (hasSyncedRef.current) setPersistedAtomValue(key, nextValue);
      },
    );
    hostMessageBridge.dispatchMessage("persisted-atom-sync-request", {});
    const timeoutId = window.setTimeout(() => {
      if (cancelled || hasSyncedRef.current) return;
      appMainLogger.error(
        "[persisted-atom] host did not respond to sync request; continuing with legacy state only",
      );
      hydratePersistedAtoms(
        mergePersistedState(legacyState, {}, pendingExternalUpdatesRef.current),
        applyPersistedAtom,
      );
      hasSyncedRef.current = true;
      setIsReady(true);
      markPersistedAtomsSynced();
    }, HOST_SYNC_TIMEOUT_MS);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      unsubscribeSync();
      unsubscribeUpdated();
    };
  }, [legacyState, applyPersistedAtom]);

  if (!isReady)
    return <AppLoadingFallback debugName="PersistedStateProvider" />;
  return <>{children}</>;
}
