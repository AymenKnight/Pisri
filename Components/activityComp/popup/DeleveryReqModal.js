import React from 'react'
import { StyleSheet, View } from 'react-native'


import AppText from '../../Basic/AppText';
import CloseButton from '../../Basic/CloseButton';
import Colors from '../../config/Colors';
import font from '../../config/font';
import FormModal from '../../formComp/FormModal'
import routes from '../../navigation/routes';
import ProfileItem from './ProfileItem';

export default function DeleveryReqModal({ visible, setVisible, reciept_ID, req_Array = [],navigation }) {
  return (
    <FormModal visible={visible}  onClosed={()=>setVisible(false)}  height="75%" >
      <View style={styles.content}>
        <CloseButton onPress={() => setVisible(false)} />
        <AppText style={styles.mainTitle}>Delevery requests</AppText>
        <AppText style={styles.reciept_ID}>Reciept #{reciept_ID} </AppText>
        <AppText style={styles.reciept_ID}>
          You have to accept the request before the time’s up{" "}
        </AppText>
        <View style={styles.options}>
          {req_Array.map((person) => (
            <ProfileItem
              key={person.delivery_Guy_id}
              image={person.delivery_Guy_image}
              name={person.delivery_Guy_name}
              age={person.delivery_Guy_age}
              rank={person.delivery_Guy_rank}
              onPress={()=>{
                setVisible(!visible)
                navigation.push(routes.ORDER_ON_WAY)}}
            />
          ))}
        </View>
      </View>
    </FormModal>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_800ExtraBold,
    fontSize: 19,
    marginBottom: 3,
  },
  reciept_ID: {
    color: Colors.fontColor,
    fontFamily: font.PublicSans_700Bold,
    fontSize: 15,
    marginBottom: 15,
    padding:5,
  },
  options :{
    alignSelf:'center',
    width:"88%",
    alignItems:'center',
    marginBottom:100,
    borderWidth:1,
    borderColor:Colors.borders,
    borderStyle:'solid',
    borderRadius:20,
    padding:10,
  },
});
