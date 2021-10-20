import React from 'react';
import { StyleSheet, View ,} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";


import Colors from './Components/config/Colors';
import AuthNavigator from './Components/navigation/AuthNavigator';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {

  return (
    <Provider store={store} >
    <NavigationContainer theme={{ colors: { background: Colors.white } }}>
        <AuthNavigator />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
 container :{
   flex :1,
   justifyContent:"center",
   alignItems:'center',
   
 }
});
