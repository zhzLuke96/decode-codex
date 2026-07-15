// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Terminal session manager: bridges xterm panels to the host terminal process
// and keeps conversation/session snapshots for panel cloning and tab state.

import { vscodeApiF as hostMessageBridge } from "../boundaries/vscode-api";
import {
  subscribeTerminalHostEvents,
  type TerminalHostEventTarget,
} from "./terminal-session-host-events";
import {
  normalizeShellTitle,
  sanitizeTerminalTitle,
} from "./terminal-title-runtime";
import type {
  DeleteSessionOptions,
  Listener,
  SessionMappingOptions,
  TerminalAttachOptions,
  TerminalConversationSnapshot,
  TerminalCreateOptions,
  TerminalMetadataUpdate,
  TerminalRunAction,
  TerminalSessionAction,
  TerminalSessionListener,
  TerminalSessionSnapshot,
  Unsubscribe,
} from "./terminal-session-types";

const SNAPSHOT_BUFFER_LIMIT = 16_000;

export class TerminalSessionManager implements TerminalHostEventTarget {
  private readonly attachedSessionIds = new Set<string>();
  private readonly conversationListeners = new Map<string, Set<Listener>>();
  private readonly conversationSessions = new Map<
    string,
    TerminalConversationSnapshot
  >();
  private readonly listeners = new Map<string, TerminalSessionListener>();
  private readonly pendingSessionActions = new Map<
    string,
    TerminalSessionAction[]
  >();
  private readonly resizeSizeBySessionId = new Map<
    string,
    { cols: number; rows: number }
  >();
  private readonly seededSessionIds = new Set<string>();
  private readonly sessionConversations = new Map<string, string>();
  private readonly sessionSnapshotListeners = new Map<string, Set<Listener>>();
  private readonly sessionSnapshots = new Map<
    string,
    TerminalSessionSnapshot
  >();
  private readonly startedSessionIds = new Set<string>();
  private readonly unsubscribeHostMessages: Unsubscribe[] = [];

  constructor() {
    this.unsubscribeHostMessages.push(...subscribeTerminalHostEvents(this));
  }

  handleHostData(sessionId: string, data: string): void {
    this.appendSnapshotBuffer(sessionId, data);
    this.listeners.get(sessionId)?.onData?.(data);
  }

  handleHostExit(
    sessionId: string,
    code: number | null,
    signal: string | null,
  ): void {
    this.listeners.get(sessionId)?.onExit?.(code, signal);
    this.deleteSessionMapping(sessionId);
  }

  handleHostError(sessionId: string, message: string): void {
    this.listeners.get(sessionId)?.onError?.(message);
    this.deleteSessionMapping(sessionId);
  }

  handleHostInitLog(sessionId: string, log: string): void {
    const seededSnapshot = this.seededSessionIds.delete(sessionId)
      ? this.sessionSnapshots.get(sessionId)
      : null;
    const initLog =
      seededSnapshot?.buffer && !log.startsWith(seededSnapshot.buffer)
        ? `${seededSnapshot.buffer}${log}`
        : log || seededSnapshot?.buffer || "";
    this.replaceSnapshotBuffer(sessionId, initLog);
    this.listeners
      .get(sessionId)
      ?.onInitLog?.(this.sessionSnapshots.get(sessionId)?.buffer ?? initLog);
  }

  handleHostAttached(
    sessionId: string,
    cwd: string | null,
    shell: string | null,
  ): void {
    this.attachedSessionIds.add(sessionId);
    this.updateSnapshotMetadata(sessionId, {
      cwd: cwd ?? undefined,
      shell: shell ?? undefined,
    });
    this.listeners.get(sessionId)?.onAttach?.(cwd, shell);
    this.sendPendingSessionActions(sessionId);
  }

  handleHostClearActive(): void {
    for (const listener of this.listeners.values()) {
      listener.onClearActive?.();
    }
  }

  create(options: TerminalCreateOptions): string {
    const sessionId = options.sessionId ?? this.makeId();
    if (options.conversationId != null) {
      this.setSessionMapping(sessionId, options.conversationId);
    }
    this.startedSessionIds.add(sessionId);
    this.attachedSessionIds.delete(sessionId);
    hostMessageBridge.dispatchMessage("terminal-create", {
      ...options,
      sessionId,
    });
    return sessionId;
  }

  attach(options: TerminalAttachOptions): void {
    if (options.conversationId != null) {
      this.setSessionMapping(options.sessionId, options.conversationId);
    }
    this.startedSessionIds.add(options.sessionId);
    this.attachedSessionIds.delete(options.sessionId);
    hostMessageBridge.dispatchMessage("terminal-attach", options);
  }

  write(sessionId: string, data: string): void {
    this.sendOrQueueSessionAction(sessionId, {
      data,
      type: "terminal-write",
    });
  }

  runAction(sessionId: string, action: TerminalRunAction): void {
    this.updateSnapshotMetadata(sessionId, {
      cwd: action.cwd ?? undefined,
      fixedTitle: action.title ?? null,
      rawShellTitle: null,
      title: action.title ?? sanitizeTerminalTitle(action.command),
    });
    this.sendOrQueueSessionAction(sessionId, {
      command: action.command,
      cwd: action.cwd,
      type: "terminal-run-action",
    });
  }

  runHeadlessAction(sessionId: string, action: TerminalRunAction): void {
    this.updateSnapshotMetadata(sessionId, {
      cwd: action.cwd ?? undefined,
      rawShellTitle: null,
      title: sanitizeTerminalTitle(action.command),
    });
    this.sendOrQueueSessionAction(sessionId, {
      command: action.command,
      cwd: action.cwd,
      headless: true,
      type: "terminal-run-action",
    });
  }

  setTitle(sessionId: string, title: string): void {
    this.updateSnapshotMetadata(sessionId, {
      rawShellTitle: title,
      title: normalizeShellTitle(title, this.getOrCreateSnapshot(sessionId).cwd),
    });
  }

  resize(sessionId: string, cols: number, rows: number): void {
    const previousSize = this.resizeSizeBySessionId.get(sessionId);
    if (previousSize?.cols === cols && previousSize.rows === rows) return;
    this.resizeSizeBySessionId.set(sessionId, { cols, rows });
    hostMessageBridge.dispatchMessage("terminal-resize", {
      cols,
      rows,
      sessionId,
    });
  }

  close(sessionId: string): void {
    this.deleteSessionMapping(sessionId);
    hostMessageBridge.dispatchMessage("terminal-close", { sessionId });
  }

  closeForConversation(conversationId: string): void {
    const key = String(conversationId);
    const snapshot = this.conversationSessions.get(key);
    if (snapshot == null) return;
    for (const sessionId of snapshot.sessionIds) {
      this.deleteSessionMapping(sessionId, {
        clearConversationState: false,
        notify: false,
      });
      hostMessageBridge.dispatchMessage("terminal-close", { sessionId });
    }
    this.conversationSessions.delete(key);
    this.notifyConversationListeners(key);
  }

  addSessionForConversation(
    conversationId: string,
    sessionId: string = this.makeId(),
    options?: SessionMappingOptions,
  ): string {
    this.setSessionMapping(sessionId, conversationId, options);
    this.attachedSessionIds.delete(sessionId);
    return sessionId;
  }

  createSessionId(): string {
    return this.makeId();
  }

  seedSessionForConversation(
    conversationId: string,
    sessionId: string,
    snapshot: TerminalSessionSnapshot,
    cwd?: string | null,
  ): void {
    this.setSessionMapping(sessionId, conversationId, { notify: false });
    const key = String(conversationId);
    this.seededSessionIds.add(sessionId);
    this.sessionSnapshots.set(sessionId, {
      ...snapshot,
      cwd: cwd ?? snapshot.cwd,
    });
    this.notifySessionSnapshotListeners(sessionId);
    const conversationSnapshot = this.conversationSessions.get(key);
    if (conversationSnapshot == null) return;
    this.conversationSessions.set(key, {
      activeSessionId: conversationSnapshot.activeSessionId,
      sessionIds: conversationSnapshot.sessionIds,
      ...this.getConversationSessionMetadata(conversationSnapshot.sessionIds),
    });
    this.notifyConversationListeners(key);
  }

  ensureConversationSession(
    conversationId: string,
    cwd?: string | null,
    hostId?: string | null,
  ): string {
    const existingSnapshot = this.conversationSessions.get(
      String(conversationId),
    );
    if (existingSnapshot != null) return existingSnapshot.activeSessionId;
    const sessionId = this.addSessionForConversation(conversationId);
    this.create({
      conversationId,
      cwd,
      hostId,
      sessionId,
    });
    return sessionId;
  }

  getSessionForConversation(conversationId: string): string | null {
    return (
      this.conversationSessions.get(String(conversationId))?.activeSessionId ??
      null
    );
  }

  getConversationSnapshot(
    conversationId: string,
  ): TerminalConversationSnapshot | null {
    return this.conversationSessions.get(String(conversationId)) ?? null;
  }

  setActiveSessionForConversation(
    conversationId: string,
    sessionId: string,
  ): void {
    const key = String(conversationId);
    const snapshot = this.conversationSessions.get(key);
    if (snapshot == null || !snapshot.sessionIds.includes(sessionId)) return;
    this.setConversationSessions(key, snapshot.sessionIds, sessionId);
  }

  closeSessionForConversation(conversationId: string, sessionId: string): void {
    const key = String(conversationId);
    if (!this.conversationSessions.get(key)?.sessionIds.includes(sessionId)) {
      return;
    }
    this.close(sessionId);
  }

  subscribeToConversation(
    conversationId: string,
    listener: Listener,
  ): Unsubscribe {
    const key = String(conversationId);
    const listeners = this.conversationListeners.get(key) ?? new Set();
    listeners.add(listener);
    this.conversationListeners.set(key, listeners);
    return () => {
      const activeListeners = this.conversationListeners.get(key);
      if (activeListeners == null) return;
      activeListeners.delete(listener);
      if (activeListeners.size === 0) {
        this.conversationListeners.delete(key);
      }
    };
  }

  subscribeToSessionSnapshot(
    sessionId: string,
    listener: Listener,
  ): Unsubscribe {
    const listeners = this.sessionSnapshotListeners.get(sessionId) ?? new Set();
    listeners.add(listener);
    this.sessionSnapshotListeners.set(sessionId, listeners);
    return () => {
      const activeListeners = this.sessionSnapshotListeners.get(sessionId);
      if (activeListeners == null) return;
      activeListeners.delete(listener);
      if (activeListeners.size === 0) {
        this.sessionSnapshotListeners.delete(sessionId);
      }
    };
  }

  getSnapshotForConversation(
    conversationId: string,
  ): TerminalSessionSnapshot | null {
    const sessionId = this.getSessionForConversation(conversationId);
    return sessionId == null
      ? null
      : (this.sessionSnapshots.get(sessionId) ?? null);
  }

  getSnapshot(sessionId: string): TerminalSessionSnapshot | null {
    return this.sessionSnapshots.get(sessionId) ?? null;
  }

  isSessionStarted(sessionId: string): boolean {
    return this.startedSessionIds.has(sessionId);
  }

  register(
    sessionId: string,
    listener: TerminalSessionListener,
  ): Unsubscribe {
    this.listeners.set(sessionId, listener);
    const buffer = this.sessionSnapshots.get(sessionId)?.buffer;
    if (buffer) listener.onInitLog?.(buffer);
    this.sendPendingSessionActions(sessionId);
    return () => {
      if (this.listeners.get(sessionId) === listener) {
        this.listeners.delete(sessionId);
      }
    };
  }

  dispose(): void {
    for (const unsubscribe of this.unsubscribeHostMessages) {
      unsubscribe();
    }
    this.unsubscribeHostMessages.length = 0;
  }

  private makeId(): string {
    const randomUUID = globalThis.crypto?.randomUUID;
    return typeof randomUUID === "function"
      ? randomUUID.call(globalThis.crypto)
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  private setSessionMapping(
    sessionId: string,
    conversationId: string,
    options?: SessionMappingOptions,
  ): void {
    const key = String(conversationId);
    this.sessionConversations.set(sessionId, key);
    const sessionIds = this.conversationSessions.get(key)?.sessionIds ?? [];
    this.setConversationSessions(
      key,
      sessionIds.includes(sessionId) ? sessionIds : [...sessionIds, sessionId],
      sessionId,
      options,
    );
    this.getOrCreateSnapshot(sessionId);
  }

  private deleteSessionMapping(
    sessionId: string,
    options?: DeleteSessionOptions,
  ): void {
    this.attachedSessionIds.delete(sessionId);
    this.seededSessionIds.delete(sessionId);
    this.startedSessionIds.delete(sessionId);
    this.pendingSessionActions.delete(sessionId);
    this.resizeSizeBySessionId.delete(sessionId);
    const conversationId = this.sessionConversations.get(sessionId);
    if (conversationId == null) {
      this.sessionSnapshots.delete(sessionId);
      this.notifySessionSnapshotListeners(sessionId);
      return;
    }
    this.sessionConversations.delete(sessionId);
    const conversationSnapshot = this.conversationSessions.get(conversationId);
    if (conversationSnapshot != null) {
      const nextSessionIds = conversationSnapshot.sessionIds.filter(
        (item) => item !== sessionId,
      );
      const nextActiveSessionId =
        conversationSnapshot.activeSessionId === sessionId
          ? this.getNeighborSessionId(conversationSnapshot.sessionIds, sessionId)
          : conversationSnapshot.activeSessionId;
      if (nextSessionIds.length > 0 && nextActiveSessionId != null) {
        this.setConversationSessions(
          conversationId,
          nextSessionIds,
          nextActiveSessionId,
          options,
        );
      } else if (options?.clearConversationState !== false) {
        this.conversationSessions.delete(conversationId);
        if (options?.notify !== false) {
          this.notifyConversationListeners(conversationId);
        }
      }
    }
    this.sessionSnapshots.delete(sessionId);
    this.notifySessionSnapshotListeners(sessionId);
  }

  private setConversationSessions(
    conversationId: string,
    sessionIds: string[],
    activeSessionId: string,
    options?: SessionMappingOptions,
  ): void {
    const previousSnapshot = this.conversationSessions.get(conversationId);
    if (
      previousSnapshot?.activeSessionId === activeSessionId &&
      previousSnapshot.sessionIds.length === sessionIds.length &&
      previousSnapshot.sessionIds.every(
        (item, index) => item === sessionIds[index],
      )
    ) {
      return;
    }
    this.conversationSessions.set(conversationId, {
      activeSessionId,
      sessionIds,
      ...this.getConversationSessionMetadata(sessionIds),
    });
    if (options?.notify !== false) {
      this.notifyConversationListeners(conversationId);
    }
  }

  private getConversationSessionMetadata(sessionIds: string[]): Pick<
    TerminalConversationSnapshot,
    "cwdBySessionId" | "tabTitlesBySessionId"
  > {
    const tabTitlesBySessionId: Record<string, string | undefined> = {};
    const cwdBySessionId: Record<string, string | undefined> = {};
    for (const sessionId of sessionIds) {
      const snapshot = this.sessionSnapshots.get(sessionId);
      tabTitlesBySessionId[sessionId] = snapshot?.title ?? undefined;
      cwdBySessionId[sessionId] = snapshot?.cwd ?? "";
    }
    return { cwdBySessionId, tabTitlesBySessionId };
  }

  private notifyConversationListeners(conversationId: string): void {
    const listeners = this.conversationListeners.get(conversationId);
    if (listeners == null) return;
    for (const listener of listeners) listener();
  }

  private notifySessionSnapshotListeners(sessionId: string): void {
    const listeners = this.sessionSnapshotListeners.get(sessionId);
    if (listeners == null) return;
    for (const listener of listeners) listener();
  }

  private getNeighborSessionId(
    sessionIds: string[],
    sessionId: string,
  ): string | null {
    const index = sessionIds.indexOf(sessionId);
    return sessionIds[index + 1] ?? sessionIds[index - 1] ?? null;
  }

  private appendSnapshotBuffer(sessionId: string, data: string): void {
    const snapshot = this.getOrCreateSnapshot(sessionId);
    const buffer = `${snapshot.buffer}${data}`;
    this.sessionSnapshots.set(sessionId, {
      ...snapshot,
      buffer: buffer.slice(-SNAPSHOT_BUFFER_LIMIT),
      truncated: buffer.length > SNAPSHOT_BUFFER_LIMIT,
    });
    this.notifySessionSnapshotListeners(sessionId);
  }

  private replaceSnapshotBuffer(sessionId: string, data: string): void {
    const snapshot = this.getOrCreateSnapshot(sessionId);
    this.sessionSnapshots.set(sessionId, {
      ...snapshot,
      buffer: data.slice(-SNAPSHOT_BUFFER_LIMIT),
      truncated: data.length > SNAPSHOT_BUFFER_LIMIT,
    });
    this.notifySessionSnapshotListeners(sessionId);
  }

  private updateSnapshotMetadata(
    sessionId: string,
    update: TerminalMetadataUpdate,
  ): void {
    const snapshot = this.getOrCreateSnapshot(sessionId);
    const cwd = update.cwd ?? snapshot.cwd;
    const rawShellTitle =
      update.rawShellTitle === undefined
        ? snapshot.rawShellTitle
        : update.rawShellTitle;
    const fixedTitle =
      update.fixedTitle === undefined ? snapshot.fixedTitle : update.fixedTitle;
    const title =
      update.title === undefined && update.cwd != null && rawShellTitle != null
        ? normalizeShellTitle(rawShellTitle, cwd)
        : update.title === undefined
          ? snapshot.title
          : update.title;
    const resolvedTitle = fixedTitle ?? title;
    const nextSnapshot: TerminalSessionSnapshot = {
      ...snapshot,
      cwd,
      fixedTitle,
      rawShellTitle,
      shell: update.shell ?? snapshot.shell,
      title: resolvedTitle,
    };
    if (
      snapshot.cwd === nextSnapshot.cwd &&
      snapshot.shell === nextSnapshot.shell &&
      snapshot.title === nextSnapshot.title &&
      snapshot.fixedTitle === nextSnapshot.fixedTitle &&
      snapshot.rawShellTitle === nextSnapshot.rawShellTitle
    ) {
      return;
    }
    this.sessionSnapshots.set(sessionId, nextSnapshot);
    this.notifySessionSnapshotListeners(sessionId);
    const conversationId = this.sessionConversations.get(sessionId);
    if (conversationId == null) return;
    const conversationSnapshot = this.conversationSessions.get(conversationId);
    if (conversationSnapshot == null) return;
    this.conversationSessions.set(conversationId, {
      activeSessionId: conversationSnapshot.activeSessionId,
      sessionIds: conversationSnapshot.sessionIds,
      ...this.getConversationSessionMetadata(conversationSnapshot.sessionIds),
    });
    this.notifyConversationListeners(conversationId);
  }

  private getOrCreateSnapshot(sessionId: string): TerminalSessionSnapshot {
    const snapshot = this.sessionSnapshots.get(sessionId);
    if (snapshot != null) return snapshot;
    const nextSnapshot: TerminalSessionSnapshot = {
      buffer: "",
      cwd: "",
      fixedTitle: null,
      rawShellTitle: null,
      shell: "unknown",
      title: null,
      truncated: false,
    };
    this.sessionSnapshots.set(sessionId, nextSnapshot);
    return nextSnapshot;
  }

  private sendOrQueueSessionAction(
    sessionId: string,
    action: TerminalSessionAction,
  ): void {
    if (this.canSendSessionAction(sessionId, action)) {
      this.sendSessionAction(sessionId, action);
      return;
    }
    const actions = this.pendingSessionActions.get(sessionId);
    if (actions != null) {
      actions.push(action);
      return;
    }
    this.pendingSessionActions.set(sessionId, [action]);
  }

  private sendPendingSessionActions(sessionId: string): void {
    const actions = this.pendingSessionActions.get(sessionId);
    if (actions == null) return;
    this.pendingSessionActions.delete(sessionId);
    const pendingActions: TerminalSessionAction[] = [];
    for (const action of actions) {
      if (this.canSendSessionAction(sessionId, action)) {
        this.sendSessionAction(sessionId, action);
      } else {
        pendingActions.push(action);
      }
    }
    if (pendingActions.length > 0) {
      this.pendingSessionActions.set(sessionId, pendingActions);
    }
  }

  private canSendSessionAction(
    sessionId: string,
    action: TerminalSessionAction,
  ): boolean {
    if (!this.attachedSessionIds.has(sessionId)) return false;
    if (action.type === "terminal-run-action" && action.headless === true) {
      return true;
    }
    return this.listeners.has(sessionId);
  }

  private sendSessionAction(
    sessionId: string,
    action: TerminalSessionAction,
  ): void {
    switch (action.type) {
      case "terminal-run-action":
        hostMessageBridge.dispatchMessage("terminal-run-action", {
          command: action.command,
          cwd: action.cwd,
          sessionId,
        });
        return;
      case "terminal-write":
        hostMessageBridge.dispatchMessage("terminal-write", {
          data: action.data,
          sessionId,
        });
        return;
    }
  }
}

export const terminalSessionManager = new TerminalSessionManager();
