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
  TextInput,
} from 'react-native';
import { colors, fonts } from '../../styles';
import axios from 'axios';
import { Link } from '@react-navigation/native';
import { encode } from 'base-64';
import { Button } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AllProductsView = ({ navigation }) => {
  const [allProducts, setAllProducts] = useState();
  const [textString, setTextString] = useState('');

  const handleSearch = text => {
    axios
      .get(
        `${process.env.REACT_APP_SEARCH_URL}/instantsearch?q=${text}&apiKey=${process.env.REACT_APP_SEARCH_APIKEY}&country=AE&locale=en&getProductDescription=0&skip=0&take=28`,
      )
      .then(res => {
        let productsArr = [];
        let productsSubArr = [];
        let maxItemInOneRwo = 2;
        let itemInOneRwo = 1;

        res.data.data.items.map((x, i) => {
          if (itemInOneRwo <= maxItemInOneRwo) {
            productsSubArr.push({
              id: i,
              productId: x.id,
              brand: 'Weeknight',
              title: x.title,
              subtitle: '',
              price: `AED ${x.variants[0].price}`,
              priceFrom: true,
              image: 'https://' + x.images[0].url,
            });
          } else {
            productsArr.push(productsSubArr);
            productsSubArr = [];
            itemInOneRwo = 0;
          }
          if (res.data.data.items.length === 1) {
            productsArr.push(productsSubArr);
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
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('SingleProducts', {
            productId: item.productId,
          });
        }}
      >
        {/* <Link to="/SingleProducts"> */}
        <View style={styles.itemOneContainer}>
          <View style={styles.itemOneImageContainer}>
            <Image style={styles.itemOneImage} source={{ uri: item.image }} />
          </View>
          <View style={styles.itemOneContent}>
            <Text style={styles.itemOneTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.itemOnePrice} numberOfLines={1}>
              {item.price}
            </Text>
          </View>
        </View>
        {/* </Link> */}
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
      <TextInput
        autoCapitalize="none"
        placeholder="Search by products & brands"
        style={styles.inputField}
        onChangeText={text => handleSearch(text)}
      />

      {/* <Button
        mode="contained"
        onPress={() => handleSearch()}
        style={{
          backgroundColor: 'black',
          marginTop: 5,
        }}
        labelStyle={{ fontSize: 12 }}
      >
        fetch
      </Button> */}

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
  inputField: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fff',
    margin: 10,
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
