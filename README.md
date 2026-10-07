# NutriTrack

Nutrition dashboard built with **React Native CLI** and **TypeScript** (strict), using mock data.

## Requirements

- Node.js 22.11 or newer
- Android: Android Studio, an Android SDK and JDK 17+
- iOS (macOS only): Xcode, Ruby/Bundler and CocoaPods

See the official [environment setup guide](https://reactnative.dev/docs/set-up-your-environment).

## Running

```bash
npm install
npm start          # Metro, in one terminal
npm run android    # in another terminal
```

For iOS, install the pods the first time:

```bash
cd ios && bundle install && bundle exec pod install && cd ..
npm run ios
```

## Checks

```bash
npm run typecheck
npm run lint
npm test
```

## Structure

```
index.js                 registers App with AppRegistry
src/
├── App.tsx              SafeAreaProvider + DashboardScreen
├── screens/             DashboardScreen (composition + tab state)
├── components/          presentational components + index.ts barrel
├── types/nutrition.ts   domain interfaces and union types
├── data/mockData.ts     typed mock data
├── theme.ts             color, spacing and radius tokens
└── utils.ts             pure functions (dates, progress, calories)
```

A detailed walkthrough of the code (in Portuguese) is in `NutriTrack-guia-do-codigo.docx`.
