import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {  Provider } from "react-native-paper";

import BigTitle from '../homeComp/BigTitle'
import CategoriesPicker from '../homeComp/picker/CategoriesPicker'
import ItemShowcase from '../homeComp/popup/ItemShowcase'
import ProductContainer from '../homeComp/ProductContainer'
import SearchFeild from '../homeComp/SearchFeild'
import TopNavigation from '../topNavigation/TopNavigation'


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

export default function StoreScreen() {
    const [selectedCategorie, setselectedCategorie] = useState(categories[0])
    const [showcaseVisible, setshowcaseVisible] = useState(false)
    const [itemSelected, setitemSelected] = useState(null)
    
    const hundleSelectProduct=(item)=>{
          setitemSelected(item);
          setshowcaseVisible(true)  
    }
    return (
      <Provider  >
        <View style={styles.screen}>
          <TopNavigation />
          <SearchFeild width="80%" />
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
