import React, { useMemo, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WelcomeScreen from '../Screens/WelcomeScreen';
import AppNavigator from './AppNavigator';
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from '../context/AuthContext';
import routes from './routes';



const SignStack=createStackNavigator()


export default function AuthNavigator() {
    const [userToken, setUserToken] = useState(null);
    const authContext = useMemo(() => {
      signIn: () => {
          setUserToken("")
      };
    });
    return (
      <AuthContext.Provider
        value={{ userToken: userToken, setUserToken: setUserToken }}
      >
        <SignStack.Navigator screenOptions={{ headerShown: false }}>
          {userToken ? (
            <SignStack.Screen name={routes.APP} component={AppNavigator} />
          ) : (
            <SignStack.Screen name={routes.WELCOME} component={WelcomeScreen} />
          )}
        </SignStack.Navigator>
      </AuthContext.Provider>
    );
 
}

const styles = StyleSheet.create({})
