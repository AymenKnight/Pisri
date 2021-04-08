import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import StoreScreen from "../Screens/StoreScreen";
import ActivityScreen from "../Screens/ActivityScreen";


const ActivityStack = createStackNavigator();

export default function ActivityNavigator() {


  return (
    <ActivityStack.Navigator screenOptions={{ headerShown: false }}>
      <ActivityStack.Screen name={routes.STORE} component={StoreScreen} />
      <ActivityStack.Screen name={routes.ACTIVITY} component={ActivityScreen} />
    </ActivityStack.Navigator>
  );
}

const styles = StyleSheet.create({});
