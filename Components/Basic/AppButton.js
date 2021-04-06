import React,{useState} from 'react'
import { TouchableOpacity,Text, StyleSheet } from 'react-native'
import Colors from '../config/Colors'
import { Dimensions } from "react-native";
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth, useResponsiveHeight, useResponsiveScreenHeight, useResponsiveScreenWidth, useResponsiveWidth } from 'react-native-responsive-dimensions';



 const window = Dimensions.get("window");
 const screen = Dimensions.get("screen");

const AppButton=({title,onPress,more_Style=null,fontSize=18,textColor="white",backgroundcolor,width=10,height=50 })=>{
     const [dimensions, setDimensions] = useState({ window, screen }); 
    return(
<TouchableOpacity  
style={[styles.container ,more_Style,{backgroundColor:backgroundcolor
                          ,width:responsiveWidth(width)
                          ,height:height 
}]}
  onPress={onPress} >
    <Text 
    style={[styles.text,{
        fontSize:fontSize,
        color:textColor,
        }]} >
    {title} 
    </Text>
</TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.primary,
        borderRadius:15,
        padding:8,
        marginVertical:10,
       
    },
    
    text:{
        fontSize:18,
        color:"white",
        fontWeight:"bold"
        
    },

})

export default AppButton;