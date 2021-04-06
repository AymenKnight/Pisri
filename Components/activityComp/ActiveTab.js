import React, { useState } from 'react'
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import OffreItem from './OffreItem';
import DeleveryReqModal from './popup/DeleveryReqModal';


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
];
export default function ActiveTab({
  route,
  navigation,
  showReqModal,
  showFinishedModal,
  setreciept_ID,
  setreq_Array,
}) {
  const [activeArray, setactiveArray] = useState(initialActiveArray);
  return (
    <FlatList
      data={activeArray}
      keyExtractor={(item) => item.reciept_ID.toString()}
      style={styles.FlatList}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => (
        <OffreItem
          type={item.type}
          key={item.reciept_ID}
          reciept_ID={item.reciept_ID}
          price={item.price}
          currency={item.currency}
          num_request={item.requests.length}
          reminingTime={item.reminingTime}
          here={item.here}
          hundlePause={()=>{
            setactiveArray(activeArray.filter((i)=>i.reciept_ID!=item.reciept_ID))
          }}
          showDeleveryReq={() => {
            showReqModal(true);
            setreciept_ID(item.reciept_ID);
            setreq_Array(item.requests);
          }}
          showFinishedModal={()=> {
             showFinishedModal(true)
             setreciept_ID(item.reciept_ID);
             }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: {
      paddingTop:20
  },
  FlatList: {
    width:"100%",
     maxHeight:"77%",
     flexGrow:0,
     alignSelf:'center',
  },
});
