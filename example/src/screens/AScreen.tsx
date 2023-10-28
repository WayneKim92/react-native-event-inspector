import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EventView } from 'react-native-event-inspector';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { StackParamList } from '../App';

export function AScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text nativeID={'a-text'}>A</Text>
      <View nativeID={'red-button'}>
        <Button
          title={'Go to B'}
          color={'red'}
          // @ts-ignore
          nativeID={'red-button'}
        />
      </View>
      <EventView eventName={'multi-box'}>
        <View
          style={{
            width: 100,
            height: 20,
            backgroundColor: 'black',
            // flexDirection: 'row',
          }}
        >
          <View style={{ width: 50, height: 20, backgroundColor: 'red' }} />
          <View style={{ width: 50, height: 20, backgroundColor: 'blue' }} />
        </View>

        {/*<View style={{ width: 100, height: 20, backgroundColor: '#778877' }} />*/}
        {/*<View style={{ width: 100, height: 20, backgroundColor: 'blue' }} />*/}
        {/*<View style={{ width: 100, height: 20, backgroundColor: 'purple' }} />*/}
      </EventView>

      <View style={{ height: 50 }} />

      <View
        nativeID={'yellow-box'}
        style={{ width: 100, height: 100, backgroundColor: 'yellow' }}
      >
        <View
          nativeID={'green-box'}
          style={{ width: 50, height: 50, backgroundColor: 'green' }}
        />
      </View>
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
