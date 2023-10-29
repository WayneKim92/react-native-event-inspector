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
      <EventView nativeID={'multi_box'}>
        <View style={{ width: 77, height: 77, backgroundColor: 'blue' }}>
          <View style={{ width: 66, height: 66, backgroundColor: 'green' }}>
            <EventView nativeID={'red_box'}>
              <View style={{ width: 55, height: 55, backgroundColor: 'red' }}>
                <View
                  style={{ width: 44, height: 44, backgroundColor: 'yellow' }}
                >
                  <EventView nativeID={'pink_box'}>
                    <View
                      style={{ width: 33, height: 33, backgroundColor: 'pink' }}
                    />
                  </EventView>
                </View>
              </View>
            </EventView>
          </View>
        </View>
      </EventView>

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
