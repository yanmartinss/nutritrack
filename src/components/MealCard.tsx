import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../theme';
import type { Meal } from '../types/nutrition';

import { Card } from './Card';

interface MealCardProps {
  meal: Meal;
}

export function MealCard({ meal }: MealCardProps) {
  const lastIndex = meal.items.length - 1;

  return (
    <Card style={styles.card}>
      {meal.items.map((item, index) => (
        <View key={item.id} style={styles.row}>
          <Text style={styles.item} numberOfLines={1}>
            {item.name}
          </Text>
          {index === lastIndex && (
            <Text style={styles.kcal}>{`${meal.kcal} kcal`}</Text>
          )}
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  item: {
    flexShrink: 1,
    fontSize: 14,
    color: colors.textPrimary,
  },
  kcal: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textPrimary,
  },
});
