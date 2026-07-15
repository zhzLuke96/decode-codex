// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Usage search message catalog part 1.
import type { SettingsSearchMessageDescriptor } from "../../types";

export const usageSearchMessagesPart1 = [
  {
    defaultMessage:
      "{years, plural, one {annual limit} other {{years} year limit}}",
    id: "composer.mode.rateLimit.annualDynamicSentence",
  },
  {
    defaultMessage: "{years, plural, one {Annual} other {{years} Years}}",
    id: "composer.mode.rateLimit.annualDynamicTitle",
  },
  {
    defaultMessage: "Every {days}d",
    id: "composer.mode.rateLimit.cadence.day",
  },
  {
    defaultMessage: "Every {hours}hr",
    id: "composer.mode.rateLimit.cadence.hour",
  },
  {
    defaultMessage: "Every {minutes}m",
    id: "composer.mode.rateLimit.cadence.minute",
  },
  {
    defaultMessage:
      "{months, plural, one {Every month} other {Every {months} months}}",
    id: "composer.mode.rateLimit.cadence.month",
  },
  {
    defaultMessage:
      "{weeks, plural, one {Every week} other {Every {weeks} weeks}}",
    id: "composer.mode.rateLimit.cadence.week",
  },
  {
    defaultMessage:
      "{years, plural, one {Every year} other {Every {years} years}}",
    id: "composer.mode.rateLimit.cadence.year",
  },
  {
    defaultMessage: "{days}d",
    id: "composer.mode.rateLimit.day",
  },
  {
    defaultMessage: "Usage remaining",
    id: "composer.mode.rateLimit.heading",
  },
  {
    defaultMessage: "{hours}h",
    id: "composer.mode.rateLimit.hour",
  },
  {
    defaultMessage: "{minutes}m",
    id: "composer.mode.rateLimit.minute",
  },
  {
    defaultMessage:
      "{months, plural, one {monthly limit} other {{months} month limit}}",
    id: "composer.mode.rateLimit.monthlyDynamicSentence",
  },
  {
    defaultMessage: "{months, plural, one {Monthly} other {{months} Months}}",
    id: "composer.mode.rateLimit.monthlyDynamicTitle",
  },
  {
    defaultMessage:
      "{weeks, plural, one {weekly limit} other {{weeks} week limit}}",
    id: "composer.mode.rateLimit.weeklyDynamicSentence",
  },
  {
    defaultMessage: "{weeks, plural, one {Weekly} other {{weeks} Weeks}}",
    id: "composer.mode.rateLimit.weeklyDynamicTitle",
  },
  {
    defaultMessage: "Checking subscription…",
    id: "settings.usage.access.loading",
  },
  {
    defaultMessage: "Cancel",
    id: "settings.usage.autoTopUp.cancel",
  },
  {
    defaultMessage:
      "OpenAI will charge your payment method automatically when you reach your minimum balance.",
    id: "settings.usage.autoTopUp.dialog.description",
  },
  {
    defaultMessage: "Auto-reload credits",
    id: "settings.usage.autoTopUp.dialog.title",
  },
  {
    defaultMessage: "Turn off",
    id: "settings.usage.autoTopUp.disable",
  },
  {
    defaultMessage: "Failed to disable auto reload",
    id: "settings.usage.autoTopUp.disable.error",
  },
  {
    defaultMessage: "Disabled auto reload",
    id: "settings.usage.autoTopUp.disable.success",
  },
  {
    defaultMessage: "Turn on",
    id: "settings.usage.autoTopUp.enable",
  },
  {
    defaultMessage: "Failed to enable auto reload",
    id: "settings.usage.autoTopUp.enable.error",
  },
  {
    defaultMessage: "Enabled auto reload",
    id: "settings.usage.autoTopUp.enable.success",
  },
  {
    defaultMessage:
      "The initial top-up for an estimated {amount} failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>",
    id: "settings.usage.autoTopUp.immediateTopUpFailure.amount",
  },
  {
    defaultMessage:
      "The initial top-up failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>",
    id: "settings.usage.autoTopUp.immediateTopUpFailure.generic",
  },
  {
    defaultMessage:
      "Enabling auto reload will trigger a one-time purchase of {creditCount, number} credit to reach your target balance. Estimated cost: <strong>{amount}</strong>.",
    id: "settings.usage.autoTopUp.immediateTopUpNotice.enable",
  },
  {
    defaultMessage:
      "Updating your settings will trigger a one-time purchase of {creditCount, number} credit with an estimated cost of <strong>{amount}</strong>.",
    id: "settings.usage.autoTopUp.immediateTopUpNotice.update",
  },
  {
    defaultMessage:
      "Unable to open payment settings right now. Please try again.",
    id: "settings.usage.autoTopUp.managePayment.error",
  },
  {
    defaultMessage: "Save",
    id: "settings.usage.autoTopUp.save",
  },
  {
    defaultMessage: "Failed to save auto reload settings",
    id: "settings.usage.autoTopUp.save.error",
  },
  {
    defaultMessage: "Auto-reload target balance",
    id: "settings.usage.autoTopUp.target.ariaLabel",
  },
  {
    defaultMessage:
      "Minimum {creditCount, number} credit will be purchased, equivalent to <strong>{amount}</strong>",
    id: "settings.usage.autoTopUp.target.equivalent",
  },
  {
    defaultMessage: "Loading price",
    id: "settings.usage.autoTopUp.target.equivalent.loading",
  },
  {
    defaultMessage:
      "Set the target balance to at least 125 credits above the minimum balance.",
    id: "settings.usage.autoTopUp.target.error.minimumDifference",
  },
  {
    defaultMessage: "Enter a target balance.",
    id: "settings.usage.autoTopUp.target.error.missing",
  },
  {
    defaultMessage: "Target balance must be a whole number.",
    id: "settings.usage.autoTopUp.target.error.wholeNumber",
  },
  {
    defaultMessage:
      "Auto reload brings your credit balance back up to this amount.",
    id: "settings.usage.autoTopUp.target.helper",
  },
  {
    defaultMessage: "Target balance",
    id: "settings.usage.autoTopUp.target.label",
  },
  {
    defaultMessage: "Auto-reload minimum balance",
    id: "settings.usage.autoTopUp.threshold.ariaLabel",
  },
  {
    defaultMessage: "Set the minimum balance to at least 125 credits.",
    id: "settings.usage.autoTopUp.threshold.error.minimum",
  },
  {
    defaultMessage: "Enter a minimum balance (at least 125 credits).",
    id: "settings.usage.autoTopUp.threshold.error.missing",
  },
  {
    defaultMessage: "Minimum balance must be a whole number.",
    id: "settings.usage.autoTopUp.threshold.error.wholeNumber",
  },
  {
    defaultMessage:
      "Auto reload triggers when your credit balance goes below this amount.",
    id: "settings.usage.autoTopUp.threshold.helper",
  },
  {
    defaultMessage: "Minimum balance",
    id: "settings.usage.autoTopUp.threshold.label",
  },
  {
    defaultMessage: "Failed to update auto reload",
    id: "settings.usage.autoTopUp.update.error",
  },
  {
    defaultMessage: "Updated auto reload settings",
    id: "settings.usage.autoTopUp.update.success",
  },
  {
    defaultMessage:
      "Your subscription is managed through your Apple account. You'll need to <cancel>cancel via iOS</cancel>",
    id: "settings.usage.cancelPlan.appleDescription",
  },
  {
    defaultMessage:
      "Your subscription is managed through your Google Play account. You'll need to <cancel>cancel via Android</cancel>",
    id: "settings.usage.cancelPlan.googlePlayDescription",
  },
  {
    defaultMessage: "Cancel plan",
    id: "settings.usage.cancelPlan.title",
  },
  {
    defaultMessage:
      "Your subscription is managed through ChatGPT. Go to <cancel>billing</cancel> to cancel your plan",
    id: "settings.usage.cancelPlan.webDescription",
  },
  {
    defaultMessage: "Buy credits",
    id: "settings.usage.credit.balance.buyCredits",
  },
  {
    defaultMessage: "Current balance",
    id: "settings.usage.credit.balance.current",
  },
  {
    defaultMessage:
      "Buy credits or turn on auto-reload to continue using Codex if you hit a limit. <link>Learn more</link>",
    id: "settings.usage.credit.balance.description",
  },
  {
    defaultMessage: "Manage auto-reload",
    id: "settings.usage.credit.balance.manageAutoReload",
  },
  {
    defaultMessage: "Set up auto-reload",
    id: "settings.usage.credit.balance.setupAutoReload",
  },
  {
    defaultMessage: "Credits balance",
    id: "settings.usage.credit.balance.title",
  },
  {
    defaultMessage: "Credit remaining unavailable",
    id: "settings.usage.credit.remaining.unavailable",
  },
  {
    defaultMessage: "Unlimited credit",
    id: "settings.usage.credit.remaining.unlimited",
  },
  {
    defaultMessage: "No credit usage recorded yet",
    id: "settings.usage.creditHistory.empty",
  },
  {
    defaultMessage: "Could not load credit usage history",
    id: "settings.usage.creditHistory.error",
  },
  {
    defaultMessage: "Next",
    id: "settings.usage.creditHistory.next",
  },
  {
    defaultMessage: "Previous",
    id: "settings.usage.creditHistory.previous",
  },
  {
    defaultMessage: "{from}-{to} of {total} usage events",
    id: "settings.usage.creditHistory.range",
  },
  {
    defaultMessage: "Credit usage history",
    id: "settings.usage.creditHistory.title",
  },
  {
    defaultMessage:
      "Credits power Codex. Valid for 12 months. <link>View rate card</link>",
    id: "settings.usage.creditReload.addCredits.description",
  },
  {
    defaultMessage: "Credits power Codex. Valid for 12 months. View rate card",
    id: "settings.usage.creditReload.addCredits.screenReaderDescription",
  },
  {
    defaultMessage: "Add credits",
    id: "settings.usage.creditReload.addCredits.title",
  },
  {
    defaultMessage: "{creditQuantity, number} credits",
    id: "settings.usage.creditReload.amount.credits",
  },
  {
    defaultMessage: "Other",
    id: "settings.usage.creditReload.amount.other",
  },
  {
    defaultMessage: "Custom reload amount",
    id: "settings.usage.creditReload.amount.other.ariaLabel",
  },
  {
    defaultMessage: "—",
    id: "settings.usage.creditReload.amount.pending",
  },
  {
    defaultMessage: "Auto-reload",
    id: "settings.usage.creditReload.autoReload.checkbox",
  },
  {
    defaultMessage: "Automatically add credits when your balance runs low",
    id: "settings.usage.creditReload.autoReload.checkboxDescription",
  },
  {
    defaultMessage:
      "When my balance hits {thresholdAmount}, top up to {targetAmount}, up to {monthlyLimitAmount} per month",
    id: "settings.usage.creditReload.autoReload.description",
  },
  {
    defaultMessage:
      "When my balance hits {thresholdAmount}, top up to {targetAmount}, with no monthly maximum",
    id: "settings.usage.creditReload.autoReload.description.noLimit",
  },
  {
    defaultMessage:
      "If your balance falls below the minimum, Codex will automatically reload your credits",
    id: "settings.usage.creditReload.autoReload.description.pending",
  },
] satisfies readonly SettingsSearchMessageDescriptor[];
