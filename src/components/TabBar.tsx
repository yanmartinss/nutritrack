import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../theme';
import type { Tab, TabKey } from '../types/nutrition';

interface TabBarProps {
  tabs: readonly Tab[];
  activeKey: TabKey;
  onChange: (key: TabKey) => void;
}

/** Controlled tab bar: the parent owns which tab is active. */
export function TabBar({ tabs, activeKey, onChange }: TabBarProps) {
  return (
    <View style={styles.container} accessibilityRole="tablist">
      {tabs.map(tab => {
        const active = tab.key === activeKey;
        return (
          <Pressable
            key={tab.key}
            style={styles.tab}
            onPress={() => onChange(tab.key)}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
          >
            <Text style={[styles.label, active && styles.labelActive]}>
              {tab.label.toUpperCase()}
            </Text>
            <View
              style={[styles.indicator, active && styles.indicatorActive]}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingTop: spacing.md + 2,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: colors.textMuted,
    marginBottom: spacing.md,
  },
  labelActive: {
    color: colors.primary,
    fontWeight: '600',
  },
  indicator: {
    alignSelf: 'stretch',
    marginHorizontal: spacing.lg,
    height: 3,
    borderRadius: 2,
  },
  indicatorActive: {
    backgroundColor: colors.primary,
  },
});
