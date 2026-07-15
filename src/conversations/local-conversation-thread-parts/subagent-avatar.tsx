// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Deterministic sub-agent avatar: hashes a seed string to pick one of the bundled avatar icons.

import type { SVGProps } from "react";
import clsx from "clsx";
import { subagentAvatarIcons } from "../../boundaries/onboarding-commons-externals.facade";

const HASH_MODULUS = 2147483647;

function hashSeedToAvatarIndex(seed: string): number {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) % HASH_MODULUS;
  }
  return hash % subagentAvatarIcons.length;
}

export interface SubagentAvatarProps extends SVGProps<SVGSVGElement> {
  seed: string;
}

export function SubagentAvatar({
  seed,
  className,
  ...rest
}: SubagentAvatarProps) {
  const AvatarIcon = subagentAvatarIcons[hashSeedToAvatarIndex(seed)];
  return (
    <AvatarIcon className={clsx("size-3.5 shrink-0", className)} {...rest} />
  );
}
