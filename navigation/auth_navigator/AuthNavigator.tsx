import { useState, useCallback, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '@screens/welcome_screen';
import { View } from 'react-native';
import {
  useFonts,
  PublicSans_800ExtraBold,
  PublicSans_300Light,
  PublicSans_200ExtraLight,
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_600SemiBold,
  PublicSans_700Bold,
  PublicSans_900Black,
} from '@expo-google-fonts/public-sans';
import * as SplashScreen from 'expo-splash-screen';
import { auth } from '@api/firebase/firebase.utils';
import { useAuthStore } from '@stores/authStore';

const AuthStack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

interface AuthNavigatorProps {}
export default function AuthNavigator({}: AuthNavigatorProps) {
  const [loading, setLoading] = useState(true);
  const {} = useAuthStore();
  const [fontsLoaded] = useFonts({
    PublicSans_800ExtraBold,
    PublicSans_300Light,
    PublicSans_200ExtraLight,
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_600SemiBold,
    PublicSans_700Bold,
    PublicSans_900Black,
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await getUserInfo(userAuth);
        userRef.onSnapshot((snapShot) => {
          console.log('id : ', snapShot.id);
          setUser({
            ...snapShot.data(),
            id: snapShot.id,
          });
          setLoading(false);
        });
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [set_user]);

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Home" component={WelcomeScreen} />
      </AuthStack.Navigator>
    </View>
  );
}
