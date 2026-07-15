// Restored from ref/webview/assets/upgrade-plan-dialog-CtSyWdd4.js
// Feature lists shown on upgrade-plan cards.
import { ConnectedAppsIcon } from "../icons/connected-apps-icon";
import { LockIcon } from "../icons/lock-icon";
import { SunIcon } from "../icons/sun-icon";
import { ConversationStarterIcon } from "../ui/conversation-starter-card-current";
import { Sku } from "../utils/skus";
import { FormattedMessage } from "../vendor/react-intl";
import type { PlanFeature, ProPlanSku } from "./upgrade-plan-dialog-types";

export function getProPlanFeatures(plan: ProPlanSku): PlanFeature[] {
  return [
    {
      icon: <UsageIcon />,
      label:
        plan === Sku.PROLITE ? (
          <FormattedMessage
            id="settings.usage.upgradePlan.personal.proLite.usage"
            defaultMessage="5x more usage than Plus"
            description="Usage feature for the Pro 5x plan card"
          />
        ) : (
          <FormattedMessage
            id="settings.usage.upgradePlan.personal.pro.usage"
            defaultMessage="20x more usage than Plus"
            description="Usage feature for the Pro 20x plan card"
          />
        ),
    },
    {
      icon: <ModelIcon />,
      label: (
        <FormattedMessage
          id="settings.usage.upgradePlan.personal.pro.model"
          defaultMessage="GPT-5.5 Pro"
          description="Model feature on the Pro personal plan card"
        />
      ),
    },
    {
      icon: <WorkspaceIcon />,
      label: (
        <FormattedMessage
          id="settings.usage.upgradePlan.personal.pro.workspace"
          defaultMessage="Connect to Google Workspace"
          description="Workspace feature on the Pro personal plan card"
        />
      ),
    },
  ];
}

export const freePlanFeatures: PlanFeature[] = [
  {
    icon: <UsageIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.personal.free.usage"
        defaultMessage="Limited Codex usage"
        description="Usage feature on the Free personal plan card"
      />
    ),
  },
  {
    icon: <ModelIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.personal.free.model"
        defaultMessage="GPT-5.3"
        description="Model feature on the Free personal plan card"
      />
    ),
  },
];

export const plusPlanFeatures: PlanFeature[] = [
  {
    icon: <UsageIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.personal.plus.usage"
        defaultMessage="Enhanced Codex usage"
        description="Usage feature on the Plus personal plan card"
      />
    ),
  },
  {
    icon: <ModelIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.personal.plus.model"
        defaultMessage="GPT-5.5 Thinking"
        description="Model feature on the Plus personal plan card"
      />
    ),
  },
  {
    icon: <WorkspaceIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.personal.plus.workspace"
        defaultMessage="Connect to Google Workspace"
        description="Workspace feature on the Plus personal plan card"
      />
    ),
  },
];

export const businessCodexFeatures: PlanFeature[] = [
  {
    icon: <UsageIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.business.codex.usage"
        defaultMessage="Pay-as-you-go usage"
        description="Usage feature on the Codex Business plan card"
      />
    ),
  },
  {
    icon: <ModelIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.business.codex.model"
        defaultMessage="GPT-5.5 Thinking"
        description="Model feature on the Codex Business plan card"
      />
    ),
  },
  {
    icon: <WorkspaceIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.business.codex.workspace"
        defaultMessage="Connect to Google Workspace"
        description="Workspace feature on the Codex Business plan card"
      />
    ),
  },
  {
    icon: <SecurityIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.business.codex.security"
        defaultMessage="Enhanced security and admin controls"
        description="Security feature on the Codex Business plan card"
      />
    ),
  },
];

export const businessTeamFeatures: PlanFeature[] = [
  {
    icon: <UsageIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.business.team.usage"
        defaultMessage="Enhanced Codex usage"
        description="Usage feature on the ChatGPT and Codex Business plan card"
      />
    ),
  },
  {
    icon: <ModelIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.business.team.model"
        defaultMessage="GPT-5.5 Thinking"
        description="Model feature on the ChatGPT and Codex Business plan card"
      />
    ),
  },
  {
    icon: <WorkspaceIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.business.team.workspace"
        defaultMessage="Connect to Google Workspace"
        description="Workspace feature on the ChatGPT and Codex Business plan card"
      />
    ),
  },
  {
    icon: <SecurityIcon />,
    label: (
      <FormattedMessage
        id="settings.usage.upgradePlan.business.team.security"
        defaultMessage="Enhanced security and admin controls"
        description="Security feature on the ChatGPT and Codex Business plan card"
      />
    ),
  },
];

function UsageIcon() {
  return (
    <ConversationStarterIcon className="icon-sm" name="bubble-on-bubble" />
  );
}

function ModelIcon() {
  return <SunIcon className="icon-sm text-token-charts-yellow" />;
}

function WorkspaceIcon() {
  return <ConnectedAppsIcon className="icon-sm" />;
}

function SecurityIcon() {
  return <LockIcon className="icon-base" />;
}
