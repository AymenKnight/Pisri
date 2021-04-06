import {  DefaultTheme } from '@react-navigation/native';
import Colors from '../config/Colors';

export default {
    ...DefaultTheme,
    colors :{
        ...DefaultTheme.colors,
    primary :Colors.primary,
      text   :Colors.fontColor ,
      background :"white",
    }
}