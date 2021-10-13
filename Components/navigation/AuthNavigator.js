import React, { useEffect, useMemo, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WelcomeScreen from '../../Screens/WelcomeScreen';
import AppNavigator from './AppNavigator';
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from '../context/AuthContext';
import routes from './routes';
import { auth } from '../../firebase/firebase.utils';
import AppLoading from 'expo-app-loading';


const SignStack=createStackNavigator()


export default function AuthNavigator() {
    const[loading,setLoading]=useState(true)
    const [user, setUser] = useState(null);

     useEffect(() => {
      let unsubscribe =auth.onAuthStateChanged(async (userAuth)=>{
          console.log(userAuth)
          setUser(userAuth)
          setLoading(false)
          
      })
      return () => {
        unsubscribe()
      }
    }, [])  
  
    return (
        loading ? <AppLoading/> :
      <AuthContext.Provider value={{ user: user, setUser: setUser }}>
        <SignStack.Navigator screenOptions={{ headerShown: false }}>
        {user && <SignStack.Screen name={routes.APP} component={AppNavigator} /> }
        {!user && <SignStack.Screen name={routes.WELCOME} component={WelcomeScreen} />}
        </SignStack.Navigator>
      </AuthContext.Provider>
      
    );
 
}

const styles = StyleSheet.create({})
