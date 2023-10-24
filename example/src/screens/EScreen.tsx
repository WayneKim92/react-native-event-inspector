import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function EScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>EEEEEE</Text>
      <Button title={'Go to F'} onPress={() => {
        navigation.navigate('F');
      }}/>
    </View>
  );
}
