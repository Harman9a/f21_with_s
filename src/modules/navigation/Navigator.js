import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import NavigatorView from './RootNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Button, RadioGroup, Dropdown } from '../../components';

import AvailableInFullVersion from '../../modules/availableInFullVersion/AvailableInFullVersionViewContainer';

const iconHome = require('../../../assets/images/drawer/home.png');
const iconCalendar = require('../../../assets/images/drawer/calendar.png');
const iconGrids = require('../../../assets/images/drawer/grids.png');
const iconPages = require('../../../assets/images/drawer/pages.png');
const iconComponents = require('../../../assets/images/drawer/components.png');
const iconSettings = require('../../../assets/images/drawer/settings.png');
const iconBlog = require('../../../assets/images/drawer/blog.png');

const drawerData = [
  {
    name: 'Home',
    icon: iconHome,
  },
  {
    name: 'Calendar',
    icon: iconCalendar,
  },
  {
    name: 'Grids',
    icon: iconGrids,
  },
  {
    name: 'Pages',
    icon: iconPages,
  },
  {
    name: 'Components',
    icon: iconComponents,
  },
];

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row-reverse',
          marginHorizontal: 15,
          marginVertical: 10,
        }}
      >
        <AntDesign
          name="close"
          size={30}
          onPress={() => props.navigation.closeDrawer()}
        />
      </View>
      <DrawerContentScrollView {...props} style={{ padding: 0 }}>
        <View style={styles.container}>
          <View
            style={[styles.row, { alignItems: 'center', marginHorizontal: 5 }]}
          >
            <View style={styles.row}>
              <Image
                style={styles.avatar}
                source={require('../../../assets/images/drawer/user.png')}
              />
              <View style={{ paddingLeft: 15 }}>
                <Text style={styles.userName}>Harmanpreet Singh</Text>
                <Text style={{ color: '#000', fontSize: 11 }}>
                  Save, Shop and View Orders
                </Text>
              </View>
            </View>
            <Icon name="angle-right" size={20} />
          </View>
          {/* <Image
            style={styles.avatar}
            source={require('../../../assets/images/drawer/user.png')}
          />
          <View style={{ paddingLeft: 15 }}>
            <Text style={styles.userName}>Harmanpreet Singh</Text>
            <Text style={{ color: '#000', fontSize: 11 }}>
              Save, Shop and View Orders
            </Text>
          </View> */}
        </View>
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>WOMEN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>MEN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Plus+Curve</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Beauty & Accessories</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>shop by product</Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="angle-right" size={20} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>shop by occasion</Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="angle-right" size={20} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>shop by style</Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="angle-right" size={20} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>collabs</Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="angle-right" size={20} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>new Arrivals</Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="angle-right" size={20} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>shop by price</Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="angle-right" size={20} />
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>my wishlist</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>contact us by email</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>contact us by phone</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.menuItem}>
              <Text style={styles.menuText}>invite your friend</Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.divider}></View>
      <View>
      <Button caption="Button" onPress={() => {}} />
      </View>
      <View style={styles.divider}></View> */}
      </DrawerContentScrollView>
    </>
  );
}

export default function App() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: '90%',
        // backgroundColor: '#3C38B1',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Homes" component={NavigatorView} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menuTitle: {
    marginLeft: 10,
    color: '#000',
  },
  menuLabelFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
  userName: {
    color: '#000',
    fontSize: 18,
  },
  divider: {
    borderBottomColor: '#735f5fc9',
    opacity: 0.2,
    borderBottomWidth: 1,
    margin: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
    borderWidth: 0.5,
    borderColor: '#735f5fc9',
    padding: 15,
    borderRadius: 8,
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: '#735f5fc9',
    margin: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  item: {
    flex: 1,
    height: 55,
    borderColor: 'black',
    backgroundColor: 'black',
    color: 'white',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },

  itemText: {
    color: 'white',
  },
  menuText: {
    textTransform: 'uppercase',
    color: 'black',
  },
  menuItem: {
    padding: 5,
  },
});
