import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { StackParamList } from '../App';

export function CScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CCCCCCC</Text>
      <Button title={'Go to D'} onPress={() => {
        navigation.navigate('D');
      }} />
    </View>
  );
}
