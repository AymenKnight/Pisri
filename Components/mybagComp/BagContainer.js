import React from 'react'
import { FlatList } from 'react-native'
import { StyleSheet,  } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions';
import BascketItem from './BascketItem';

export default function BagContainer({bagArray=[],hundleDelete}) {
    return (
      <FlatList
        data={bagArray}
        keyExtractor={(item) => item.productName}
        renderItem={({ item }) => (
          <BascketItem
            productName={item.productName}
            key={item.productName}
            image={item.image}
            options={item.productOptions}
            onDelete={()=>hundleDelete(item)}
          />
        )}
        style={styles.FlatList}
        contentContainerStyle={styles.content}
      />
    );
}

const styles = StyleSheet.create({
  FlatList :{
     width:"100%",
     maxHeight:"47%",
     flexGrow:0,
     marginBottom:responsiveHeight(5),
  },
  content :{

  },
})
