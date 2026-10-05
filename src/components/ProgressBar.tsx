import { StyleSheet, View } from 'react-native';

import { colors, radius } from '../theme';
import { clampProgress } from '../utils';

interface ProgressBarProps {
  /** Fraction in [0, 1]; out-of-range values are clamped. */
  readonly progress: number;
  readonly color?: string;
  readonly trackColor?: string;
  readonly height?: number;
}

export function ProgressBar({
  progress,
  color = colors.primary,
  trackColor = colors.primaryTrack,
  height = 8,
}: ProgressBarProps) {
  const value = clampProgress(progress, 1);

  return (
    <View
      style={[styles.track, { height, backgroundColor: trackColor }]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: Math.round(value * 100) }}>
      <View style={[styles.fill, { width: `${value * 100}%`, backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    borderRadius: radius.pill,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: radius.pill,
  },
});
