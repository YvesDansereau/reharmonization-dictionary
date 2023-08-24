import { StatusBar } from 'expo-status-bar';
import { PaperProvider, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Top } from './components/Top';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <Top />
      </SafeAreaView>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
