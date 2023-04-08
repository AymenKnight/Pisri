import { getApp, getApps, initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from 'firebase/firestore';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDD_71rSezjEGs9_4RaXPjkPINDp5qHSsc',
  authDomain: 'pisri-f783a.firebaseapp.com',
  projectId: 'pisri-f783a',
  storageBucket: 'pisri-f783a.appspot.com',
  messagingSenderId: '995205827781',
  appId: '1:995205827781:web:47aa246bf2a3a8ad8a74ac',
};

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore();

export const addUserOnSignUp = async (
  displayName: string,
  email: string,
  password: string,
) => {
  try {
    // Create user account in Firebase Authentication
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // Set the display name for the user
    await updateProfile(user, { displayName });

    // Store user data in Firestore
    const userDocRef = doc(collection(db, 'users'), user.uid);
    await setDoc(userDocRef, {
      displayName,
      email,
    });

    console.log('User created successfully!');
  } catch (error) {
    console.error('Error creating user: ', error);
  }
};

// export const addCollectionToFirebase = async (
//   collectionKey,
//   categoriesArray,
// ) => {
//   const collectionRef = firestore.collection(collectionKey);
//   const batch = firestore.batch();
//   categoriesArray.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };

// export const convertCollectionsSnapshotToMap = (
//   snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
// ): Record<string, any> => {
//   const transformatedCollections = snapshot.docs.map((doc) => {
//     const { name, products } = doc.data();
//     return {
//       id: doc.id,
//       name,
//       products,
//     };
//   });
//   return transformatedCollections.reduce(
//     (acc: Record<string, any>, collection) => {
//       acc[collection.name.toLowerCase()] = collection;
//       return acc;
//     },
//     {},
//   );
// };

export const fetchCategoriesNames = async () => {
  const categoriesCollection = collection(db, 'CategoriesNames');
  const q = query(categoriesCollection);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((document) => {
    console.log(document.data().name);
    return document.data().name;
  });
};

export { auth, db };
export default firebaseApp;
