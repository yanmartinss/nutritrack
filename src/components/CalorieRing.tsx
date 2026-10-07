import { StyleSheet, Text, View } from 'react-native';
import Svg, {
  Circle,
  Defs,
  G,
  Path,
  Text as SvgText,
  TextPath,
} from 'react-native-svg';

import { colors } from '../theme';
import { clampProgress, getCaloriesLeft } from '../utils';

interface CalorieRingProps {
  goal: number;
  consumed: number;
  /** Diameter of the ring itself; room for the caption is added around it. */
  size?: number;
  strokeWidth?: number;
}

const CAPTION_FONT_SIZE = 12;
const CAPTION_GAP = 6;
const CAPTION_PATH_ID = 'calorieRingCaption';

export function CalorieRing({
  goal,
  consumed,
  size = 136,
  strokeWidth = 10,
}: CalorieRingProps) {
  const progress = clampProgress(consumed, goal);
  const caloriesLeft = getCaloriesLeft({ goal, consumed });
  const percentLeft = Math.round(clampProgress(caloriesLeft, goal) * 100);

  // The ring sits in the middle of a larger canvas that leaves room for the
  // curved caption above it.
  const padding = CAPTION_GAP + CAPTION_FONT_SIZE + 4;
  const canvas = size + padding * 2;
  const center = canvas / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  // Upper semicircle (left to right, clockwise) that the caption follows.
  const captionRadius = size / 2 + CAPTION_GAP;
  const captionPath =
    `M ${center - captionRadius} ${center} ` +
    `A ${captionRadius} ${captionRadius} 0 0 1 ${
      center + captionRadius
    } ${center}`;

  return (
    <View
      style={{ width: canvas, height: canvas }}
      accessible
      accessibilityLabel={`${caloriesLeft} kilocalories left, ${percentLeft}% of daily goal`}
    >
      <Svg width={canvas} height={canvas}>
        <Defs>
          <Path id={CAPTION_PATH_ID} d={captionPath} />
        </Defs>
        <SvgText fill={colors.textSecondary} fontSize={CAPTION_FONT_SIZE}>
          <TextPath
            href={`#${CAPTION_PATH_ID}`}
            startOffset="38%"
            textAnchor="middle"
          >
            {`${percentLeft}% of daily goal`}
          </TextPath>
        </SvgText>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={colors.primaryTrack}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {progress > 0 && (
          // Rotate so the arc starts at 12 o'clock instead of 3 o'clock.
          <G transform={`rotate(-90 ${center} ${center})`}>
            <Circle
              cx={center}
              cy={center}
              r={radius}
              stroke={colors.primary}
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              fill="none"
            />
          </G>
        )}
      </Svg>
      <View style={styles.center} pointerEvents="none">
        <Text style={styles.value}>{caloriesLeft}</Text>
        <Text style={styles.unit}>kcal left</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  unit: {
    fontSize: 13,
    color: colors.textSecondary,
  },
});
