import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import TabNavigator from './MainTabNavigator';
import GalleryScreen from '../gallery/GalleryViewContainer';
import AvailableInFullVersion from '../../modules/availableInFullVersion/AvailableInFullVersionViewContainer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import ProfileScreen from '../profile/ProfileViewContainer';
// import ArticleScreen from '../article/ArticleViewContainer';
// import ChatScreen from '../chat/ChatViewContainer';
// import MessagesScreen from '../chat/MessagesViewContainer';
// import ChartsScreen from '../charts/ChartsViewContainer';
// import AuthScreen from '../auth/AuthViewContainer';

import { colors, fonts } from '../../styles';
import AllProductsMain from '../../MainApp/Pages/AllProductsMain';
import SingleProductsMain from '../../MainApp/Pages/SingleProductsMain';

const headerLeftComponent = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 12,
      }}
    >
      <MaterialIcons name="arrow-back" size={30} />
    </TouchableOpacity>
  );
};

const headerBackground = require('../../../assets/images/topBarBg.png');

const StackNavigationData = [
  {
    name: 'Froever 21',
    title: 'Froever 21',
    component: TabNavigator,
    headerLeft: null,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      fontSize: 18,
    },
  },

  {
    name: 'Products',
    title: 'Products',
    component: AllProductsMain,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      fontSize: 18,
    },
  },
  {
    name: 'SingleProducts',
    title: '',
    component: SingleProductsMain,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      fontSize: 18,
    },
  },
];

export default StackNavigationData;
