import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { colors, fonts } from '../../styles';
import axios from 'axios';
import { Link } from '@react-navigation/native';
import { SliderBox } from 'react-native-image-slider-box';

const AllProductsView = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    // const username = 'ba356e2e1bd2465cf8c43a05edcbf352';
    // const password = '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';

    // const basicAuth = 'Basic ' + base64encode(`${username}:${password}`);

    axios
      .get('https://forever-21-dubai.myshopify.com/products.json')
      .then(res => {
        let productsArr = [];
        let maxItem = 0;

        res.data.products.map((x, i) => {
          if (i <= maxItem) {
            productsArr.push(x);
          }
        });

        let allImages = [];
        productsArr[0].images.map((x, i) => {
          if (i <= 2) {
            allImages.push(x.src);
          }
        });
        setProductImages(allImages);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ScrollView>
      <SliderBox
        // circleLoop
        autoplay={false}
        style={[styles.image]}
        images={productImages}
        ImageComponentStyle={{ resizeMode: 'cover' }}
      />
    </ScrollView>
  );
};
const { width, height } = Dimensions.get('window');
const IMG_HEIGHT = 500;

const styles = StyleSheet.create({
  image: {
    height: height - 250,
    width: width,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tabsContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  itemOneContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - 60,
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

  badge: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default AllProductsView;
