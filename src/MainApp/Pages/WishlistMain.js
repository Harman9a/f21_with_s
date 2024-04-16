import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button } from 'react-native-paper';

const Wishlist = () => {
  const [WishlistItems, setWishlistItems] = useState([]);
  const State = useSelector(state => state.WishListReducer.WishList);

  useEffect(() => {
    renderData();
  }, []);

  const renderData = () => {
    setWishlistItems(State);
    console.log(State);
  };

  const ProductCart = ({ name, image, size, color }) => {
    return (
      <View>
        <View style={styles.productContainer}>
          <View style={styles.productImageContainer}>
            <View style={styles.productImageIcon}>
              <TouchableOpacity>
                <FontAwesome5 name="heart" size={25} />
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
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productdeials}>Size: {size}</Text>
            <Text style={styles.productdeials}>Color: {color}</Text>
            <Button
              style={styles.productBtn}
              color="black"
              mode="contained"
              onPress={() => {}}
            >
              Move to Bag
            </Button>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View>
        {State.map((item, index) => {
          return (
            <ProductCart
              key={index}
              name={item.name}
              image={item.image}
              size={item.size}
              color={item.color}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  productContainer: {
    padding: 10,
    marginVertical: 10,
    maxWidth: '50%',
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
