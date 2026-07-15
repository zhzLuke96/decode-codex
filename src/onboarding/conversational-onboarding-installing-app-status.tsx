// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Animated status line shown while the Electron conversational-onboarding flow
// installs a third-party app plugin.
import { FormattedMessage } from "../vendor/react-intl";
// Shimmering animated activity label (alias `Wh`), owned by a sibling chunk not
// yet restored; imported here by role from the chunk boundary facade.
import { AnimatedActivityLabel } from "../boundaries/onboarding-commons-externals.facade";

type ConversationalOnboardingInstallingAppStatusProps = {
  appName: string;
};

export function ConversationalOnboardingInstallingAppStatus({
  appName,
}: ConversationalOnboardingInstallingAppStatusProps) {
  return (
    <AnimatedActivityLabel className="text-lg leading-6">
      <FormattedMessage
        id="electron.onboarding.conversationalOnboarding.installingApp"
        defaultMessage="Installing {appName} Plugin"
        description="Animated status shown while conversational onboarding installs an app"
        values={{ appName }}
      />
    </AnimatedActivityLabel>
  );
}
