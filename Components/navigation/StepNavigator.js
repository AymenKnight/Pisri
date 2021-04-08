import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../context/AuthContext";
import routes from "./routes";
import DeleveryScreen from "../Screens/DeleveryScreen";
import ActivityScreen from "../Screens/ActivityScreen";
import MyBagScreen from "../Screens/MyBagScreen";
import DeleveryFinished from "../Screens/DeleveryFinished";
import OnTheWayScreen from "../Screens/OnTheWayScreen";

const StepStack = createStackNavigator();

export default function StepNavigator() {


  return (
    <StepStack.Navigator screenOptions={{ headerShown: false }}>
      <StepStack.Screen name={routes.MY_BAG} component={MyBagScreen} />
      <StepStack.Screen name={routes.DELEVERY} component={DeleveryScreen} />
      <StepStack.Screen
        name={routes.DELEVERY_FINISHED}
        component={DeleveryFinished}
      />
      <StepStack.Screen name={routes.ACTIVITY} component={ActivityScreen} />
      <StepStack.Screen name={routes.ORDER_ON_WAY} component={OnTheWayScreen} />
    </StepStack.Navigator>
  );
}

const styles = StyleSheet.create({});
