import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { encode } from 'base-64';
import axios from 'axios';

const ProductCompDesign = ({ id, name, image, price }) => {
  const State = useSelector(state => state.WishListReducer.WishList);
  const dispatch = useDispatch();

  const [itemAdd, setItemAdd] = useState(false);

  useEffect(() => {
    checkItemExistWishlist();
  }, []);

  const checkItemExistWishlist = () => {
    State.map(x => {
      if (x.id == id) {
        setItemAdd(true);
      }
    });
  };

  const getAllProducts = id => {
    const username = process.env.REACT_APP_USERNAME;
    const password = process.env.REACT_APP_PASSWORD;

    const credentials = `${username}:${password}`;
    const encodedCredentials = encode(credentials);

    axios
      .get(
        `${process.env.REACT_APP_HOST_URL}/admin/api/2024-01/products/${id}.json`,
        {
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
        },
      )
      .then(res => {
        let product = res.data.product;
        dispatch({
          type: 'MOVE_TO_WISHLIST',
          payload: {
            id,
            name,
            image,
            price,
            size: product.variants[0].option1,
            color: product.variants[0].option2,
          },
        });
        setItemAdd(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleMoveWishlist = () => {
    getAllProducts(id);
  };

  const removehandleMoveWishlist = () => {
    dispatch({
      type: 'REMOVE_WISHLIST_ITEM',
      payload: id,
    });
    setItemAdd(false);
  };

  return (
    <View style={styles.productContainer}>
      <View style={styles.productImageContainer}>
        <View style={styles.productImageIcon}>
          <TouchableOpacity>
            {itemAdd == true ? (
              <FontAwesome5
                name="heart"
                size={25}
                color="#d70000"
                onPress={() => removehandleMoveWishlist()}
              />
            ) : (
              <FontAwesome5
                name="heart-o"
                size={25}
                onPress={() => handleMoveWishlist()}
              />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Image
            style={styles.productImage}
            source={{
              uri: image,
            }}
          />
        </View>
      </View>
      <View style={styles.productDataContainer}>
        <Text style={styles.productName} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.productdeials}>{price}</Text>
      </View>
    </View>
  );
};

export default ProductCompDesign;

const styles = StyleSheet.create({
  productContainer: {
    marginVertical: 10,
    width: 200,
  },
  productImage: {
    height: 250,
    width: Dimensions.get('window').width / 2 - 50,
  },
  productImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

    position: 'relative',
  },
  productImageIcon: {
    position: 'absolute',
    top: 10,
    right: 30,
    zIndex: 1,
  },
  productDataContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productBtn: {
    marginTop: 10,
    backgroundColor: 'black',
    width: '100%',
  },
  productsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
