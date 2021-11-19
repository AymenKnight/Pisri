import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux';
import {  marks ,} from '../assets/categories';
import Colors from '../Components/config/Colors';

import BigTitle from '../Components/homeComp/BigTitle'
import CategoriesPicker from '../Components/homeComp/picker/CategoriesPicker'
import ItemShowcase from '../Components/homeComp/popup/ItemShowcase'
import ProductContainer from '../Components/homeComp/ProductContainer'
import SearchFeild from '../Components/homeComp/SearchFeild'
import routes from '../Components/navigation/routes';
import TopNavigation from '../Components/navigation/topNavigation/TopNavigation'
import { fetch_categories_startAsync, } from '../redux/categories/categories.actions';


 function StoreScreen({navigation,categories,categoriesLoaded,categoriesIsFetching,fetch_categories_startAsyncFromTheStore}) {
  useEffect(() => {
       fetch_categories_startAsyncFromTheStore()
        if(categoriesLoaded){
        setselectedCategorie(categories[Object.keys(categories)[0]])
      }
    return () => {
    }
  }, [categoriesLoaded])

  const fetch=async ()=>{
        
     
  }

    const [selectedCategorie, setselectedCategorie] = useState({})
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
      <>
        <View style={styles.screen}>
          <TopNavigation hundleLeftBtn={goToActivityScreen}   />
          <SearchFeild width="80%"   />
          <BigTitle title="Categories" />
      { categoriesLoaded   ? 
        <>
         <CategoriesPicker
            categories={categories}
            onSelect={setselectedCategorie}
            selected={selectedCategorie}
          />
         <ProductContainer
          onSelectProduct={hundleSelectProduct}
          selectedCategorie={selectedCategorie} 
         />   
          </>
          : 
           <View style={styles.indicatorContainer} >
             <ActivityIndicator size={90} color={Colors.primary} />
            </View> 
          }
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
      </>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex :1,
        alignItems :'center',
    },

})
const mapStateToProps= state=> ({
  categories : state.collections.categories,
  categoriesIsFetching :state.collections.categoriesIsFetching,
  categoriesLoaded : !!state.collections.categories
})

const mapDispatchToProps= dispatch => ({
  fetch_categories_startAsyncFromTheStore : ()=>dispatch(fetch_categories_startAsync()),
})

export default connect(mapStateToProps,mapDispatchToProps)(StoreScreen);
