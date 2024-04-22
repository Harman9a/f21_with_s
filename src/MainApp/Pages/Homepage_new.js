import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Text,
  Image,
  Dimensions,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Link } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-ui-lib';
import { SliderBox } from 'react-native-image-slider-box';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ProductsScrollList from '../Components/ProductsScrollList';
import { Badge, Button } from 'react-native-paper';
import { useSelector } from 'react-redux';

export default function Homepage_new({ navigation }) {
  const State = useSelector(state => state.WishListReducer.WishList);
  const collectionArr = [
    {
      id: 1,
      collection: 400760078569,
      name: 'CO-ORDS',
      src: require('../../../assets/images/type1.jpg'),
    },
    {
      id: 2,
      collection: 268275810473,
      name: 'DRESS',
      src: require('../../../assets/images/type2.jpg'),
    },
    {
      id: 3,
      collection: 269161136297,
      name: 'TOPS',
      src: require('../../../assets/images/type3.jpg'),
    },
    {
      id: 4,
      collection: 269163856041,
      name: 'JACKETS',
      src: require('../../../assets/images/type4.jpg'),
    },
    {
      id: 5,
      collection: 404680999145,
      name: 'T-shirts',
      src: require('../../../assets/images/type5.jpg'),
    },
    {
      id: 6,
      collection: 269163954345,
      name: 'Active',
      src: require('../../../assets/images/type6.jpg'),
    },
    {
      id: 7,
      collection: 271435530409,
      name: 'Accessories',
      src: require('../../../assets/images/type7.jpg'),
    },
    {
      id: 8,
      collection: 268277743785,
      name: 'MEN',
      src: require('../../../assets/images/type8.jpg'),
    },
    {
      id: 9,
      collection: 424390197481,
      name: 'SALE',
      src: require('../../../assets/images/type9.gif'),
    },
  ];

  const CollectionItem = ({ imgsrc, name }) => {
    return (
      <View>
        <View>
          <Image source={imgsrc} style={styles.image} />
          <Text style={styles.imageConatiner}>{name}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchProduct')}
          style={{ width: '90%' }}
        >
          <TextInput
            autoCapitalize="none"
            placeholder="Search Item"
            style={styles.inputField}
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchProduct')}
          style={{ width: '10%' }}
        >
          <View style={{ position: 'relative' }}>
            <Badge style={{ position: 'absolute', top: -10, right: 6 }}>
              {State.length}
            </Badge>
            <FontAwesome5
              name="heart"
              size={25}
              onPress={() => {
                navigation.navigate('Wishlist', {});
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={styles.imagebanner}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ListPage', {
                  type: 'WOMEN',
                  id: 418409939177,
                })
              }
            >
              <Image
                source={require('../../../assets/images/slider3.jpg')}
                style={{ width: '100%', height: 200 }} // Adjust height as needed
                // resizeMode="contain" // Adjust resizeMode as needed
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 0,
            paddingHorizontal: 16,
            // paddingVertical: 10,
          }}
        >
          {collectionArr.map(x => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ListPage', {
                    type: 'WOMEN',
                    id: x.collection,
                  })
                }
              >
                <CollectionItem key={x.id} imgsrc={x.src} name={x.name} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={styles.imagebanner}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ListPage', {
                  type: 'WOMEN',
                  id: 268276990121,
                })
              }
            >
              <Image
                source={require('../../../assets/images/elevate_your_style.jpg')}
                style={{ width: '100%', height: 200 }} // Adjust height as needed
                // resizeMode="contain" // Adjust resizeMode as needed
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', paddingBottom: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingTop: 10,
            }}
          >
            <Text
              style={{
                color: 'black',
                fontSize: 16,
              }}
            >
              FRESHPICKS
            </Text>
          </View>
          <View>
            <ProductsScrollList
              navigation={navigation}
              collection="276968997033"
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ListPage', {
                type: 'WOMEN',
                id: 426572185833,
              })
            }
          >
            <Image
              source={require('../../../assets/images/prespring_banner.png')}
              resizeMode={'cover'}
              style={styles.imagebanner}
            />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: 'white', paddingBottom: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingTop: 10,
            }}
          >
            <Text
              style={{
                color: 'black',
                fontSize: 16,
              }}
            >
              ACTIVE ESSENTIALS
            </Text>
          </View>
          <View>
            <ProductsScrollList
              navigation={navigation}
              collection="269163954345"
            />
          </View>
        </View>
        <View>
          <Image
            source={require('../../../assets/images/bundle_offer.jpg')}
            resizeMode={'cover'}
            style={styles.imagebanner}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 80,
  },
  inputField: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fff',
    margin: 10,
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  banner: {
    height: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    // marginVertical: 5,
  },
  btnOutlineText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },
  imageConatiner: {
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  RowContainer: {
    // backgroundColor: 'white',
    // paddingVertical: 10,
    // borderWidth: 0.5,
    // borderColor: '#735f5fc9',
    // margin: 10,
    // borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    width: 85,
    height: 85,
    margin: 10,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  imagebanner: {
    height: 200,
    width: Dimensions.get('window').width,
  },
  itemOneImageContainer: {
    borderRadius: 3,
    overflow: 'hidden',
  },
  itemOneContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneImageContainer: {
    borderRadius: 3,
    overflow: 'hidden',
  },
  itemOneImage: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 60,
  },
  itemOneTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneSubTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 13,
    color: '#B2B2B2',
    marginVertical: 3,
  },
  itemOnePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  itemOneContent: {
    marginTop: 5,
    marginBottom: 10,
  },
});
