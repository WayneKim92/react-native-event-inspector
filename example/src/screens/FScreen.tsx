import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { StackParamList } from '../App';

export function FScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>FFFFFFFF</Text>
      <Button title={'Go to G'} onPress={() => { navigation.navigate('G')}} />
      <Button title={'Go to H'} onPress={() => { navigation.navigate('H')}} />
    </View>
  );
}
