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

export const auth =firebase.auth()
export const firestore =firebase.firestore()

export default firebase