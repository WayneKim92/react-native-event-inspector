import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function GScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>GGGGGGGG</Text>
      <Button title={'Go to H'} onPress={() => { navigation.navigate('H')}} />
    </View>
  );
}
