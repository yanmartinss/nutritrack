import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { spacing } from '../theme';
import type { Macro } from '../types/nutrition';

import { MacroRow } from './MacroRow';

interface MacroSummaryProps {
  readonly macros: readonly Macro[];
  readonly style?: StyleProp<ViewStyle>;
}

export function MacroSummary({ macros, style }: MacroSummaryProps) {
  return (
    <View style={[styles.container, style]}>
      {macros.map((macro) => (
        <MacroRow key={macro.key} macro={macro} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
});
