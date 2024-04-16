import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import TabNavigator from './MainTabNavigator';
import { fonts } from '../../styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AllProductsView from '../../MainApp/Pages/AllProductsMain';
import SingleProductsMain from '../../MainApp/Pages/SingleProductsMain';
import SearchMain from '../../MainApp/Pages/SearchMain';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ListPageMain from '../../MainApp/Pages/ListPageMain';
import CartMain from '../../MainApp/Pages/CartMain';
import Wishlist from '../../MainApp/Pages/WishlistMain';
import Homepage_new from '../../MainApp/Pages/Homepage_new';

const Stack = createStackNavigator();

export default function NavigatorView(props) {
  const [toggleFilter, setToggleFilter] = useState(false);

  const headerLeftComponentMenu = () => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => props.navigation.toggleDrawer()}
          style={{
            paddingLeft: 20,
            paddingVertical: 12,
          }}
        >
          <Entypo name="menu" size={30} />
        </TouchableOpacity>
        <Image
          style={styles.headerImage}
          source={require('../../../assets/images/logo.png')}
        />
      </View>
    );
  };

  const headerRightComponentHome = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <View style={{ marginHorizontal: 10 }}>
            <FontAwesome5
              name="heart"
              size={25}
              onPress={() => {
                props.navigation.navigate('Wishlist', {});
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Cart', {});
          }}
        >
          <View style={{ marginHorizontal: 10 }}>
            <FontAwesome5 name="shopping-bag" size={25} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const headerRightComponentFillter = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            setToggleFilter(!toggleFilter);
            props.navigation.navigate('Products', {
              toggleFilter: toggleFilter,
            });
          }}
        >
          <View style={{ marginHorizontal: 10 }}>
            <MaterialIcons name="sort" size={25} />
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <View style={{ marginHorizontal: 10 }}>
            <FontAwesome5 name="filter" size={25} />
          </View>
        </TouchableOpacity> */}
      </View>
    );
  };

  const headerRightComponentSingle = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            setToggleFilter(!toggleFilter);
            props.navigation.navigate('ListPage', {
              toggleFilter: toggleFilter,
            });
          }}
        >
          <View style={{ marginHorizontal: 10 }}>
            <MaterialIcons name="sort" size={25} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const headerRightComponentCart = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Cart', {});
          }}
        >
          <View style={{ marginHorizontal: 10 }}>
            <FontAwesome5 name="shopping-bag" size={25} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

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
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Froever 21"
        component={TabNavigator}
        options={{
          headerTitle: '',
          headerLeft: headerLeftComponentMenu,
          headerRight: headerRightComponentHome,
          headerTitleStyle: {
            fontFamily: fonts.primaryRegular,
            fontSize: 18,
          },
        }}
      /> */}
      <Stack.Screen
        name="Froever 21"
        component={TabNavigator}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Products"
        component={AllProductsView}
        options={{
          headerTitle: 'New arrival dresses',
          headerLeft: headerLeftComponent,
          headerRight: headerRightComponentFillter,
          headerTitleStyle: {
            fontFamily: fonts.primaryRegular,
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="SingleProducts"
        component={SingleProductsMain}
        options={{
          headerTitle: '',
          headerLeft: headerLeftComponent,
          headerRight: headerRightComponentCart,
          headerTitleStyle: {
            fontFamily: fonts.primaryRegular,
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="ListPage"
        component={ListPageMain}
        options={{
          headerTitle: '',
          headerLeft: headerLeftComponent,
          headerRight: headerRightComponentSingle,
          headerTitleStyle: {
            fontFamily: fonts.primaryRegular,
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="SearchProduct"
        component={SearchMain}
        options={{
          headerTitle: '',
          headerLeft: headerLeftComponent,
          headerRight: null,
          headerTitleStyle: {
            fontFamily: fonts.primaryRegular,
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartMain}
        options={{
          headerTitle: '',
          headerLeft: headerLeftComponent,
          headerRight: null,
          headerTitleStyle: {
            fontFamily: fonts.primaryRegular,
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerTitle: '',
          headerLeft: headerLeftComponent,
          headerRight: null,
          headerTitleStyle: {
            fontFamily: fonts.primaryRegular,
            fontSize: 18,
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerImage: {},
});
