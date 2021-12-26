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
        <View  
        style={styles.optionContainer}  >
          {optionsArray.map((option)=>
          <SelectiveButton 
          option={option}  
          key={option.value} 
          selected={selectedOption.value==option.value} 
          onSelect={setselectedOption} 
          />
          )}
        </View>
            </View>
      
    )
}

const styles = StyleSheet.create({
    container :{
    justifyContent:'flex-start',
    width:"100%",
    },
    optionContainer: {
        width:"100%",
        flexDirection:'row',
        paddingVertical:10,
        flexWrap:'wrap',

    },
    title :{
        color :Colors.Unfocused_Blue,    
    }
})
