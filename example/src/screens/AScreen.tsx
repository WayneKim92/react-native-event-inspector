import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function AScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>A</Text>
      <Button title={'Go to B'} onPress={() => {
        navigation.navigate('B');
      }} />
    </View>
  );
}
