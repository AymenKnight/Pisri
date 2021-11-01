import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import WelcomeScreen from '../../Screens/WelcomeScreen';
import AppNavigator from './AppNavigator';
import { createStackNavigator } from "@react-navigation/stack";
import routes from './routes';
import { auth, getUserInfo } from '../../firebase/firebase.utils';
import Colors from '../config/Colors';
import { connect } from 'react-redux';
import { set_Current_user } from '../../redux/user/user.actions';


const SignStack=createStackNavigator()


 function AuthNavigator({currentUser,set_user}) {
    const[loading,setLoading]=useState(true)

     useEffect(() => {
      let unsubscribe =auth.onAuthStateChanged(async (userAuth)=>{
        if(userAuth){
           const userRef=  await getUserInfo(userAuth)
           userRef.onSnapshot(snapShot=>{
             console.log("id : ",snapShot.id)
           set_user({
             ...snapShot.data(),
             id:snapShot.id,
           }) 
            setLoading(false)
           })     
        }
        else{
         set_user(null)
          setLoading(false)
        }

      })
      return () => {
        unsubscribe()
      }
    }, [set_user])  
  
    return (
        loading ?  <View style={styles.indicatorContainer} >
             <ActivityIndicator size={90} color={Colors.primary} />
        </View>  :
     
        <SignStack.Navigator screenOptions={{ headerShown: false }}>
        {currentUser && <SignStack.Screen name={routes.APP} component={AppNavigator} /> }
        {!currentUser && <SignStack.Screen name={routes.WELCOME} component={WelcomeScreen} />}
        </SignStack.Navigator>
    
      
    );
 
}

const styles = StyleSheet.create({
    indicatorContainer :{
     flex :1 ,
     justifyContent:'center',
     alignItems:"center",
  },
})

const mapStateToProps =state =>({
  currentUser : state.user.currentUser
})
const mapDispatchToProps = dispatch =>({
  set_user : user=>dispatch(set_Current_user(user))
})



export default connect(mapStateToProps,mapDispatchToProps)(AuthNavigator)