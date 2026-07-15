// Restored from ref/webview/assets/heartbeat-automation-eligibility-C1_JL34W.js
import { appScopeRoot, createAppScopeSignal } from "../../boundaries/app-scope";
import type { AppScopeStore, TerminalProcessCandidate } from "./types";
type TrackedTerminalProcesses = Map<string, TerminalProcessCandidate>;
export const trackedTerminalProcessesSignal = createAppScopeSignal(
  appScopeRoot,
  () => new Map<string, TerminalProcessCandidate>(),
);
export function setTrackedTerminalProcess(
  store: AppScopeStore,
  id: string,
  process: TerminalProcessCandidate,
): void {
  store.set(
    trackedTerminalProcessesSignal,
    setTrackedProcess(store.get(trackedTerminalProcessesSignal), id, process),
  );
}
export function removeTrackedTerminalProcess(
  store: AppScopeStore,
  id: string,
): void {
  store.set(
    trackedTerminalProcessesSignal,
    removeTrackedProcess(store.get(trackedTerminalProcessesSignal), id),
  );
}
export function pruneStoppedTerminalProcesses(store: AppScopeStore): void {
  store.set(
    trackedTerminalProcessesSignal,
    filterRunningProcesses(store.get(trackedTerminalProcessesSignal)),
  );
}
function setTrackedProcess(
  processes: TrackedTerminalProcesses,
  id: string,
  process: TerminalProcessCandidate,
): TrackedTerminalProcesses {
  return new Map(processes).set(id, process);
}
function removeTrackedProcess(
  processes: TrackedTerminalProcesses,
  id: string,
): TrackedTerminalProcesses {
  const nextProcesses = new Map(processes);
  nextProcesses.delete(id);
  return nextProcesses;
}
function filterRunningProcesses(
  processes: TrackedTerminalProcesses,
): TrackedTerminalProcesses {
  return new Map(
    Array.from(processes).filter(([, process]) => process.status !== "stopped"),
  );
}
