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
    name: "Pastries",
    products: [
      {
        name: "Milk",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/milk.png"),
      },
      {
        name: "water",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/milk.png"),
      },
      {
        name: "coca",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/milk.png"),
      },
      {
        name: "machroub",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/milk.png"),
      },
      {
        name: "jus",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/milk.png"),
      },
      {
        name: "yes",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/milk.png"),
      },
      {
        name: "no",
        price: "30-180",
        tag: "Dzd",
        image: require("../assets/milk.png"),
      },
    ],
  },
  {
    name: "food",
    products: [],
  },
  {
    name: "jus",
    products: [],
  },
  {
    name: "frit",
    products: [],
  },
  {
    name: "machroub",
    products: [],
  },
  {
    name: "mafchroub",
    products: [],
  },
  {
    name: "mafhhhub",
    products: [],
  },
  {
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
