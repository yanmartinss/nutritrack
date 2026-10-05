/* eslint-env jest */
// Safe-area insets are measured natively; the library ships a mock for tests.
jest.mock('react-native-safe-area-context', () =>
  require('react-native-safe-area-context/jest/mock').default,
);
