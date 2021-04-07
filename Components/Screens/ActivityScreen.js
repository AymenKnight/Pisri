import React, { useState } from 'react'
import { StyleSheet,  } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopNavigation from '../topNavigation/TopNavigation';
import ActiveTab from '../activityComp/ActiveTab';
import FinishedTab from '../activityComp/FinishedTab';
import Colors from '../config/Colors';
import font from '../config/font';
import { useFonts,  PublicSans_700Bold,} from "@expo-google-fonts/public-sans";
import AppLoading from "expo-app-loading";
import DeleveryReqModal from '../activityComp/popup/DeleveryReqModal';
import DeleveryFinishedModal from "../activityComp/popup/DeleveryFinishedModal";


const Tab = createMaterialTopTabNavigator();

export default function ActivityScreen({ navigation, route}) {
   const [reqModal, setreqModal] = useState(false);
   const [finishedModal, setfinishedModal] = useState(false);
   const [reciept_ID, setreciept_ID] = useState();
   const [req_Array, setreq_Array] = useState([]);

       let [fontsLoaded] = useFonts({PublicSans_700Bold,});
   if (!fontsLoaded) {
    return <AppLoading />;}
    else {
    return (
      <>
        <TopNavigation />
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: Colors.fontColor,
            labelStyle: styles.labelStyle,
            indicatorContainerStyle: styles.indicatorContainerStyle,
            indicatorStyle: styles.indicatorStyle,
            tabStyle: styles.tabStyle,
          }}
        >
          <Tab.Screen
            name="Active"
            options={{ title: "Active" }}
            children={() => (
              <ActiveTab
                showReqModal={setreqModal}
                showFinishedModal={setfinishedModal}
                setreciept_ID={setreciept_ID}
                setreq_Array={setreq_Array}
              />
            )}
          />
          <Tab.Screen name="Finished" children={() => <FinishedTab />} />
        </Tab.Navigator>

        <DeleveryReqModal
          visible={reqModal}
          setVisible={setreqModal}
          reciept_ID={reciept_ID}
          req_Array={req_Array}
        />
        <DeleveryFinishedModal
          code="D567-454"
          reciept_ID={reciept_ID}
          visible={finishedModal}
          setVisible={setfinishedModal}
        />
      </>
    );
}
}

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: font.PublicSans_700Bold,
    fontSize: 14,
  },
  indicatorContainerStyle: {},
  indicatorStyle: {
    backgroundColor: Colors.primary,
    
  },
});
