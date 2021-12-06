import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import Modal from "react-native-modal";

import AppText from '../../Basic/AppText'
import PrimaryButton from '../../Basic/PrimaryButton'
import Colors from '../../config/Colors'
import iconLib from '../../config/iconLib'
import FormModal from '../../formComp/FormModal'
import AddCostumBtn from './AddCostumBtn'
import CloseButton from '../../Basic/CloseButton'
import ItemWithQuantity from './ItemWithQuantity'
import LineSeperator from './LineSeperator'
import SelectiveContainer from './selectiveComp/SelectiveContainer'

export default function ItemShowcase({
  name,
  image,
  visible,
  setVisible,
  firstOptionTitle,
  secondOptionTitle,
  firstOptionArray,
  secondOptionArray,
}) {

  const [quantity, setQuantity] = useState(0);
  const [customDetailVaisble, setcustomDetail] = useState(false)
  const closeCustomDetailModal =()=>{
    setcustomDetail(false)
  }
  return (
    <FormModal visible={visible} onClosed={setVisible}   >
      <View style={styles.content}>
        <CloseButton onPress={setVisible} />
        <ItemWithQuantity name={name} image={image} quantity={quantity} setQuantity={setQuantity} />
        <LineSeperator />
        <View style={styles.SelectiveContainer}>
          <SelectiveContainer
            title={firstOptionTitle}
            optionsArray={firstOptionArray}
          />
          <SelectiveContainer
            title={secondOptionTitle}
            optionsArray={secondOptionArray}
          />
        </View>
        <View style={styles.AddCostumContainer}>
          <AppText style={styles.AddCostumText}>Add Costume detail </AppText>
          <AddCostumBtn  onPress={()=>{
            setcustomDetail(true)
          }} />
        </View>
        <PrimaryButton
          title="add to bag"
          width="70%"
          icon="shopping-bag"
          IconComp={iconLib.Feather}
          onPress={()=>{}}
        />
      </View>
           <Modal
      isVisible={customDetailVaisble} style={styles.addCustomDetail}
      hasBackdrop={true}
      backdropColor="white"
      backdropOpacity={0}
      onBackdropPress={closeCustomDetailModal}
      onBackButtonPress={closeCustomDetailModal}
      coverScreen={false}
       >
       <View style={styles.addCustomModalContainer} >
          <AppText>"Provide your detail below : "</AppText>
          
       </View>
        </Modal>
    </FormModal>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderWidth:1,
    borderColor: Colors.borders,
  },
  AddCostumContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
    width: "100%",
    marginLeft: 50,
  },
  AddCostumText: {
    color: Colors.Unfocused_Blue,
    marginRight: 45,
  },
  SelectiveContainer: {
    width: "100%",
    paddingLeft: 8,
  },
  addCustomDetail :{
    width: "80%",
    margin: 0,
    height : 200,
    backgroundColor:"white",
    position:'absolute',
    alignSelf:'center',
    bottom:"50%",
    elevation:7,
  },
  addCustomModalContainer :{
    height:"100%",
    alignItems:'center',
    padding:14,
  }
});
