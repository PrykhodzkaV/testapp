import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AppProvider } from '@/context';

import { MainScreen } from './src/screens';

import { styles } from './App.styles';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
        <AppProvider>
          <MainScreen />
        </AppProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

export default App;
