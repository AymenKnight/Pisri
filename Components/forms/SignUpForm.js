import React,{useContext, useState} from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import * as yup from 'yup';
import { Dimensions } from "react-native";
 import { MediaQueryStyleSheet ,MediaQuery} from "react-native-responsive";

import Form from '../formComp/Form'
import FormModal from '../formComp/FormModal';
import FormTextInput from '../formComp/FormTextInput'
import FormTitle from '../formComp/FormTitle'
import Help_Button from '../formComp/Help_Button';
import Help_Text from '../formComp/Help_Text';
import SubmitButton from '../formComp/SubmitButton';
import { AuthContext } from '../context/AuthContext';
import { SignVisibleContext } from '../context/SignVisibleContext';
import { auth } from '../../firebase/firebase.utils';

const SignUp_validationSchema=yup.object().shape(
{
 Full_Name:yup.string().required().label("Full Name"),   
 Email:yup.string().email().required().label("Email"),
 Password:yup.string().required().min(4).label("Password")
}
) 
 const window = Dimensions.get("window");
 const screen = Dimensions.get("screen");

export default function SignUpForm({visible,setVisible}) {
    const [dimensions, setDimensions] = useState({ window, screen });
    const {user,setUser}=useContext(AuthContext)
      const {
        SignInVisible,
        setSignInVisible,
        SignUpVisible,
        setSignUpVisible,
      } = useContext(SignVisibleContext);
    const onSubmit=(values)=>{
      auth.createUserWithEmailAndPassword(values.Email,values.Password).then((userInfo)=>{
          setUser(userInfo.user)
      }).catch(error=>{
        setUser(null)
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
     
    }
    const openSignIn=()=>{
                setSignUpVisible(!SignUpVisible)
                setSignInVisible(!SignInVisible);
             
    }
    return (
      <>
        <MediaQuery maxDeviceHeight={720}>
          <FormModal
            visible={visible}
            onClosed={() => setVisible(false)}
            height="80%"
          >
            <View style={styles.container}>
              <Form
                onSubmit={onSubmit}
                validationSchema={SignUp_validationSchema}
                initialValues={{
                  Full_Name: "",
                  Email: "",
                  Password: "",
                }}
              >
                <FormTitle title="Sign UP" />

                <View style={styles.inputs_Container}>
                  <FormTextInput
                    name="Full_Name"
                    title="Full Name"
                    icon="person"
                    width={80}
                  />

                  <FormTextInput
                    name="Email"
                    title="Email"
                    icon="email"
                    width={80}
                  />

                  <FormTextInput
                    name="Password"
                    title="Password"
                    icon="lock"
                    width={80}
                    secret={true}
                  />
                </View>

                <SubmitButton
                  backgroundcolor="primary"
                  title="Sign Up"
                  width={80}
                />
                <View style={styles.help_Container}>
                  <Help_Text title="Aleardy a User ?  " />
                  <Help_Button title="Sign In " onPress={openSignIn} />
                </View>
              </Form>
            </View>
          </FormModal>
        </MediaQuery>
        <MediaQuery minDeviceHeight={721}>
          <FormModal
            visible={visible}
            onClosed={() => setVisible(false)}
            height="75%"
          >
            <View style={styles.container}>
              <Form
                onSubmit={onSubmit}
                validationSchema={SignUp_validationSchema}
                initialValues={{
                  Full_Name: "",
                  Email: "",
                  Password: "",
                }}
              >
                <FormTitle title="Sign UP" />

                <View style={styles.inputs_Container}>
                  <FormTextInput
                    name="Full_Name"
                    title="Full Name"
                    icon="person"
                    width={80}
                  />

                  <FormTextInput
                    name="Email"
                    title="Email"
                    icon="email"
                    width={80}
                  />

                  <FormTextInput
                    name="Password"
                    title="Password"
                    icon="lock"
                    width={80}
                    secret={true}
                  />
                </View>

                <SubmitButton
                  backgroundcolor="primary"
                  title="Sign Up"
                  width={80}
                />
                <View style={styles.help_Container}>
                  <Help_Text title="Aleardy a User ?  " />
                  <Help_Button title="Sign In " onPress={openSignIn} />
                </View>
              </Form>
            </View>
          </FormModal>
        </MediaQuery>
      </>
    );     
}

const styles = MediaQueryStyleSheet.create(
  {
    container: {
      padding: 10,
      paddingTop: 20,
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
      justifyContent: "center",
      alignItems: "center",
    },
  },
  {
    "@media (max-device-height: 720)": {
      help_Container: {
        marginTop: 2,
      },
    },
    "@media (min-device-height: 721)": {
      help_Container: {
        marginTop: 10,
      },
    },
  }
);
