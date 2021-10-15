import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, AntDesign, Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import routes from "./routes";
import StoreScreen from "../../Screens/StoreScreen";
import DeleveryScreen from "../../Screens/DeleveryScreen";
import MyBagScreen from "../../Screens/MyBagScreen";
import Colors from "../config/Colors";
import HomeButton from "./HomeButton";
import StepNavigator from "./StepNavigator";
import ActivityNavigator from "./ActivityNavigator";
import HomeNavigator from "./HomeNavigator";

const BottomTab = createBottomTabNavigator();
export default function AppNavigator() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        showLabel: false,
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.primary,
      }}
    >
      <BottomTab.Screen
        name={routes.HOME_Stack}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name="shoppingcart"
              size={29}
              color={color}
              style={styles.tab1}
            />
          ),
        }}
      ></BottomTab.Screen>

      <BottomTab.Screen
        name={routes.HOME_Stack2}
        component={ActivityNavigator}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <HomeButton onPress={() => navigation.navigate(routes.HOME_Stack2)} />
          ),
        })}
      />
      <BottomTab.Screen
        name={routes.CHECK}
        component={StepNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="truck" size={28} color={color} style={styles.tab4} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    alignSelf: "center",
    width: "85%",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderTopColor: Colors.primary,
    borderTopWidth: 1,
    borderStyle: "solid",
    backgroundColor: "white",
    marginBottom: 15,
    elevation:0,
  },
  tab1: {
    position: "absolute",
    left: 25,
  },
  tab4: {
    position: "absolute",
    right: 27,
  },
});
