import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const MyCollapase = ({ title, list, navigation }) => {
  const [active, setActive] = useState(false);

  return (
    <View>
      <Collapse onToggle={() => setActive(!active)}>
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
                  // fontSize: 16,
                  color: 'black',
                  fontWeight: '600',
                }}
              >
                {title}
              </Text>
            </View>
            <View>
              {active === true ? (
                <FontAwesome5 name="angle-down" size={15} />
              ) : (
                <FontAwesome5 name="angle-right" size={15} />
              )}
            </View>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View style={{ padding: 8, marginHorizontal: 4 }}>
            <FlatList
              data={list}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ListPage', {
                      type: 'WOMEN',
                      id: item.id,
                    })
                  }
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',

                      fontWeight: 400,
                      marginHorizontal: 10,
                      marginVertical: 10,
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default MyCollapase;
