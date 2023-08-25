import { StatusBar } from 'expo-status-bar';
import { PaperProvider, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Top } from './components/Top';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailSeventhToTwoFive } from './components/Detail';
import { PageName } from './types/PageName';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
          <Stack.Navigator initialRouteName='Top'>
            <Stack.Screen name={PageName.Top} component={Top}/>
            <Stack.Screen name={PageName.SeventhToTwoFive} component={DetailSeventhToTwoFive} />
          </Stack.Navigator>
        <StatusBar style="auto" />
      </PaperProvider>
    </NavigationContainer>
  );
}
