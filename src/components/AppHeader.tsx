import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../theme';

import { LeafIcon } from './LeafIcon';

interface AppHeaderProps {
  dateLabel: string;
  title: string;
}

export function AppHeader({ dateLabel, title }: AppHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{dateLabel}</Text>
      <View style={styles.titleRow} accessibilityRole="header">
        <Text style={styles.title}>{title}</Text>
        <LeafIcon size={26} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xs,
  },
  date: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: colors.textSecondary,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
    gap: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
  },
});
