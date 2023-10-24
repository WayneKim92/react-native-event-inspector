import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function CScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CCCCCCC</Text>
      <Button title={'Go to D'} onPress={() => {
        navigation.navigate('D');
      }} />
    </View>
  );
}
