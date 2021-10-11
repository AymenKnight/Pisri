import React, { useState } from 'react'
import { StyleSheet,  } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopNavigation from '../Components/navigation/topNavigation/TopNavigation';
import ActiveTab from '../Components/activityComp/ActiveTab';
import FinishedTab from '../Components/activityComp/FinishedTab';
import Colors from '../Components/config/Colors';
import font from '../Components/config/font';
import { useFonts,  PublicSans_700Bold,} from "@expo-google-fonts/public-sans";
import AppLoading from "expo-app-loading";
import DeleveryReqModal from '../Components/activityComp/popup/DeleveryReqModal';
import DeleveryFinishedModal from "../Components/activityComp/popup/DeleveryFinishedModal";
import { ActivityContext } from '../Components/context/ActivityContext';


const initialActiveArray = [
  {
    type: "delevering",
    reciept_ID: 123456789,
    requests: [],
    price: 900,
    currency: "dzd",
    reminingTime: 30,
    here: true,
  },
  {
    type: "requestFound",
    reciept_ID: 1234567,
    requests: [
      {
        delivery_Guy_id: 1,
        delivery_Guy_image: require("../assets/delevery_guy.png"),
        delivery_Guy_name: "john doe",
        delivery_Guy_age: 18,
        delivery_Guy_rank: 21,
      },
      {
        delivery_Guy_id: 2,
        delivery_Guy_image: require("../assets/delevery_guy.png"),
        delivery_Guy_name: "brahim aymen",
        delivery_Guy_age: 18,
        delivery_Guy_rank: 12,
      },
      {
        delivery_Guy_id: 3,
        delivery_Guy_image: require("../assets/delevery_guy.png"),
        delivery_Guy_name: "daouadji  aymen",
        delivery_Guy_age: 18,
        delivery_Guy_rank: 7,
      },
    ],
    price: 1000,
    currency: "dzd",
    reminingTime: 30,
    here: false,
  },
  {
    type: "waitingRequest",
    reciept_ID: 1234,
    requests: [],
    price: 500,
    currency: "dzd",
    reminingTime: 30,
    here: false,
  },
  {
    type: "delevering",
    reciept_ID: 1234567844,
    requests: [],
    price: 400,
    currency: "dzd",
    reminingTime: 30,
    here: false,
  },
  {
    type: "delevering",
    reciept_ID: 12345678444,
    requests: [],
    price: 400,
    currency: "dzd",
    reminingTime: 30,
    here: false,
  },
];
const initialfinishedArray = [
  {
    type: "finished",
    reciept_ID: 123456789,
    num_request: 1,
    price: 900,
    currency: "dzd",
    reminingTime: 30,
    here: false,
  },
  {
    type: "finished",
    reciept_ID: 1234567,
    num_request: 1,
    price: 1000,
    currency: "dzd",
    reminingTime: 30,
    here: false,
  },
  {
    type: "finished",
    reciept_ID: 1234,
    num_request: 1,
    price: 500,
    currency: "dzd",
    reminingTime: 30,
    here: false,
  },
  {
    type: "finished",
    reciept_ID: 1234567844,
    num_request: 1,
    price: 400,
    currency: "dzd",
    reminingTime: 30,
    here: false,
  },
];

const Tab = createMaterialTopTabNavigator();

export default function ActivityScreen({ navigation, route}) {
   const [reqModal, setreqModal] = useState(false);
   const [finishedModal, setfinishedModal] = useState(false);
   const [reciept_ID, setreciept_ID] = useState();
   const [req_Array, setreq_Array] = useState([]);
   const [activeArray, setactiveArray] = useState(initialActiveArray);
   const [finishedArray, setfinishedArray] = useState(initialfinishedArray);


       let [fontsLoaded] = useFonts({PublicSans_700Bold,});
   if (!fontsLoaded) {
    return <AppLoading />;}
    else {
    return (
      <>
        <TopNavigation />
        <ActivityContext.Provider  value={
          {activeArray:activeArray,setactiveArray:setactiveArray,
           finishedArray:finishedArray,setfinishedArray:setfinishedArray
          }} >
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
                  activeArray={activeArray}
                />
              )}
            />
            <Tab.Screen name="Finished" children={() => <FinishedTab  finishedArray={finishedArray} />} />
          </Tab.Navigator>
        </ActivityContext.Provider>

        <DeleveryReqModal
          visible={reqModal}
          setVisible={setreqModal}
          reciept_ID={reciept_ID}
          req_Array={req_Array}
          navigation={navigation}
        />
        <DeleveryFinishedModal
          code="D567-454"
          reciept_ID={reciept_ID}
          visible={finishedModal}
          setVisible={setfinishedModal}
          navigation={navigation}
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
