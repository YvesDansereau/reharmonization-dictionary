import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { Top } from './components/Top';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail } from './components/Detail';
import { NavigationStackParamList } from './types/NavigationStackParamList';

const Stack = createNativeStackNavigator<NavigationStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName='Top'>
          <Stack.Screen name='Top' component={Top} />
          <Stack.Screen name='Detail' component={Detail} options={({ route }) => ({ title: route.params.name })} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </PaperProvider>
    </NavigationContainer>
  );
}
