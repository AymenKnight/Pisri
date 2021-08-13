import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import StoreScreen from "../Screens/StoreScreen";
import ActivityScreen from "../Screens/ActivityScreen";

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName={routes.STORE}
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name={routes.STORE} component={StoreScreen} />
      <HomeStack.Screen name={routes.ACTIVITY} component={ActivityScreen} />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({});
