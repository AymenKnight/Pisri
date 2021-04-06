import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Image, Button, ImageBackground} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import CategoriesItem from './Components/homeComp/picker/CategoriesItem';
import CategoriesPicker from './Components/homeComp/picker/CategoriesPicker';
import BigTitle from './Components/homeComp/BigTitle';
import SearchFeild from './Components/homeComp/SearchFeild';
import ProductContainer from './Components/homeComp/ProductContainer';
import ProfileButton from './Components/topNavigation/ProfileButton';
import TopNavigation from './Components/topNavigation/TopNavigation';
import StoreScreen from './Components/Screens/StoreScreen';
import myThemeNavigation from './Components/navigation/myThemeNavigation';
import AppNavigator from './Components/navigation/AppNavigator';
import ItemWithQuantity from './Components/homeComp/popup/ItemWithQuantity';
import SelectiveButton from './Components/homeComp/popup/selectiveComp/SelectiveButton';
import SelectiveContainer from './Components/homeComp/popup/selectiveComp/SelectiveContainer';
import AddCostumBtn from './Components/homeComp/popup/AddCostumBtn';
import WelcomeScreen from './Components/Screens/WelcomeScreen';
import PrimaryButton from './Components/Basic/PrimaryButton';
import LineSeperator from './Components/homeComp/popup/LineSeperator';
import AppPicker from './Components/Basic/picker/AppPicker';
import PickerSeperator from './Components/Basic/picker/PickerSeperator';
import QuantityReducer from './Components/Basic/QuantityReducer';
import BascketItem from './Components/mybagComp/BascketItem';
import BagOption from './Components/mybagComp/BagOption';
import MyBagScreen from './Components/Screens/MyBagScreen';
import DotedScroll from './Components/DeleveryComp/DotedScroll';
import DeleveryOption from './Components/DeleveryComp/DeleveryOption';
import OptionsContainer from './Components/DeleveryComp/OptionsContainer';
import Step01 from './Components/DeleveryComp/steps/Step01';
import Step02 from './Components/DeleveryComp/steps/Step02';
import Step03 from './Components/DeleveryComp/steps/Step03';
import DeleveryFinished from './Components/Screens/DeleveryFinished';
import DeleveryScreen from "./Components/Screens/DeleveryScreen";
import DeleveryScreenV2 from "./Components/Screens/DeleveryScreenV2";
import DeleveryScreenV3 from "./Components/Screens/DeleveryScreenV3";
import OffreItem from './Components/activityComp/OffreItem';
import ActivityScreen from './Components/Screens/ActivityScreen';
import Colors from './Components/config/Colors';
import OnTheWayScreen from './Components/Screens/OnTheWayScreen';
import AuthNavigator from './Components/navigation/AuthNavigator';



   
 
export default function App() {

  return (
    <NavigationContainer theme={{ colors: { background: Colors.white } }}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 container :{
   flex :1,
   justifyContent:"center",
   alignItems:'center',
   
 }
});
