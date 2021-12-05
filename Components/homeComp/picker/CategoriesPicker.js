import React, { useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CategoriesItem from './CategoriesItem';



export default function CategoriesPicker({categories,onSelect,selected=categories[Object.keys(categories)[0]]}) {
    const scrollview =useRef()  

    return (
        <View style={styles.container} >
             
             <ScrollView
             pagingEnabled={false}
             ref={scrollview}
             style={styles.scrollview}   
             horizontal={true} 
             centerContent={true}
            
             showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.categoriesContainer,]}
              >
             {
               Object.keys(categories).map(key=>  
               <CategoriesItem 
               categorie={categories[key]}
               selected={selected.name==categories[key].name}
               onSelect={onSelect}
               key={categories[key].name}
             /> )
 
             }
             </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
    padding:15,
    width:"100%"
    },
    scrollview :{
       flexGrow:0,
       
    },
    categoriesContainer :{
      alignItems:"center"
    },
    left_arrow :{
      marginRight:5,
    },
    right_arrow : {
      marginLeft:5,
    },
    page :{
       alignSelf:"center",
     flexDirection:'row',
     justifyContent:'center',
     marginRight:10,
    }
})
