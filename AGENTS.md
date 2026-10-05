This is a React Native CLI application (no Expo) written in TypeScript (strict). Prioritize mobile-first patterns, performance, and cross-platform compatibility.

## Rules

- Do not add Expo packages or Expo-only APIs (`expo-*`, Expo Router, EAS). The project uses plain React Native CLI.
- `android/` and `ios/` are committed native projects. Edit them only when a native change is actually required.
- Keep runtime dependencies minimal. Current UI libraries: `react-native-svg`, `react-native-safe-area-context`.
- After adding a library with native code: run `cd ios && bundle exec pod install` for iOS and rebuild the app (`npm run android` / `npm run ios`).
- Imports inside `src/` use relative paths (no path alias is configured in Babel/Metro).

## Structure

- `index.js` registers `src/App.tsx` with `AppRegistry`.
- `src/types` (domain interfaces), `src/data` (mock data), `src/theme` (tokens), `src/utils` (pure functions), `src/components` (presentational, typed props, barrel in `index.ts`), `src/screens` (composition + screen state).
- Components receive data through props and never import `src/data` directly. Displayed values are computed from data, not hardcoded in JSX.

## Commands

```bash
npm install            # install dependencies
npm start              # start Metro
npm run android        # build and run on Android
npm run ios            # build and run on iOS (macOS only)
npm run typecheck      # tsc --noEmit
npm run lint           # eslint
npm test               # jest
```

Run typecheck, lint and tests before declaring any task done.
