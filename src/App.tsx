import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { dashboard } from './data/mockData';
import { DashboardScreen } from './screens/DashboardScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <DashboardScreen data={dashboard} />
    </SafeAreaProvider>
  );
}
