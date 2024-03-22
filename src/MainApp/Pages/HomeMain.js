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
// import { encode as base64encode } from 'base-64';
import axios from 'axios';
import { encode } from 'base-64';

export default function HomeMain({ isExtended, setIsExtended }) {
  const [allProducts, setAllProducts] = useState([]);
  const collectionArr = [
    {
      id: 1,
      name: 'TOPS & TEES',
      src: require('../../../assets/images/F21_TopsTees_M.png'),
    },
    {
      id: 2,
      name: 'DRESS',
      src: require('../../../assets/images/FOREVER_M_CAT_DRESSES.png'),
    },
    {
      id: 3,
      name: 'JEANS',
      src: require('../../../assets/images/F21_Jeans_M.png'),
    },
    {
      id: 4,
      name: 'BOTTOM WEAR',
      src: require('../../../assets/images/F21_Bottomwear_M.png'),
    },
    {
      id: 5,
      name: 'ACTIVE WEAR',
      src: require('../../../assets/images/F21_Activewear_M.png'),
    },
    {
      id: 6,
      name: '1 PIECE',
      src: require('../../../assets/images/F21_1_Piece_M.png'),
    },
    {
      id: 7,
      name: 'SLEEPWEAR',
      src: require('../../../assets/images/F21_SleepwearLingerie_M.png'),
    },
  ];

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    const username = 'ba356e2e1bd2465cf8c43a05edcbf352';
    const password = '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';

    const credentials = `${username}:${password}`;
    const encodedCredentials = encode(credentials);

    axios
      .get(
        'https://forever-21-dubai.myshopify.com/admin/api/2024-01/products.json',
        {
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
        },
      )
      .then(res => {
        setAllProducts(res.data.products);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
      <TextInput
        autoCapitalize="none"
        placeholder="Search Item"
        style={styles.inputField}
      />
      <ScrollView>
        <View style={styles.banner}>
          <Text style={styles.btnOutlineText}>
            Buy Now Pay Later With Tabby
          </Text>
        </View>
        {/* <View style={styles.itemOneImageContainer}>
          <Image
            source={require('../../../assets/images/slider3.jpg')}
            style={styles.imagebanner}
          />
        </View> */}

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
              <Link to="/Products">
                <CollectionItem key={x.id} imgsrc={x.src} name={x.name} />
              </Link>
            );
          })}
        </ScrollView>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={styles.imagebanner}>
            <Image
              source={require('../../../assets/images/slider3.jpg')}
              style={{ width: '100%', height: 200 }} // Adjust height as needed
              // resizeMode="contain" // Adjust resizeMode as needed
            />
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 10,
            paddingHorizontal: 10,
            marginVertical: 20,
          }}
        >
          {allProducts.map((product, i) => {
            if (i < 10) {
              return (
                <TouchableOpacity key={i}>
                  <Link to="/SingleProducts">
                    <View style={styles.itemOneContainer}>
                      <View style={styles.itemOneImageContainer}>
                        <Image
                          style={styles.itemOneImage}
                          source={{
                            uri: product.image.src,
                          }}
                        />
                      </View>
                      <View style={styles.itemOneContent}>
                        <Text style={styles.itemOneTitle} numberOfLines={1}>
                          {product.title}
                        </Text>
                        <Text style={styles.itemOnePrice} numberOfLines={1}>
                          AED {product.variants[0].price}
                        </Text>
                      </View>
                    </View>
                  </Link>
                </TouchableOpacity>
              );
            }
          })}
        </ScrollView>
        <View>
          <Image
            source={require('../../../assets/images/preSpring.jpg')}
            resizeMode={'cover'}
            style={styles.imagebanner}
          />
        </View>
        <View>
          <SliderBox
            autoplay
            // circleLoop
            dotStyle={{ display: 'none' }}
            images={[
              require('../../../assets/images/banner.gif'),
              require('../../../assets/images/slider4.jpg'),
            ]}
            ImageComponentStyle={{ resizeMode: 'cover' }}
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
    width: 120,
    height: 120,
    resizeMode: 'contain',
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
