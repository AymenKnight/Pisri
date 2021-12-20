import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from '../../../Basic/AppText'
import Colors from '../../../config/Colors'
import SelectiveButton from './SelectiveButton'

export default function SelectiveContainer({title,optionsArray=[],}) {
    const [selectedOption, setselectedOption] = useState(!!undefined)
    return (
        <View  style={styles.container} >
            <AppText style={styles.title} >{title}</AppText>
        <View  style={styles.optionContainer}  >
          {optionsArray.map((option)=>
          <SelectiveButton option={option}  key={option.value} selected={selectedOption.value==option.value} onSelect={setselectedOption} />
          )}
        </View>
            </View>
      
    )
}

const styles = StyleSheet.create({
    container :{
    justifyContent:'flex-start',
    width:"100%"
    },
    optionContainer: {
        flexDirection:'row',
        paddingVertical:10,

    },
    title :{
        color :Colors.Unfocused_Blue,
        paddingVertical:5,
    }
})
