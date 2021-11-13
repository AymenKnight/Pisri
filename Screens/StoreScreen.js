import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {  Provider } from "react-native-paper";
import { connect } from 'react-redux';
import { marks } from '../assets/categories';

import BigTitle from '../Components/homeComp/BigTitle'
import CategoriesPicker from '../Components/homeComp/picker/CategoriesPicker'
import ItemShowcase from '../Components/homeComp/popup/ItemShowcase'
import ProductContainer from '../Components/homeComp/ProductContainer'
import SearchFeild from '../Components/homeComp/SearchFeild'
import routes from '../Components/navigation/routes';
import TopNavigation from '../Components/navigation/topNavigation/TopNavigation'




 function StoreScreen({navigation,categories}) {
   console.log("first selected categorie : ",categories[Object.keys(categories)[0]])
    const [selectedCategorie, setselectedCategorie] = useState(categories[Object.keys(categories)[0]])
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
const mapStateToProps= state=> ({
  categories : state.collections.categories,
})

export default connect(mapStateToProps,null)(StoreScreen);
