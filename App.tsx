import { StatusBar } from 'expo-status-bar';
import { PaperProvider, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        {/* TODO: add pages */}
      </SafeAreaView>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
