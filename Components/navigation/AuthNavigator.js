import React, { useEffect, useMemo, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WelcomeScreen from '../../Screens/WelcomeScreen';
import AppNavigator from './AppNavigator';
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from '../context/AuthContext';
import routes from './routes';
import { auth, getUserInfo } from '../../firebase/firebase.utils';
import AppLoading from 'expo-app-loading';


const SignStack=createStackNavigator()


export default function AuthNavigator() {
    const[loading,setLoading]=useState(true)
    const [user, setUser] = useState(null);

     useEffect(() => {
      let unsubscribe =auth.onAuthStateChanged(async (userAuth)=>{
        if(userAuth){
           const userRef=  await getUserInfo(userAuth)
           userRef.onSnapshot(snapShot=>{
             console.log(snapShot.id)
             setUser({id:snapShot.id,
            ...snapShot.data()})
            setLoading(false)
           })
            
        }
        else{
          setUser(null)
          setLoading(false)
        }
        
          
          
      })
      return () => {
        unsubscribe()
      }
    }, [])  
  
    return (
        loading ? <AppLoading/> :
     
        <SignStack.Navigator screenOptions={{ headerShown: false }}>
        {user && <SignStack.Screen name={routes.APP} component={AppNavigator} /> }
        {!user && <SignStack.Screen name={routes.WELCOME} component={WelcomeScreen} />}
        </SignStack.Navigator>
    
      
    );
 
}

const styles = StyleSheet.create({})
