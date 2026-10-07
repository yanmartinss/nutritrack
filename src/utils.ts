import type { CalorieSummary } from './types/nutrition';

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

/**
 * Formats a YYYY-MM-DD date as "SUN, FEB 1" without Intl (not fully available
 * on every Hermes build). The date is built in local time, so no UTC shift.
 */
export function formatDayLabel(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) {
    return '';
  }
  const date = new Date(year, month - 1, day);
  return `${WEEKDAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()}`;
}

/** Returns value/max clamped to [0, 1]; 0 for invalid or non-positive max. */
export function clampProgress(value: number, max: number): number {
  if (!Number.isFinite(value) || !Number.isFinite(max) || max <= 0) {
    return 0;
  }
  return Math.min(Math.max(value / max, 0), 1);
}

export function getCaloriesLeft({ goal, consumed }: CalorieSummary): number {
  return Math.max(goal - consumed, 0);
}
