import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AppText from '../../../Basic/AppText'
import Colors from '../../../config/Colors'
import SelectiveButton from './SelectiveButton'

export default function SelectiveContainer({title,optionsArray=[],}) {
    const [selectedOption, setselectedOption] = useState(!!undefined)
    return (
        <View  style={styles.container} >
            <AppText style={styles.title} >{title}</AppText>
        <ScrollView  
        scrollEnabled ={true}
          horizontal={true}  
          style={styles.ScrollView}
        contentContainerStyle={styles.optionContainer}  >
          {optionsArray.map((option)=>
          <SelectiveButton option={option}  key={option.value} selected={selectedOption.value==option.value} onSelect={setselectedOption} />
          )}
        </ScrollView>
            </View>
      
    )
}

const styles = StyleSheet.create({
    container :{
    justifyContent:'flex-start',
    width:"100%"
    },
    ScrollView :{
        
        width :"100%"
    },
    optionContainer: {
        width:"100%",
        flexDirection:'row',
        paddingVertical:10,

    },
    title :{
        color :Colors.Unfocused_Blue,
        paddingVertical:5,
    }
})
