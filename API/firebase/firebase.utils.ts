import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addUserOnSignUp = (
  userAuth: firebase.auth.UserCredential | null,
  displayName: string,
): firebase.firestore.DocumentReference | null => {
  if (!userAuth) return null;

  const email = userAuth.user?.email;

  return firestore.collection('users').add({
    email,
    displayName,
  });
};

export const getUserInfo = async (
  userAuth: firebase.auth.UserCredential,
): Promise<
  firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
> => {
  const userRef = await firestore.collection('users').doc(userAuth.user?.uid);
  return userRef;
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

export const convertCollectionsSnapshotToMap = (
  snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
): Record<string, any> => {
  const transformatedCollections = snapshot.docs.map((doc) => {
    const { name, products } = doc.data();
    return {
      id: doc.id,
      name,
      products,
    };
  });
  return transformatedCollections.reduce((acc, collection) => {
    acc[collection.name.toLowerCase()] = collection;
    return acc;
  }, {});
};

export default firebase;
