import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AScreen } from './screens/AScreen';
import { BScreen } from './screens/BScreen';
import { CScreen } from './screens/CScreen';
import { DScreen } from './screens/DScreen';
import { EScreen } from './screens/EScreen';
import { FScreen } from './screens/FScreen';
import { GScreen } from './screens/GScreen';
import { HScreen } from './screens/HScreen';
import { IScreen } from './screens/IScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}
      <Stack.Navigator>
        <Stack.Screen name='A' component={AScreen} />
        <Stack.Screen name='B' component={BScreen} />
        <Stack.Screen name='C' component={CScreen} />
        <Stack.Screen name='D' component={DScreen} />
        <Stack.Screen name='E' component={EScreen} />
        <Stack.Screen name='F' component={FScreen} />
        <Stack.Screen name='G' component={GScreen} />
        <Stack.Screen name='H' component={HScreen} />
        <Stack.Screen name='I' component={IScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
