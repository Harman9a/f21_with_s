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
import { encode } from 'base-64';
import { Button } from 'react-native-paper';

const AllProductsView = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [productOptions, setProductOptions] = useState([]);

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
        'https://forever-21-dubai.myshopify.com/admin/api/2024-01/products/7105463353513.json',
        {
          headers: {
            Authorization: `Basic ${encodedCredentials}`,
          },
        },
      )
      .then(res => {
        let product = res.data.product;

        let allImages = [];
        product.images.map(x => {
          allImages.push(x.src);
        });
        let options = product.options;

        options.map(x => {
          x.activeValue = x.values[0];
        });

        setProductImages(allImages);
        setProductOptions(options);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const [value1, setValue] = React.useState(true);

  const handleChange = (name, value) => {
    let options = productOptions;
    options.map(x => {
      if (x.name === name) {
        x.activeValue = value;
      }
    });
    setProductOptions(options);
    setValue(!value1);
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
      {productOptions.map(x => {
        return (
          <View>
            <View>
              <Text style={{ fontSize: 18 }}>{x.name}</Text>
            </View>
            <View style={styles.optionContainer}>
              {x.values.map(y => {
                if (x.activeValue === y) {
                  return (
                    <View style={styles.optoionItem}>
                      <Button
                        style={{ backgroundColor: 'white' }}
                        onPress={() => handleChange(x.name, y)}
                        color="black"
                        mode="outlined"
                      >
                        {y}
                      </Button>
                    </View>
                  );
                } else {
                  return (
                    <View style={styles.optoionItem}>
                      <Button
                        style={{ backgroundColor: 'black' }}
                        onPress={() => handleChange(x.name, y)}
                        color="white"
                        mode="outlined"
                      >
                        {y}
                      </Button>
                    </View>
                  );
                }
              })}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    height: height - 250,
    width: width,
  },
  optionContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  optoionItem: {
    margin: 5,
  },
});

export default AllProductsView;
