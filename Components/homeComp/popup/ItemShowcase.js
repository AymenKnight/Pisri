import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View,Pressable } from 'react-native'
import Modal from "react-native-modal";

import AppText from '../../Basic/AppText'
import AppTextInput from '../../Basic/AppTextInput'
import PrimaryButton from '../../Basic/PrimaryButton'
import Colors from '../../config/Colors'
import iconLib from '../../config/iconLib'
import FormModal from '../../formComp/FormModal'
import AddCostumBtn from './AddCostumBtn'
import CloseButton from '../../Basic/CloseButton'
import ItemWithQuantity from './ItemWithQuantity'
import LineSeperator from './LineSeperator'
import SelectiveContainer from './selectiveComp/SelectiveContainer'
import AppButton from '../../Basic/AppButton';

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
  const [customDetail, setcustomDetail] = useState("")
  const [customDetailVaisble, setcustomDetailVaisbitly] = useState(false)

  const closeCustomDetailModal =()=>{
    setcustomDetailVaisbitly(false)
  }
  const addCustomDetail =()=>{
    closeCustomDetailModal()
    console.log("custom deatil is :", customDetail)
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
          <AppText style={styles.AddCostumText}>Add Costume detail</AppText>
          <AddCostumBtn  onPress={()=>{
            setcustomDetailVaisbitly(true)
          }} />
        </View>
        {
          customDetail.length > 3 && !customDetailVaisble ? 
             <View style={styles.customDetailLabelView}  >
           <AppText style={styles.customDetailLabel} >{customDetail}</AppText>  
        </View> 
        : null
        }
     
       
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
      onBackButtonPress={closeCustomDetailModal}
      coverScreen={true}
      onBackdropPress={closeCustomDetailModal}
      animationIn='bounceIn'
      animationOut="bounceOut"
       
       >
       <View style={styles.addCustomModalContainer} >
          <AppText style={styles.provideText} >Provide your detail below : </AppText>
          <TextInput  
          value={customDetail}
          style={styles.customInput}
          clearButtonMode='while-editing' 
          multiline={true}
          autoFocus={true}
          onChangeText={(text)=>{setcustomDetail(text)}}
           />
          <View style={styles.AddCustomModalButtons} >  
           <AppButton
            title="Cancel" 
            more_Style={styles.cancelBtn} 
            backgroundcolor={Colors.gray}
            fontSize={14}
            height={30}
            width={16}
            onPress={()=>{
              setcustomDetail("")
              closeCustomDetailModal()
                }}
             />
           <AppButton 
           title="Add" 
           more_Style={styles.addBtn} 
           backgroundcolor={Colors.primary}
           fontSize={14}
           height={30}
           width={12}
           onPress={addCustomDetail}
            />
          </View>
          
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
    paddingHorizontal:20,
  },
  AddCostumContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 8,
    width: "100%",
   
  },
  customDetailLabelView :{
   marginBottom:20,
   width:"100%",
  },
  customDetailLabel :{   
    alignSelf:'flex-start',
  },
  AddCostumText: {
    color: Colors.Unfocused_Blue,
    marginRight: 20,
  },
  SelectiveContainer: {
    width: "100%",
  },
  addCustomDetail :{
    width: "80%",
    margin: 0,
    backgroundColor:"white",
    position:'absolute',
    alignSelf:'center',
    bottom:100,
    elevation:2,
    borderRadius:15,
    borderColor: Colors.borders,
    borderWidth: 1,
    borderStyle: "solid",
    overflow:'hidden',
    paddingBottom:15,
  },
  addCustomModalContainer :{
    padding:14,
    height : 200,
  
  },
  customInput : {
    borderColor:Colors.borders,
    height:120,
     borderWidth: 1,
    borderStyle: "solid",
    marginTop:10,
    borderRadius:15,
    padding:10,
    textAlignVertical:'top',
    fontSize:16,
  },
  provideText :{
    fontSize:16,
  },
  AddCustomModalButtons :{
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  addBtn :{
   marginLeft:10,
  },
});
