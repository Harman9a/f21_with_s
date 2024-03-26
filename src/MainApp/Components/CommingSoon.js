import { View, Text } from 'react-native';
import React from 'react';

const CommingSoon = ({ text }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 18, color: 'black' }}>{text}</Text>
    </View>
  );
};

export default CommingSoon;
