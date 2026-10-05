import type { ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

interface GradientBackgroundProps {
  readonly from: string;
  readonly to: string;
  readonly children: ReactNode;
  readonly style?: StyleProp<ViewStyle>;
  /** Must be unique among gradients rendered at the same time. */
  readonly gradientId?: string;
}

/** Vertical linear gradient behind its children, drawn with react-native-svg. */
export function GradientBackground({
  from,
  to,
  children,
  style,
  gradientId = 'gradientBackground',
}: GradientBackgroundProps) {
  return (
    <View style={style}>
      <Svg style={StyleSheet.absoluteFill} width="100%" height="100%" preserveAspectRatio="none">
        <Defs>
          <LinearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={from} />
            <Stop offset="1" stopColor={to} />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill={`url(#${gradientId})`} />
      </Svg>
      {children}
    </View>
  );
}
