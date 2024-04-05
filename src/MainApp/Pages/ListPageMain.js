import React, { useState, useEffect, useRef } from 'react';
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
import { encode } from 'base-64';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Divider, RadioButton } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ListPageMain = ({ navigation, route }) => {
  const [allProducts, setAllProducts] = useState();
  const [collectionID, setCollectionID] = useState();
  const [productType, setProductType] = useState();
  const [allProductsRaw, setAllProductsRaw] = useState();
  const [checked, setChecked] = React.useState('featured');
  const refRBSheet = useRef();

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    setProductType(route.params.type);
    setCollectionID(route.params.id);
    if (route.params.toggleFilter !== undefined) {
      openBottomSheet();
    }
  }, [route]);

  const openBottomSheet = () => {
    refRBSheet.current.open();
  };
  const closeBottomSheet = () => {
    refRBSheet.current.close();
  };

  const renderData = items => {
    let productsArr = [];
    let productsSubArr = [];
    let maxItemInOneRwo = 2;
    let itemInOneRwo = 1;

    items.map((x, i) => {
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
      itemInOneRwo++;
    });

    if (productsSubArr.length >= 2) {
      productsArr.push(productsSubArr);
      productsSubArr = [];
      itemInOneRwo = 0;
    }

    setAllProducts(productsArr);
  };

  const getAllProducts = (sort = '') => {
    const username = process.env.REACT_APP_USERNAME;
    const password = process.env.REACT_APP_PASSWORD;

    const credentials = `${username}:${password}`;
    const encodedCredentials = encode(credentials);

    axios
      .get(
        `${process.env.REACT_APP_SEARCH_URL}/search?q=&collection=${route.params.id}&apiKey=${process.env.REACT_APP_SEARCH_APIKEY}&country=AE&locale=en&getProductDescription=0&skip=0&take=30&${sort}`,
      )
      .then(res => {
        let items = res.data.data.items;
        setAllProductsRaw(items);
        renderData(items);
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

  const handleFilter = type => {
    setChecked(type);
    if (type == 'featured') {
      getAllProducts('');
    }
    if (type == 'lowprice') {
      getAllProducts('sort=price');
    }
    if (type == 'highprice') {
      getAllProducts('sort=-price');
    }
    closeBottomSheet();
  };

  const BootomSheetFilter = () => {
    return (
      <View style={{ padding: 20 }}>
        <View style={styles.radioItemContainer}>
          <Text style={{ fontSize: 18, fontWeight: 600, color: 'black' }}>
            Sort By
          </Text>
          <MaterialIcons name="close" size={25} onPress={closeBottomSheet} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Divider style={{ backgroundColor: 'black' }} />
        </View>
        <View>
          <TouchableOpacity
            style={styles.radioItemContainer}
            onPress={() => handleFilter('featured')}
          >
            <Text style={styles.radioListItem}>Featured</Text>
            <RadioButton
              value="featured"
              color="black"
              status={checked === 'featured' ? 'checked' : 'unchecked'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioItemContainer}
            onPress={() => handleFilter('lowprice')}
          >
            <Text style={styles.radioListItem}>Price: Low to High</Text>
            <RadioButton
              value="lowprice"
              color="black"
              status={checked === 'lowprice' ? 'checked' : 'unchecked'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioItemContainer}
            onPress={() => handleFilter('highprice')}
          >
            <Text style={styles.radioListItem}>Price: High to Low</Text>
            <RadioButton
              value="highprice"
              color="black"
              status={checked === 'highprice' ? 'checked' : 'unchecked'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{
          backgroundColor: colors.white,
          paddingHorizontal: 15,
          marginTop: 15,
        }}
        data={allProducts}
        renderItem={renderRowOne}
      />

      <RBSheet
        ref={refRBSheet}
        animationType={'slide'}
        closeOnDragDown={true}
        openDuration={300}
        closeDuration={300}
      >
        <BootomSheetFilter />
      </RBSheet>
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
  radioListItem: {
    color: 'black',
    fontSize: 16,
  },
  radioItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
});

export default ListPageMain;
