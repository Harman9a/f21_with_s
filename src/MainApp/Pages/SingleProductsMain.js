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
  useWindowDimensions,
} from 'react-native';
import { colors, fonts } from '../../styles';
import axios from 'axios';
import { Link } from '@react-navigation/native';
import { SliderBox } from 'react-native-image-slider-box';
import { encode } from 'base-64';
import { Button } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import ProductsScrollList from '../Components/ProductsScrollList';
import RenderHTML from 'react-native-render-html';

const AllProductsView = ({ route, navigation }) => {
  const [itemNo, setItemNo] = useState(1);
  const [productImages, setProductImages] = useState([]);
  const [productOptions, setProductOptions] = useState([]);
  const [productDetails, setProductDetails] = useState({
    html: '',
  });

  const { productId } = route.params;

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
        `https://forever-21-dubai.myshopify.com/admin/api/2024-01/products/${productId}.json`,
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
        setProductDetails({
          html: product.body_html,
        });
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

  const DivItemCom = ({ icon, text }) => {
    return (
      <View style={styles.divItem}>
        <View>
          <FontAwesome5 name={icon} size={35} color="black" />
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ textAlign: 'center', fontWeight: '500' }}>{text}</Text>
        </View>
      </View>
    );
  };
  const { width } = useWindowDimensions();

  const handleChangeItem = n => {
    if (n === 1) {
      setItemNo(itemNo + 1);
    }
    if (n === 0) {
      if (itemNo !== 1) {
        setItemNo(itemNo - 1);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SliderBox
          // circleLoop
          autoplay={false}
          style={[styles.image]}
          images={productImages}
          ImageComponentStyle={{ resizeMode: 'cover' }}
        />
        {productOptions.map(x => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                marginVertical: 5,
                padding: 8,
              }}
              key={x.name}
            >
              <View>
                <Text style={{ fontSize: 18 }}>{x.name}</Text>
              </View>
              <View style={styles.optionContainer}>
                {x.values.map(y => {
                  if (x.activeValue === y) {
                    return (
                      <View style={styles.optoionItem} key={y}>
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
                  } else {
                    return (
                      <View style={styles.optoionItem} key={y}>
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
                  }
                })}
              </View>
            </View>
          );
        })}
        <View style={styles.divContainer}>
          <DivItemCom icon="star" text="HASSLE FREE RETURNS" />
          <DivItemCom icon="money-bill-alt" text="CASH ON DELIVERY" />
          <DivItemCom icon="truck" text="DELIVERY ACROSS UAE" />
        </View>
        <View style={styles.divContainer}>
          <View style={{ width: '100%' }}>
            <View>
              <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>
                Shipping Information
              </Text>
            </View>
            <Collapse
              style={{
                borderWidth: 1,
                borderColor: '#dbcccc',
                marginVertical: 10,
              }}
            >
              <CollapseHeader>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 4,
                    padding: 8,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: 'black',
                        fontWeight: '400',
                      }}
                    >
                      SHIPPING & RETURN
                    </Text>
                  </View>
                  <View>
                    <FontAwesome5 name="plus" size={15} />
                  </View>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{ padding: 8, marginHorizontal: 4 }}>
                  <View>
                    <View>
                      <Text style={{ color: 'black', fontSize: 16 }}>
                        RETURNS POLICY
                      </Text>
                    </View>
                    <View>
                      <FlatList
                        data={[
                          {
                            name: 'In the case of quality defect, we will repair or replace the item',
                          },
                          {
                            name: 'Refund as per original payment method  provided the item is accompanied by original invoice , product tags and no product damages',
                          },
                          {
                            name: 'Forever 21 will initiate a refund for the purchase to the original payment method. Also, all the purchases made through credit cards and cash on delivery will be refunded in the Online credit option only.',
                          },
                          {
                            name: 'For Buy one get one offer, you can exchange any item with another full-priced item of the same price. These items are not eligible for refund.',
                          },
                          {
                            name: 'The customer will be charged a 20 AED delivery fee on refund',
                          },
                          {
                            name: `We don't provide an option for in-store returns`,
                          },
                        ]}
                        renderItem={({ item }) => (
                          <Text
                            style={styles.item}
                          >{`\u2022 ${item.name}`}</Text>
                        )}
                      />
                    </View>
                  </View>
                </View>
              </CollapseBody>
            </Collapse>
          </View>
        </View>
        <View style={styles.divContainer}>
          <View style={{ width: '100%' }}>
            <View>
              <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>
                Product Information
              </Text>
            </View>
            <Collapse
              style={{
                borderWidth: 1,
                borderColor: '#dbcccc',
                marginVertical: 10,
              }}
            >
              <CollapseHeader>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 4,
                    padding: 8,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: 'black',
                        fontWeight: '400',
                      }}
                    >
                      Product Details
                    </Text>
                  </View>
                  <View>
                    <FontAwesome5 name="plus" size={15} />
                  </View>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{ padding: 8, marginHorizontal: 4 }}>
                  <View>
                    <View>
                      <Text style={{ color: 'black', fontSize: 16 }}>
                        Product Details
                      </Text>
                    </View>
                    <View style={{ padding: 8, fontSize: 15, color: 'black' }}>
                      <RenderHTML
                        contentWidth={width}
                        source={productDetails}
                      />
                    </View>
                  </View>
                </View>
              </CollapseBody>
            </Collapse>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', paddingBottom: 20 }}>
          <View>
            <Text
              style={{
                color: 'black',
                paddingHorizontal: 10,
                paddingTop: 10,
                fontSize: 16,
              }}
            >
              RECENTLY VIEWED PRODUCTS
            </Text>
          </View>
          <View>
            <ProductsScrollList navigation={navigation} />
          </View>
        </View>
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
            onPress={() => handleChangeItem(0)}
            style={styles.addToCartButton2}
          >
            <FontAwesome5 name="minus" size={10} color="black" />
          </Button>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>{itemNo}</Text>
          <Button
            mode="contained"
            onPress={() => handleChangeItem(1)}
            style={styles.addToCartButton2}
          >
            <FontAwesome5 name="plus" size={10} color="black" />
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log('Add to cart pressed')}
            style={styles.addToCartButton}
          >
            Add to Bag
          </Button>
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  item: {
    padding: 8,
    // fontSize: 15,
    // color: 'black',
  },
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
  divContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  divItem: {
    width: '32%',
    height: 125,
    backgroundColor: '#00bffd1f',
    padding: 10,
    alignItems: 'center',
    margin: 3,
    paddingTop: 20,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    // borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  addToCartButton: {
    backgroundColor: 'black',
    width: '50%',
    padding: 7,
  },
  addToCartButton2: {
    backgroundColor: 'white',
    padding: 7,
  },
});

export default AllProductsView;
