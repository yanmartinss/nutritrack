import { Pressable, StyleSheet, Text } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { colors, spacing } from '../theme';

import { Card } from './Card';

interface AddMealCardProps {
  onPress?: () => void;
}

const BUTTON_SIZE = 42;
const CENTER = BUTTON_SIZE / 2;
const ARM = BUTTON_SIZE * 0.22;
const PLUS_PATH = `M ${CENTER - ARM} ${CENTER} H ${CENTER + ARM} M ${CENTER} ${
  CENTER - ARM
} V ${CENTER + ARM}`;

export function AddMealCard({ onPress }: AddMealCardProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Add Meal"
    >
      {({ pressed }) => (
        <Card style={[styles.card, pressed && styles.pressed]}>
          <Svg width={BUTTON_SIZE} height={BUTTON_SIZE}>
            <Circle cx={CENTER} cy={CENTER} r={CENTER} fill={colors.primary} />
            <Path
              d={PLUS_PATH}
              stroke={colors.onPrimary}
              strokeWidth={3}
              strokeLinecap="round"
            />
          </Svg>
          <Text style={styles.label}>Add Meal</Text>
        </Card>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.lg,
  },
  pressed: {
    opacity: 0.85,
  },
  label: {
    fontSize: 14,
    color: colors.textPrimary,
  },
});
