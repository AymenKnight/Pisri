import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {  Provider } from "react-native-paper";

import BigTitle from '../Components/homeComp/BigTitle'
import CategoriesPicker from '../Components/homeComp/picker/CategoriesPicker'
import ItemShowcase from '../Components/homeComp/popup/ItemShowcase'
import ProductContainer from '../Components/homeComp/ProductContainer'
import SearchFeild from '../Components/homeComp/SearchFeild'
import routes from '../Components/navigation/routes';
import TopNavigation from '../Components/navigation/topNavigation/TopNavigation'


const categories = [
  { 
    id:1,
    name: "Dairy products",
    products: [
      { 
        id:1,
        name: "Milk",
        price: "30-180",
        tag: "Dzd",
         image: require("../assets/categories/DairyProducts/milk_candia.png"),
      },
      { 
        id:2,
        name: "cheese",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/categories/DairyProducts/cheese.jpg"),
      },
      { id:3,
        name: "Yogurt",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/categories/DairyProducts/Yogurt.jpg"),
      },
      { 
        id:4,
        name: "Milk2",
        price: "30-180",
        tag: "Dzd",
         image: require("../assets/categories/DairyProducts/milk_candia.png"),
      },
      { 
        id:5,
        name: "chees2e",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/categories/DairyProducts/cheese.jpg"),
      },
      { 
        id:6,
        name: "Yogurt2",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/categories/DairyProducts/Yogurt.jpg"),
      },
      
     
    ],
  },
  {
    id:2,
    name: "candies",
    products: [
        {
        name: "Chocolate",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/categories/DairyProducts/big_milk.png"),
      },
       {
        name: "Yogurt5",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/categories/DairyProducts/milk.png"),
      },
       {
        name: "Yogurt6",
        price: "30-180",
        tag: "Dzd",
        image:require("../assets/categories/DairyProducts/milk.png"),
      },
     
    ],
  },
  { 
    id:3,
    name: "jus",
    products: [],
  },
  {
    id:4,
    name: "frit",
    products: [],
  },
  {
    id:5,
    name: "machroub",
    products: [],
  },
  {
    id:6,
    name: "mafchroub",
    products: [],
  },
  {
    id:7,
    name: "mafhhhub",
    products: [],
  },
  {
    id:8,
    name: "waterr",
    products: [],
  },
];
const marks=[
  {
    value :"candia",
    label :"candia"
  },
    {
    value :"jus",
    label :"jus"
  },
    {
    value :"intel",
    label :"intel"
  },
]

export default function StoreScreen({navigation}) {
    const [selectedCategorie, setselectedCategorie] = useState(categories[0])
    const [showcaseVisible, setshowcaseVisible] = useState(false)
    const [itemSelected, setitemSelected] = useState(null)
    
    const hundleSelectProduct=(item)=>{
          setitemSelected(item);
          setshowcaseVisible(true)  
    }
     const goToActivityScreen = () => {
       navigation.push(routes.ACTIVITY);
     };
    return (
      <Provider  >
        <View style={styles.screen}>
          <TopNavigation hundleLeftBtn={goToActivityScreen}   />
          <SearchFeild width="80%"   />
          <BigTitle title="Categories" />
          <CategoriesPicker
            categories={categories}
            onSelect={setselectedCategorie}
            selected={selectedCategorie}
          />
          <ProductContainer
            productArray={selectedCategorie.products}
            onSelectProduct={hundleSelectProduct}
          />
        </View>

        {itemSelected && (
          <ItemShowcase
            name={itemSelected.name}
            image={itemSelected.image}
            visible={showcaseVisible}
            setVisible={() => setshowcaseVisible(false)}
            firstOptionTitle="marks"
            firstOptionArray={marks}
            secondOptionTitle="Wieght/volume"
            secondOptionArray={marks}
          />
        )}
      </Provider>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex :1,
        alignItems :'center',


    }
})
