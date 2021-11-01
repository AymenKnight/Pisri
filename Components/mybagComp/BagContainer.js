import React from 'react'
import { FlatList } from 'react-native'
import { StyleSheet,  } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Dimensions } from 'react-native';
 import { MediaQueryStyleSheet } from "react-native-responsive";

import BascketItem from './BascketItem';



const windowHeight = Dimensions.get('window').height;
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

const styles = MediaQueryStyleSheet.create(
  {
  FlatList :{
     width:"100%",
     maxHeight:(windowHeight*60)/100,
     flexGrow:0,
     marginBottom: responsiveHeight(2),
  },
  
  content :{

  },
},
  {
    "@media (max-device-height: 720)": {
    FlatList :{
       maxHeight:(windowHeight*44)/100,
    },
  },
     "@media (min-device-height: 720) and (max-device-height: 900)": {
    FlatList :{
       maxHeight:(windowHeight*44)/100,
    },
  },
}

)
