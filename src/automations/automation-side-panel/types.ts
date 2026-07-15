// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
export type AutomationDraft = any;

export type AutomationSession =
  | { type: "persisted"; automationId: string }
  | {
      type: "proposal";
      seed: { directiveKey: string; [key: string]: unknown };
      targetAutomationId?: string | null;
    };

export interface AutomationRecord {
  id: string;
  nextRunAt?: number | null;
  lastRunAt?: number | null;
  status?: string;
  [key: string]: unknown;
}

export interface AutomationSidePanelProps {
  automation: AutomationRecord | null;
  draftInstanceId: string;
  models: unknown;
  session: AutomationSession;
  onClose: () => void;
  onNameChange: (name: string) => void;
  onSaved: (automation: AutomationRecord) => void;
}
