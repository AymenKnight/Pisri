import React, { useContext, } from "react";
import { Alert, StyleSheet, View } from 'react-native'
import * as yup from 'yup';

import Form from '../formComp/Form'
import FormModal from '../formComp/FormModal';
import FormTextInput from '../formComp/FormTextInput'
import FormTitle from '../formComp/FormTitle'
import Help_Button from '../formComp/Help_Button';
import Help_Text from '../formComp/Help_Text';
import SubmitButton from '../formComp/SubmitButton';
import { SignVisibleContext } from "../context/SignVisibleContext";
import { auth } from "../../firebase/firebase.utils";

const SignIn_validationSchema=yup.object().shape(
{
 Email:yup.string().email().required().label("Email"),
 Password:yup.string().required().min(4).label("Password")
}
) 


export default function SignInForm({visible,setVisible}) {
    const {
      SignInVisible,
      setSignInVisible,
      SignUpVisible,
      setSignUpVisible,
    } = useContext(SignVisibleContext);
    return (
      <FormModal visible={visible} onClosed={()=>setVisible(false)}   >
        <View style={styles.container}>
          <Form
            onSubmit={(values)=>{
              auth.signInWithEmailAndPassword(values.Email,values.Password).catch((error)=>{
                console.log(error)
                  Alert.alert(
    "Sign Up error !",
    error.message,
    [
      {
        text: "Retry",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );

              })
            }}
            validationSchema={SignIn_validationSchema}
            initialValues={{
              Email: "",
              Password: "",
            }}
          >
            <FormTitle title="Sign In" />

            <View style={styles.inputs_Container}>
              <FormTextInput
                name="Email"
                title="Email"
                icon="email"
                width={80}
              />

              <FormTextInput
                name="Password"
                title="Password"
                icon="email"
                width={80}
                secret={true}
              />
            </View>

            <SubmitButton
              backgroundcolor="primary"
              title="Sign In"
              width={80}
              
            />
            <View style={styles.help_Container}>
              <Help_Text title="New User ?  " />
              <Help_Button title="Sign Up "  onPress={()=>{
                setSignInVisible(!SignInVisible)
                setSignUpVisible(!SignUpVisible)
              }}  />
            </View>
          </Form>
        </View>
      </FormModal>
    );     
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: "white",
  },
  inputs_Container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  help_Container: {
    flexDirection: "row",
    marginTop: 17,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
