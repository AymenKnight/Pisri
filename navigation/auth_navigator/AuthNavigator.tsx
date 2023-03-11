import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '@components/Screens/welcome_screen';

const AuthStack = createNativeStackNavigator();

interface AuthNavigatorProps {}
export default function AuthNavigator({}: AuthNavigatorProps) {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await getUserInfo(userAuth);
  //       userRef.onSnapshot((snapShot) => {
  //         console.log('id : ', snapShot.id);
  //         set_user({
  //           ...snapShot.data(),
  //           id: snapShot.id,
  //         });
  //         setLoading(false);
  //       });
  //     } else {
  //       set_user(null);
  //       setLoading(false);
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [set_user]);

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Home" component={WelcomeScreen} />
    </AuthStack.Navigator>
  );
}
