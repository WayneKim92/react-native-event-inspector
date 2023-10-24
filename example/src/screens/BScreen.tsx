import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp} from '@react-navigation/native-stack';
import type { StackParamList } from '../App';

export function BScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>BBBBBBB</Text>
      <Button title={'Go to C'} onPress={() => {
        navigation.navigate('C');
      }} />
      <Button title={'Go to D'} onPress={() => {
        navigation.navigate('D');
      }} />
    </View>
  );
}
