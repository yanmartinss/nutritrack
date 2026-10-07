import { useState, type ReactNode } from 'react';
import {
  StyleSheet,
  View,
  type LayoutChangeEvent,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

interface GradientBackgroundProps {
  from: string;
  to: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface Size {
  width: number;
  height: number;
}

const GRADIENT_ID = 'gradientBackground';

/**
 * Vertical linear gradient behind its children, drawn with react-native-svg.
 * The container is filled with `to` as a fallback, and the SVG is sized from
 * the measured layout so no platform has to resolve percentage sizes.
 */
export function GradientBackground({
  from,
  to,
  children,
  style,
}: GradientBackgroundProps) {
  const [size, setSize] = useState<Size | null>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize(prev =>
      prev?.width === width && prev?.height === height
        ? prev
        : { width, height },
    );
  };

  return (
    <View style={[{ backgroundColor: to }, style]} onLayout={handleLayout}>
      {size && (
        <Svg
          style={StyleSheet.absoluteFill}
          width={size.width}
          height={size.height}
        >
          <Defs>
            <LinearGradient id={GRADIENT_ID} x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor={from} />
              <Stop offset="1" stopColor={to} />
            </LinearGradient>
          </Defs>
          <Rect
            x={0}
            y={0}
            width={size.width}
            height={size.height}
            fill={`url(#${GRADIENT_ID})`}
          />
        </Svg>
      )}
      {children}
    </View>
  );
}
