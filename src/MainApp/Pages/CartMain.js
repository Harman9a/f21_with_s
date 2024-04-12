import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-ui-lib';
import { caretHidden } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import { ScrollView } from 'react-native-gesture-handler';

const CartMain = () => {
  const [CartItems, setCartItems] = useState([]);
  const State = useSelector(state => state.CartReducer.Cart);

  const dispatch = useDispatch();

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = () => {
    setCartItems(State);
  };

  const handleClearCart = () => {
    dispatch({
      type: 'EMPTY_CART',
      payload: {},
    });
    setCartItems([]);
  };

  const removeItem = item => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item.id,
    });
    let newCart = CartItems.filter(i => i.id !== item.id);
    setCartItems(newCart);
  };

  return (
    <View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.container}
      >
        <View>
          {/* <Button
          mode="contained"
          onPress={() => handleClearCart()}
          style={styles.addToCartButtonBag}
        >
          Clear
        </Button> */}
        </View>
        {CartItems.map((item, index) => (
          <View key={index}>
            <View
              style={{
                backgroundColor: 'white',
                padding: 10,
                marginVertical: 10,
              }}
            >
              <View style={styles.cartItemContainer}>
                <View style={styles.cartItemImageContainer}>
                  <Image
                    style={styles.headerImage}
                    source={{ uri: item.image }}
                  />
                </View>
                <View style={styles.cartItemDetailsContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.item}>Size: {item.size}</Text>
                  <Text style={styles.item}>Color: {item.color}</Text>
                  <Text style={styles.price}>AED {item.price}</Text>
                  {/* <View
                style={{
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between',
                  marginLeft: 20,
                }}
                >
                <TouchableOpacity>
                <FontAwesome5 name="trash" size={18} color="black" />
                </TouchableOpacity>
              </View> */}
                </View>
              </View>
              <View style={styles.cartItemButtonsContainer}>
                <TouchableOpacity onPress={() => removeItem(item)}>
                  <Text>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>Move To Wishlist</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button
            mode="contained"
            onPress={() => console.log('center')}
            style={styles.addToCartButtonBag}
          >
            Proceed To Checkout
          </Button>
        </View>
      </View>
    </View>
  );
};

export default CartMain;

const styles = StyleSheet.create({
  addToCartButtonBag: {
    backgroundColor: 'black',
    width: '100%',
    padding: 4,
  },
  headerImage: {
    height: 150,
    width: Dimensions.get('window').width / 2 - 120,
  },
  cartItemContainer: {
    backgroundColor: 'white',
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartItemImageContainer: {
    width: 100,
  },
  cartItemDetailsContainer: {
    width: '80%',
    paddingLeft: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',

    marginHorizontal: 5,
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  item: {
    fontSize: 14,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  cartItemButtonsContainer: {
    margin: 10,
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',

    paddingVertical: 20,
    paddingHorizontal: 20,
    // borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  container: {
    height: Dimensions.get('window').height - 50,
  },
});
