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
} from 'react-native';
import { colors, fonts } from '../../styles';
import axios from 'axios';
import { Link } from '@react-navigation/native';

const AllProductsView = () => {
  const [allProducts, setAllProducts] = useState();

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
        let productsSubArr = [];
        let maxItemInOneRwo = 2;
        let itemInOneRwo = 1;

        res.data.products.map((x, i) => {
          if (itemInOneRwo <= maxItemInOneRwo) {
            productsSubArr.push({
              id: i,
              brand: 'Weeknight',
              title: x.title,
              subtitle: '',
              price: `AED ${x.variants[0].price}`,
              priceFrom: true,
              image: x.variants[0].featured_image.src,
            });
          } else {
            productsArr.push(productsSubArr);
            productsSubArr = [];
            itemInOneRwo = 0;
          }
          itemInOneRwo++;
        });

        setAllProducts(productsArr);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderRowOne = rowData => {
    const cellViews = rowData.item.map(item => (
      <TouchableOpacity key={item.id}>
        <Link to="/SingleProducts">
          <View style={styles.itemOneContainer}>
            <View style={styles.itemOneImageContainer}>
              <Image style={styles.itemOneImage} source={{ uri: item.image }} />
            </View>
            <View style={styles.itemOneContent}>
              <Text style={styles.itemOneTitle} numberOfLines={1}>
                {item.title}
              </Text>
              {/* <Text style={styles.itemOneSubTitle} numberOfLines={3}>
              {item.subtitle}
            </Text> */}
              <Text style={styles.itemOnePrice} numberOfLines={1}>
                {item.price}
              </Text>
            </View>
          </View>
        </Link>
      </TouchableOpacity>
    ));
    return (
      <View key={rowData.item.id} style={styles.itemOneRow}>
        {cellViews}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ backgroundColor: colors.white, paddingHorizontal: 15 }}
        data={allProducts}
        renderItem={renderRowOne}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
