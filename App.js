import React from 'react';
import { StyleSheet, View ,} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";


import Colors from './Components/config/Colors';
import AuthNavigator from './Components/navigation/AuthNavigator';
import { BreadProvider } from 'material-bread';

export default function App() {

  return (
    <NavigationContainer theme={{ colors: { background: Colors.white } }}>
      <BreadProvider>
        <AuthNavigator />
      </BreadProvider>
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
