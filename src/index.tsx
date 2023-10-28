import * as React from 'react';
import { View } from 'react-native';

interface RNEventInspectorProps {
  children: React.ReactElement;
  focusedScreenListener?: () => void;
}

export function RNEventInspector(props: RNEventInspectorProps) {
  return (
    <View
      style={{ flex: 1 }}
      onTouchStart={(e) => {
        // @ts-ignore
        const currentInst = e._targetInst;

        if (!currentInst) {
          return;
        }

        const currentInstProps = currentInst.memoizedProps;
        const nativeId = currentInstProps.nativeID;
        console.log('🐞nativeId', nativeId);

        if (!nativeId) {
          return;
        }

        // TODO: Event History 객체에 정보를 저장하자.
      }}
    >
      {props.children}
    </View>
  );
}

/*
  Target
  1. 사전에 정의 된 내용을 기반으로 이벤트를 추적 할 수 있다.
  2. 추적 된 이벤트를 통해 진입 경로를 알 수 있다.
  3. 추적 된 이벤트를 통해 이벤트를 재현 할 수 있다.
  4. 추적 된 이벤트를 JSON 형식으로 export 하거나 import 할 수 있다.

  - 이벤트 추적하기
  - 추적 이벤트 형식 정리하기
  - 이벤트 타입 ( Build In Event 객체 이용하자 )
    - type : navigation, click, scroll,
    - options

    ex) navigation
    - type: navigation
    - options: {
        type: 'stack' | 'bottom tab' ...
        params: any
      }

    ex) click
    - type: click
    - options: {
        type:
      }

  Integration
  1. React Navigation과 통합 할 수 있다.
  2. React Navigation의 이벤트를 추적 할 수 있다.
  3. 추적 된 이벤트를 통해 React Navigation의 이벤트를 재현 할 수 있다.
 */
