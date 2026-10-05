export const colors = {
  primary: '#3DBE6B',
  primaryTrack: '#D3EFDC',
  headerGradientStart: '#DDF3E2',
  headerGradientEnd: '#F1FAF3',
  background: '#EEF0F2',
  surface: '#FFFFFF',
  textPrimary: '#1E2421',
  textSecondary: '#5E6762',
  textMuted: '#8A928D',
  onPrimary: '#FFFFFF',
  border: '#E2E5E8',
  shadow: '#000000',
} as const;

export type ColorToken = keyof typeof colors;
