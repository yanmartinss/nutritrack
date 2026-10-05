import type { DailyDashboard, Tab } from '../types/nutrition';

export const dashboard: DailyDashboard = {
  date: '2026-02-01',
  calories: { goal: 2000, consumed: 500 },
  macros: [
    { key: 'protein', label: 'Protein', consumed: 80, goal: 120, unit: 'g' },
    { key: 'carbs', label: 'Carbs', consumed: 200, goal: 250, unit: 'g' },
    { key: 'fat', label: 'Fat', consumed: 50, goal: 70, unit: 'g' },
  ],
  meals: [
    {
      id: 'breakfast',
      items: [
        { id: 'oatmeal', name: 'Oatmeal with berries', kcal: 190 },
        { id: 'milk', name: '2% Milk', kcal: 110 },
        { id: 'almonds', name: 'Almonds', kcal: 80 },
      ],
    },
    {
      id: 'lunch',
      items: [
        { id: 'chicken-salad', name: 'Grilled Chicken Salad', kcal: 250 },
        { id: 'bread', name: 'Whole Wheat Bread', kcal: 120 },
        { id: 'dressing', name: 'Olive Oil Dressing', kcal: 80 },
      ],
    },
  ],
};

export const tabs: readonly Tab[] = [
  { key: 'today', label: 'Today' },
  { key: 'history', label: 'History' },
  { key: 'foods', label: 'Foods' },
  { key: 'settings', label: 'Settings' },
];
