import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import AppBarMain from '../Components/AppBarMain';
import MyCollapase from '../Components/MyCollapase';
import { Searchbar } from 'react-native-paper';

const CategotiesMain = props => {
  const productDataWomen = [
    { id: 269161136297, name: 'Tops' },
    { id: 404680999145, name: 'T-Shirt' },
    { id: 268275810473, name: 'Dresses' },
    { id: 404680933609, name: 'Shirts' },
    { id: 400760078569, name: 'Co-Ords' },
    { id: 269163102377, name: 'Shorts' },
    { id: 278854074537, name: 'Bottomwear' },
    { id: 269163036841, name: 'Sweatshirts + Hoodies' },
    { id: 269163856041, name: 'Jackets + Outerwear' },
    { id: 269162381481, name: 'Rompers + Jumpsuits' },
    { id: 269163921577, name: 'Lingrie & Sleepwear' },
    { id: 269162119337, name: 'Sweaters + Cardigains' },
    { id: 269161234601, name: 'Denim + Jeans' },
    { id: 269163954345, name: 'Activewear' },
    { id: 277361229993, name: 'Swimwear' },
  ];

  const occasionDataWomen = [
    { id: 418409939177, name: 'Ramadan Collection' },
    { id: 426572185833, name: 'Pre-Spring Collection' },
    { id: 416139215081, name: 'Party Dresses' },
    { id: 414274814185, name: 'Workwear' },
    { id: 414269145321, name: 'Date Night' },
    { id: 403737870569, name: 'Summer Wear' },
    { id: 414460281065, name: 'Beach day' },
    { id: 414279860457, name: 'Vacation' },
    { id: 277535621289, name: 'Winter Wear' },
    { id: 404885635305, name: 'Sleepwear' },
  ];

  const styleDataWomen = [
    { id: 404945371369, name: 'Tank Top' },
    { id: 404944978153, name: 'Crop Top' },
    { id: 269163102377, name: 'Shorts' },
    { id: 275908165801, name: 'Bikini Tops' },
    { id: 278854074537, name: 'Bootoms' },
    { id: 269161234601, name: 'Jeans + Denim' },
    { id: 400757915881, name: 'Skinny Jeans' },
    { id: 409915097321, name: 'Printed Shirts' },
    { id: 400758014185, name: 'Highwaist Jeans' },
  ];

  const collabsDataWomen = [
    { id: 399850799337, name: 'Everlast' },
    { id: 277875654825, name: 'Juicy Caulture' },
    { id: 410095223017, name: 'Airwalk Collection' },
    { id: 408959385833, name: 'Barbie Collection' },
  ];

  const newArrivalsDataWomen = [
    { id: 273230495913, name: 'View ALL' },
    { id: 276969914537, name: 'Shoes' },
    { id: 276968865961, name: 'Tops' },
    { id: 276968997033, name: 'Dresses' },
    { id: 276969095337, name: 'Bottoms' },
    { id: 276969324713, name: 'Jeans + Denim' },
    { id: 276969652393, name: 'Jackets + Coats' },
    { id: 276969849001, name: 'Sweaters + Cardigains' },
  ];

  const priceDataWomen = [
    { id: 414268457193, name: 'AED 15 & Under' },
    { id: 414268522729, name: 'AED 30 & Under' },
    { id: 414268653801, name: 'AED 50 & Under' },
    { id: 414268588265, name: 'AED 70 & Under' },
  ];

  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View>
      <AppBarMain title="Categories" />
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
              />
            </View>
            <View style={styles.menuItem}>
              <MyCollapase
                title="SHOP BY PRODUCT"
                list={productDataWomen}
                navigation={props.navigation}
              />
            </View>
            <View style={styles.menuItem}>
              <MyCollapase
                title="SHOP BY OCCASION"
                list={occasionDataWomen}
                navigation={props.navigation}
              />
            </View>
            <View style={styles.menuItem}>
              <MyCollapase
                title="SHOP BY STYLE"
                list={styleDataWomen}
                navigation={props.navigation}
              />
            </View>
            <View style={styles.menuItem}>
              <MyCollapase
                title="Collabs"
                list={collabsDataWomen}
                navigation={props.navigation}
              />
            </View>
            <View style={styles.menuItem}>
              <MyCollapase
                title="NEW ARRIVALS"
                list={newArrivalsDataWomen}
                navigation={props.navigation}
              />
            </View>
            <View style={styles.menuItem}>
              <MyCollapase
                title="SHOP BY PRICE"
                list={priceDataWomen}
                navigation={props.navigation}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CategotiesMain;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
  },
  menuItem: {
    padding: 10,
  },
});
