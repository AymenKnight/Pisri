import React, { useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons   } from '@expo/vector-icons'; 
import Colors from '../../config/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import CategoriesItem from './CategoriesItem';



export default function CategoriesPicker({categories,onSelect,selected=categories[0]}) {
    const scrollview =useRef()  

    return (
        <View style={styles.container} >
             
             <ScrollView
             pagingEnabled={true}
             ref={scrollview}
             style={styles.scrollview}   
             horizontal={true} 
             centerContent={true}
            
             showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.categoriesContainer,]}
              >
             {categories.map((categorie)=>
             <CategoriesItem 
               categorie={categorie}
               selected={selected.name==categorie.name}
               onSelect={onSelect}
               key={categorie.name}
             />
             )}
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
