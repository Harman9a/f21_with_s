import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

import TabNavigator from './MainTabNavigator';
import GalleryScreen from '../gallery/GalleryViewContainer';
import AvailableInFullVersion from '../../modules/availableInFullVersion/AvailableInFullVersionViewContainer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';

// import ProfileScreen from '../profile/ProfileViewContainer';
// import ArticleScreen from '../article/ArticleViewContainer';
// import ChatScreen from '../chat/ChatViewContainer';
// import MessagesScreen from '../chat/MessagesViewContainer';
// import ChartsScreen from '../charts/ChartsViewContainer';
// import AuthScreen from '../auth/AuthViewContainer';

import { colors, fonts } from '../../styles';
import AllProductsMain from '../../MainApp/Pages/AllProductsMain';
import SingleProductsMain from '../../MainApp/Pages/SingleProductsMain';
import SearchMain from '../../MainApp/Pages/SearchMain';

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
const headerRightComponentHome = props => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={{ marginHorizontal: 10 }}>
          <FontAwesome5 name="heart" size={25} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPress}>
        <View style={{ marginHorizontal: 10 }}>
          <FontAwesome5 name="shopping-bag" size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const headerRightComponentFillter = props => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={{ marginHorizontal: 10 }}>
          <MaterialIcons name="sort" size={25} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPress}>
        <View style={{ marginHorizontal: 10 }}>
          <FontAwesome5 name="filter" size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const headerRightComponentSingle = props => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={{ marginHorizontal: 10 }}>
          <FontAwesome5 name="shopping-bag" size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const headerBackground = require('../../../assets/images/topBarBg.png');

const StackNavigationData = [
  {
    name: 'Froever 21',
    title: 'Froever 21',
    component: TabNavigator,
    headerLeft: null,
    headerRight: headerRightComponentHome,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      fontSize: 18,
    },
  },

  {
    name: 'Products',
    title: 'New arrival dresses',
    component: AllProductsMain,
    headerLeft: headerLeftComponent,
    headerRight: headerRightComponentFillter,
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
    headerRight: headerRightComponentSingle,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      fontSize: 18,
    },
  },
  {
    name: 'SearchProduct',
    title: '',
    component: SearchMain,
    headerRight: headerRightComponentSingle,
    headerLeft: headerLeftComponent,
    headerBackground: { source: headerBackground },
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      fontSize: 18,
    },
  },
];

export default StackNavigationData;
