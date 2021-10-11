import React, { useMemo, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WelcomeScreen from '../../Screens/WelcomeScreen';
import AppNavigator from './AppNavigator';
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from '../context/AuthContext';
import routes from './routes';



const SignStack=createStackNavigator()


export default function AuthNavigator() {
    const [user, setUser] = useState(null);
  
    return (
      <AuthContext.Provider value={{ user: user, setUser: setUser }}>
        <SignStack.Navigator screenOptions={{ headerShown: false }}>
        {user && <SignStack.Screen name={routes.APP} component={AppNavigator} /> }
        {!user && <SignStack.Screen name={routes.WELCOME} component={WelcomeScreen} />}
        </SignStack.Navigator>
      </AuthContext.Provider>
    );
 
}

const styles = StyleSheet.create({})
