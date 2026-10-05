/** Returns value/goal clamped to [0, 1]; 0 for invalid or non-positive goals. */
export function clampProgress(value: number, goal: number): number {
  if (!Number.isFinite(value) || !Number.isFinite(goal) || goal <= 0) {
    return 0;
  }
  return Math.min(Math.max(value / goal, 0), 1);
}
