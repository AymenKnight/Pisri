import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import ItemWithPrice from "../homeComp/ItemWithPrice"


export default function ProductContainer({productArray=[],onSelectProduct}) {
 
    return (
      <View  style={styles.center} >
        <ScrollView
          style={styles.FlatList}
          contentContainerStyle={styles.productsContainer}
        >
          {productArray.map((item) => (
            <ItemWithPrice
              name={item.name}
              image={item.image}
              tag={item.tag}
              price={item.price}
              key={item.name}
              onPress={() => {
                onSelectProduct(item);
              }}
            />
          ))}
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  FlatList: {
    width: "100%",
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  indicatorStyle: {},
  center: {
    justifyContent: "center",
    alignItems: "center",
    height: "51.2%",
    
  },
});
