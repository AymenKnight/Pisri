import React from 'react'
import { StyleSheet, View } from 'react-native'
 import { Formik } from 'formik';

export default function Form({initialValues,validationSchema,onSubmit,children}) {
    return (
    <View  style={styles.container} >
     <Formik
     initialValues={initialValues}
     onSubmit={onSubmit}
     validationSchema={validationSchema}
     >
     {({})=>(
         <>
             {children}
         </>
     )}
     </Formik>
     </View>
    )
}

const styles = StyleSheet.create({
    container :{
        justifyContent:'center',
        alignItems:'center'
    }
})
