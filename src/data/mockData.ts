import type { DailyDashboard } from '../types/nutrition';

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
      kcal: 380,
      items: [
        { id: 'oatmeal', name: 'Oatmeal with berries' },
        { id: 'milk', name: '2% Milk' },
        { id: 'almonds', name: 'Almonds' },
      ],
    },
    {
      id: 'lunch',
      kcal: 450,
      items: [
        { id: 'chicken-salad', name: 'Grilled Chicken Salad' },
        { id: 'bread', name: 'Whole Wheat Bread' },
        { id: 'dressing', name: 'Olive Oil Dressing' },
      ],
    },
  ],
};
