// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type { PointerVelocitySample } from "../pointer-velocity-state";

export function computePointerVelocity(
  previous: PointerVelocitySample,
  x: number,
  y: number,
  updatedAt: number,
): PointerVelocitySample {
  if (previous.x == null || previous.y == null || previous.updatedAt == null) {
    return {
      x,
      y,
      hasKnownVelocity: false,
      updatedAt,
      velocityX: 0,
      velocityY: 0,
      speed: 0,
    };
  }
  const elapsedSeconds = (updatedAt - previous.updatedAt) / 1e3;
  if (elapsedSeconds <= 0) {
    return {
      x,
      y,
      hasKnownVelocity: false,
      updatedAt,
      velocityX: 0,
      velocityY: 0,
      speed: 0,
    };
  }
  const velocityX = (x - previous.x) / elapsedSeconds;
  const velocityY = (y - previous.y) / elapsedSeconds;
  return {
    x,
    y,
    hasKnownVelocity: true,
    updatedAt,
    velocityX,
    velocityY,
    speed: Math.hypot(velocityX, velocityY),
  };
}
