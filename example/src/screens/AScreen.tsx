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
      <EventView nativeID={'pink-box'}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'pink',
            justifyContent: 'space-between',
          }}
        >
          <EventView nativeID={'gold-box'}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'gold',
              }}
            >
              <EventView nativeID={'blue-box'}>
                <View
                  style={{ width: 30, height: 30, backgroundColor: 'blue' }}
                >
                  <EventView nativeID={'orange-box'}>
                    <View
                      style={{
                        width: 15,
                        height: 15,
                        backgroundColor: 'orange',
                      }}
                    >
                      <EventView nativeID={'box-999999'}>
                        <View
                          style={{
                            width: 10,
                            height: 5,
                            backgroundColor: 'red',
                          }}
                        />
                        <View
                          style={{
                            width: 10,
                            height: 5,
                            backgroundColor: 'pink',
                          }}
                        />
                        <View
                          style={{
                            width: 10,
                            height: 5,
                            backgroundColor: 'green',
                          }}
                        />
                      </EventView>
                    </View>
                  </EventView>
                </View>
              </EventView>

              <EventView nativeID={'green-box'}>
                <View
                  style={{ width: 30, height: 30, backgroundColor: 'green' }}
                >
                  <EventView nativeID={'box-444444'}>
                    <View
                      style={{
                        width: 15,
                        height: 15,
                        backgroundColor: '#444444',
                      }}
                    />
                  </EventView>
                </View>
              </EventView>
            </View>
          </EventView>
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
