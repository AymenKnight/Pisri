import React from 'react'
import { FlatList, View } from 'react-native'
import { ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

import ItemWithPrice from "../homeComp/ItemWithPrice"

const windowWidth = Dimensions.get('window').width;
export default function ProductContainer({productArray=[],onSelectProduct}) {
 
    return (
   <FlatList
     data={productArray}
     renderItem={({item})=>  <ItemWithPrice
              name={item.name}
              image={item.image}
              tag={item.tag}
              price={item.price}
              key={item.name}
              onPress={() => {
                onSelectProduct(item);
              }}
            />}
      keyExtractor={(item)=>item.name}
      numColumns={parseInt(windowWidth/175,10)}
      contentContainerStyle={styles.contentContainerStyle}
   />
    );
}

const styles = StyleSheet.create({
  FlatList: {
    width: "100%",
  },
  contentContainerStyle :{
    paddingBottom:100,   
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
   
    
  },
});
