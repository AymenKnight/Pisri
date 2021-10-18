import firebase from "firebase/app";
import  "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDD_71rSezjEGs9_4RaXPjkPINDp5qHSsc",
  authDomain: "pisri-f783a.firebaseapp.com",
  projectId: "pisri-f783a",
  storageBucket: "pisri-f783a.appspot.com",
  messagingSenderId: "995205827781",
  appId: "1:995205827781:web:47aa246bf2a3a8ad8a74ac"
};

firebase.initializeApp(firebaseConfig)


 export const addUserOnSignUp=(userAuth,displayName)=>{
  if(!userAuth)return null;
  
    const email=userAuth.user.email

  firestore.collection("users").add({
    email,
    displayName: displayName,
  }).then(userRef=>{
     console.log("Document written with ID: ", userRef.id);
     return userRef ;
  }).catch(error=>{
    console.log("Error adding document: ", error.message);
  })
}

export const getUserInfo = async (userAuth)=>{
   const userRef= await firestore.collection("users").doc(userAuth.uid);
  return userRef;
}

export const auth =firebase.auth()
export const firestore =firebase.firestore()

export default firebase