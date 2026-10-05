import type { CalorieSummary, Meal } from '../types/nutrition';

export function getCaloriesLeft({ goal, consumed }: CalorieSummary): number {
  return Math.max(goal - consumed, 0);
}

export function getMealKcal(meal: Meal): number {
  return meal.items.reduce((total, item) => total + item.kcal, 0);
}
