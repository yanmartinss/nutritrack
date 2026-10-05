import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  AddMealCard,
  AppHeader,
  CalorieRing,
  GradientBackground,
  MacroSummary,
  MealCard,
  PrimaryButton,
  TabBar,
} from '../components';
import { colors, spacing } from '../theme';
import type { DailyDashboard, Tab, TabKey } from '../types/nutrition';
import { formatDayLabel } from '../utils';

interface DashboardScreenProps {
  readonly data: DailyDashboard;
  readonly tabs: readonly Tab[];
  readonly onAddMeal?: () => void;
  readonly onLogFood?: () => void;
}

/** Composes the dashboard from presentational components; owns only tab state. */
export function DashboardScreen({ data, tabs, onAddMeal, onLogFood }: DashboardScreenProps) {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<TabKey>('today');

  return (
    <View style={styles.root}>
      <GradientBackground
        from={colors.headerGradientStart}
        to={colors.headerGradientEnd}
        style={[styles.header, { paddingTop: insets.top + spacing.sm }]}
        gradientId="dashboardHeader">
        <AppHeader dateLabel={formatDayLabel(data.date)} title="NutriTrack" />
        <View style={styles.summary}>
          <CalorieRing goal={data.calories.goal} consumed={data.calories.consumed} />
          <MacroSummary macros={data.macros} style={styles.macros} />
        </View>
      </GradientBackground>

      <TabBar tabs={tabs} activeKey={activeTab} onChange={setActiveTab} />

      <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
        <Text style={styles.sectionTitle} accessibilityRole="header">
          MEALS
        </Text>
        {data.meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
        <AddMealCard onPress={onAddMeal} />
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: insets.bottom + spacing.lg }]}>
        <PrimaryButton label="Log Food" onPress={onLogFood} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingBottom: spacing.lg,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    marginTop: spacing.sm,
  },
  macros: {
    flex: 1,
    marginLeft: spacing.sm,
    marginRight: spacing.sm,
  },
  body: {
    flex: 1,
  },
  bodyContent: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: colors.textPrimary,
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },
  footer: {
    alignItems: 'center',
    paddingTop: spacing.sm,
  },
});
