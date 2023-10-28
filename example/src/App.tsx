import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RNEventInspector } from 'react-native-event-inspector';
import { AScreen } from './screens/AScreen';
import { BScreen } from './screens/BScreen';
import { CScreen } from './screens/CScreen';
import { DScreen } from './screens/DScreen';
import { EScreen } from './screens/EScreen';
import { FScreen } from './screens/FScreen';
import { GScreen } from './screens/GScreen';
import { HScreen } from './screens/HScreen';

export type TabParamList = {
  Left: undefined;
  Right: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();

export type StackParamList = {
  A: undefined;
  B: undefined;
  C: undefined;
  D: undefined;
  E: undefined;
  F: undefined;
  G: undefined;
  H: undefined;
};
const Stack = createNativeStackNavigator<StackParamList>();

function LeftBottomTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="A" component={AScreen} />
      <Stack.Screen name="B" component={BScreen} />
      <Stack.Screen name="C" component={CScreen} />
      <Stack.Screen name="D" component={DScreen} />
    </Stack.Navigator>
  );
}

function RightBottomTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="E" component={EScreen} />
      <Stack.Screen name="F" component={FScreen} />
      <Stack.Screen name="G" component={GScreen} />
      <Stack.Screen name="H" component={HScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RNEventInspector>
        <Tab.Navigator>
          <Tab.Screen name={'Left'} component={LeftBottomTab} />
          <Tab.Screen name={'Right'} component={RightBottomTab} />
        </Tab.Navigator>
      </RNEventInspector>
    </NavigationContainer>
  );
}
