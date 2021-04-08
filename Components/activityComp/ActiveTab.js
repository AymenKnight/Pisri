import React  from 'react'
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import OffreItem from './OffreItem';
import DeleveryReqModal from './popup/DeleveryReqModal';



export default function ActiveTab({
  route,
  navigation,
  showReqModal,
  showFinishedModal,
  setreciept_ID,
  setreq_Array,
  activeArray
}) {

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
     flexGrow:0,
     alignSelf:'center',
  },
});
