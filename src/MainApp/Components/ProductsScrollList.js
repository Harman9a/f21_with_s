import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { encode } from 'base-64';
import { colors, fonts } from '../../styles';

const ProductsScrollList = ({ navigation }) => {
  const [allProducts, setAllProducts] = useState([]);

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

  return (
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
            <TouchableOpacity
              key={i}
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('SingleProducts', {
                  productId: product.id,
                });
              }}
            >
              {/* <Link to="/SingleProducts"> */}
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
              {/* </Link> */}
            </TouchableOpacity>
          );
        }
      })}
    </ScrollView>
  );
};

export default ProductsScrollList;

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
