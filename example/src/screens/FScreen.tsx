import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function FScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>FFFFFFFF</Text>
      <Button title={'Go to G'} onPress={() => { navigation.navigate('G')}} />
    </View>
  );
}
