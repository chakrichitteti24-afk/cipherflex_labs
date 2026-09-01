/**
 * Safe mobile micro-haptic feedback utility
 * Triggers a subtle physical vibration on supporting mobile devices (Android/Chrome mobile).
 */
export function triggerHaptic(duration = 10) {
  try {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(duration);
    }
  } catch {
    // Ignore devices/browsers that do not support or allow vibration
  }
}
