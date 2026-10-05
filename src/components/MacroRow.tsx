import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../theme';
import type { Macro } from '../types/nutrition';
import { clampProgress } from '../utils';

import { ProgressBar } from './ProgressBar';

interface MacroRowProps {
  readonly macro: Macro;
}

export function MacroRow({ macro }: MacroRowProps) {
  const { label, consumed, goal, unit } = macro;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{`${consumed}${unit} / ${goal}${unit}`}</Text>
      </View>
      <ProgressBar progress={clampProgress(consumed, goal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  value: {
    fontSize: 13,
    color: colors.textSecondary,
  },
});
