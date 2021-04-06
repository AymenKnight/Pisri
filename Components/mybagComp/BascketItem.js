import React, { useState } from 'react'
import { Image } from 'react-native'
import { StyleSheet, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import AppText from '../Basic/AppText'
import AppPicker from '../Basic/picker/AppPicker'
import QuantityReducer from '../Basic/QuantityReducer'
import Colors from '../config/Colors'
import font from '../config/font'
import BagOption from './BagOption'
import TrashSwipe from './TrashSwipe'

export default function BascketItem({productName,onDelete,image,options=[]}) {
    const [currentQuantity, setcurrentQuantity] = useState(0)
    const hundleLess=()=>{
        if(currentQuantity>0){
            setcurrentQuantity(currentQuantity-1)
        }
    }
    const hundleMore=()=>{
        setcurrentQuantity(currentQuantity+1)
    }
    return (
      <Swipeable  containerStyle={styles.Swipeable} renderRightActions={()=><TrashSwipe onPress={onDelete} />}  >
        <View style={styles.content}>
          <View style={styles.leftContianer}>
            <AppText style={styles.productName}>{productName} </AppText>
            <View style={styles.optionsContainer}>
              {options.map((option) => (
                <BagOption
                  optionName={option.optionName}
                  key={option.optionName}
                />
              ))}
            </View>
            <QuantityReducer
              currentQuantity={currentQuantity}
              hundleLess={hundleLess}
              hundleMore={hundleMore}
            />
          </View>
          <Image source={image} style={styles.image}  />
        </View>
      </Swipeable>
    );
}

const styles = StyleSheet.create({
  Swipeable: {
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10,
  },
  content: {
    width: "88%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.borders,
    borderStyle: "solid",
    borderRadius: 20,
    overflow: "hidden",
  },
  leftContianer: {
    height: "100%",
    justifyContent: "flex-start",
    marginLeft: 10,
    marginTop: 6,
    alignItems: "flex-start",
    width:"80%"
  },
  productName: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_600SemiBold,
    fontSize: 18,
    fontStyle: "normal",
    padding: 5,
    marginBottom: 5,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    marginRight: 0,
    padding: 5,
    alignSelf:"center",
    width:67,
    height:103,
  },
});
