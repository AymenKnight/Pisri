import React from "react";
import { useState } from "react";
import { FlatList, Modal, StyleSheet,TouchableWithoutFeedback, View} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../config/Colors";
import AppText from "../AppText";
import PickerItem from "./PickerItem";
import font from "../../config/font";
import PickerSeperator from "./PickerSeperator";

export default function AppPicker({
  icon,
  items,
  placeholder,
  numColumns = 1,
  selectedItem,
  OnSelectItem,
  PickerItemComponent = PickerItem,
  width="auto",
  SeperatorEnabled=false
}) {
  const [ModalVaisibilité, setModalVaisibilité] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVaisibilité(true);
        }}
      >
        <View  style={styles.row} >
          <View style={[styles.container, { width: width }]}>
            {icon && (
              <MaterialCommunityIcons
                style={styles.icon}
                name={icon}
                size={20}
                color={Colors.medium}
              />
            )}
            {selectedItem ? (
              <AppText style={[styles.TextInput]}>{selectedItem.label}</AppText>
            ) : (
              <AppText style={[styles.TextInput, styles.placeholder]}>
                {placeholder}
              </AppText>
            )}
            <MaterialCommunityIcons
              name="chevron-down"
              size={25}
              color={Colors.fontColor}
            />
          </View>
          { SeperatorEnabled &&  <PickerSeperator />}
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Modal visible={ModalVaisibilité} animationType="fade">
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVaisibilité(false);
                  OnSelectItem(item);
                }}
              />
            )}
          />
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row :{
   flexDirection :"row",
   alignItems:"center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 12,
    marginVertical: 10,
    overflow: "hidden",
    borderWidth:2,
    borderStyle:"solid",
    borderColor:Colors.borders,
  },
  icon: {
    marginRight: 10,
  },
  TextInput: {
    width:"auto",
    padding:5,
    paddingHorizontal:8,
    marginRight: 10,
    color: Colors.fontColor,
    fontFamily:font.PublicSans_500Medium,
    fontStyle:"normal",
    fontWeight:"500",
    fontSize:14,
    textAlign:"center",
  },
  placeholder: {
    color: Colors.fontColor,
  },
});
