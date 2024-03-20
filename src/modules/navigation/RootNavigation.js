import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity } from 'react-native';

import StackNavigationData from './stackNavigationData';

import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator();

export default function NavigatorView(props) {
  const headerLeftComponentMenu = () => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.toggleDrawer()}
        style={{
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
      >
        <Entypo name="menu" size={30} />
      </TouchableOpacity>
    );
  };

  return (
    <Stack.Navigator>
      {StackNavigationData.map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx + 1}`}
          name={item.name}
          component={item.component}
          options={{
            headerLeft: item.headerLeft || headerLeftComponentMenu,
            headerTitleStyle: item.headerTitleStyle,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100 + '%',
    height: Header.height,
  },
});
