import React from 'react';
import { Appbar } from 'react-native-paper';
import { colors } from '../../styles';

const AppBarMain = ({ title }) => {
  return (
    <Appbar.Header
      style={{
        backgroundColor: 'white',
      }}
    >
      <Appbar.Content
        title={title}
        titleStyle={{
          color: colors.primary,
          fontSize: 18,
          fontWeight: '100',
        }}
      />
    </Appbar.Header>
  );
};

export default AppBarMain;
