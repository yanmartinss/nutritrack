export type MacroKey = 'protein' | 'carbs' | 'fat';

export type TabKey = 'today' | 'history' | 'foods' | 'settings';

export interface Macro {
  readonly key: MacroKey;
  readonly label: string;
  readonly consumed: number;
  readonly goal: number;
  readonly unit: 'g';
}

export interface FoodItem {
  readonly id: string;
  readonly name: string;
}

export interface Meal {
  readonly id: string;
  readonly items: readonly FoodItem[];
  readonly kcal: number;
}

export interface CalorieSummary {
  readonly goal: number;
  readonly consumed: number;
}

export interface DailyDashboard {
  /** Local calendar date, formatted YYYY-MM-DD. */
  readonly date: string;
  readonly calories: CalorieSummary;
  readonly macros: readonly Macro[];
  readonly meals: readonly Meal[];
}

export interface Tab {
  readonly key: TabKey;
  readonly label: string;
}
