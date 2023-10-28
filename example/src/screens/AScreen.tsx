import * as React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { StackParamList } from '../App';

export function AScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text nativeID={'a-text'}>A</Text>
      <View
        // android 전용
        aria-labelledby={'red-box'}
        nativeID={'red-box'}
        style={{ backgroundColor: 'red', width: 100, height: 100 }}
      />
      <View nativeID={'red-button'}>
        <Button
          title={'Go to B'}
          color={'red'}
          // @ts-ignore
          nativeID={'red-button'}
        />
      </View>
      <Pressable
        nativeID={'blue-box-container'}
        onPress={() => console.log('!')}
      >
        <>
          <View
            nativeID={'blue-box'}
            style={{ width: 100, height: 100, backgroundColor: 'blue' }}
          />
          <View
            nativeID={'yellow-box'}
            style={{ width: 100, height: 100, backgroundColor: 'yellow' }}
          >
            <View
              nativeID={'green-box'}
              style={{ width: 50, height: 50, backgroundColor: 'green' }}
            />
          </View>
        </>
      </Pressable>
      <Button
        title={'Go to C'}
        onPress={() => {
          navigation.navigate('C');
        }}
      />
      <Button
        title={'Go to D'}
        onPress={() => {
          navigation.navigate('D');
        }}
      />
    </View>
  );
}
