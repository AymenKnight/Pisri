import React from 'react'
import {useFormikContext} from 'formik'
import AppButton from '../Basic/AppButton'
import Colors from '../config/Colors'


export default function SubmitButton({title,textColor="white",backgroundcolor,width}) {
    const {handleSubmit} =useFormikContext()
    return (
      <AppButton title={title}
       backgroundcolor={Colors.primary} 
       textColor={textColor}  
       onPress={handleSubmit} 
       width={width}
       height={52}
        />
    )
}
