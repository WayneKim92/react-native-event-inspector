import * as React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EventView } from 'react-native-event-inspector';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { StackParamList } from '../App';

export function AScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text nativeID={'a-text'}>A</Text>
      <EventView nativeID={'multi-box'}>
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
                />
              </EventView>

              {/*<View style={{ flexGrow: 1, backgroundColor: 'red' }} />*/}

              <EventView nativeID={'green-box'}>
                <View
                  style={{ width: 30, height: 30, backgroundColor: 'green' }}
                />
              </EventView>
            </View>
            <View nativeID={'red-button'}>
              <Button
                title={'Go to B'}
                color={'red'}
                // nativeID 미지원
                onPress={() => {
                  navigation.navigate('B');
                  console.log(
                    '🐞버튼은 nativeID props EevntView가 유효하지 않음'
                  );
                }}
              />
              <Pressable
                onPress={() => {
                  console.log('🐞EevntView가 유효함');
                  navigation.navigate('B');
                }}
              >
                <View
                  style={{ width: 10, height: 10, backgroundColor: 'black' }}
                />
              </Pressable>
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
