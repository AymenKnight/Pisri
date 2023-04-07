import { useCallback, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, ActivityIndicator } from 'react-native';
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
import { auth, db } from '@api/firebase/firebase.utils';
import { useAuthStore } from '@stores/authStore';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot, doc } from 'firebase/firestore';
import Colors from '@components/config/Colors';
import StoreScreen from '@screens/store_screen';
import TopNavigation from '@components/top_navigation';
import HomeNavigator from '@navigation/home_navigator';

const AuthStack = createNativeStackNavigator();
//TODO move authentication logic to another file
//TODO move font loads logic to another file
interface AuthNavigatorProps {}
export default function AuthNavigator({}: AuthNavigatorProps) {
  const {
    setUser,
    user: currnetUser,
    isLoading,
    setIsLoading,
    isFetching,
    setIsFetching,
  } = useAuthStore();

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = await doc(db, 'users', user.uid);
        setIsFetching(true);
        onSnapshot(userRef, async (document) => {
          setIsFetching(false);
          if (document.exists()) {
            // The user's data exists in Firestore
            setUser({
              id: document.id,
              displayName: document.data()?.displayName,
              email: document.data()?.email,
            });
          } else {
            // The user's data doesn't exist in Firestore yet

            setUser(null);
          }
        });
      } else {
        // The user is signed out

        setUser(null);
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

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

  return isLoading || isFetching ? (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator color={Colors.primary} size={50} />
    </View>
  ) : (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        {currnetUser ? (
          <AuthStack.Screen name="Home" component={StoreScreen} />
        ) : (
          <AuthStack.Screen name="Welcome" component={HomeNavigator} />
        )}
      </AuthStack.Navigator>
    </View>
  );
}
