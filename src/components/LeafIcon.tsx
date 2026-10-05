import Svg, { Path } from 'react-native-svg';

import { colors } from '../theme';

interface LeafIconProps {
  readonly size?: number;
  readonly color?: string;
  readonly veinColor?: string;
}

export function LeafIcon({
  size = 24,
  color = colors.primary,
  veinColor = colors.surface,
}: LeafIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityElementsHidden
      importantForAccessibility="no">
      <Path
        d="M21 3C11 3 4 8 4 15.5c0 1.6.4 3 1 4.2L3 21.7 4.3 23l2-2c1.3.7 2.8 1 4.2 1C17 22 21 15 21 3z"
        fill={color}
      />
      <Path
        d="M6.5 19.5C10 15 13.5 11.5 17.5 8"
        stroke={veinColor}
        strokeWidth={1.4}
        strokeLinecap="round"
        fill="none"
      />
    </Svg>
  );
}
