import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFormikContext} from 'formik'
import { MediaQueryStyleSheet } from "react-native-responsive";

import AppText from '../Basic/AppText'
import AppTextInput from '../Basic/AppTextInput'
import PasswordInput from '../Basic/PasswordInput'
import ErrorMessage from './ErrorMessage'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

export default function FormTextInput({title,name,icon,secret=false,width=100,focusColor,inputStyle,titleStyle,...otherprops}) {
    const {errors,touched,handleChange,setFieldTouched}=useFormikContext()
    return (
      <View style={[styles.container, { width: responsiveWidth(width) }]}>
        <AppText style={[styles.defaultStyle, titleStyle]}>{title} </AppText>

        {!secret && (
          <AppTextInput
            icon={icon}
            {...otherprops}
            onChangeText={handleChange(name)}
            onBlur={() => setFieldTouched(name)}
            inputStyle={{ fontSize: responsiveFontSize(2) }}
          />
        )}

        {secret && (
          <PasswordInput
            onChangeText={handleChange(name)}
            onBlur={() => setFieldTouched(name)}
            inputStyle={{ fontSize: responsiveFontSize(2) }}
            {...otherprops}
          />
        )}
        <ErrorMessage vaisble={touched[name]} error={errors[name]} />
      </View>
    );
}

const styles = MediaQueryStyleSheet.create(
  {
    defaultStyle: {
      color: "#B6B3BE",
    },
  },
  {
    "@media (max-device-height: 720)": {
      container: {
        marginBottom: 2,
      },
    },
    "@media (min-device-height: 721)": {
      container: {
        marginBottom: 10,
      },
    },
  }
);
