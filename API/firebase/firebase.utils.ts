import { getApp, getApps, initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
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

export type Category = {
  name: string;
  id: string;
};
interface Product {
  id: string;
  name: string;
  price: {
    amount: number;
    currency: string;
  };
  categoryID: string;
}

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

export const fetchCategoriesNames = async () => {
  const categoriesCollection = collection(db, 'categories');
  const q = query(categoriesCollection);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((document) => {
    return document.data() as Category;
  });
};

export const fetchProductsByCategoryID = async (categoryID: string) => {
  const productsRef = collection(db, 'products');
  const q = query(productsRef, where('categoryID', '==', categoryID));
  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return products as Product[];
};

export const fetchProductsByName = async (search: string) => {
  const q = query(
    collection(db, 'products'),
    where('name', '>=', search),
    where('name', '<=', search + '\uf8ff'),
  );
  const querySnapshot = await getDocs(q);

  const products = querySnapshot.docs.map((document) => {
    return {
      id: document.id,
      ...document.data(),
    } as Product;
  });
  return products;
};

export const addCategory = async (name: string) => {
  const categoryDocRef = doc(collection(db, 'categories'));
  await setDoc(categoryDocRef, { name, products: [] });
  return categoryDocRef.id;
};
export const addProductToCategory = async (
  categoryId: string,
  product: Omit<Product, 'id'>,
) => {
  const productDocRef = doc(
    collection(db, 'categories', categoryId, 'products'),
  );
  await setDoc(productDocRef, product);
  return productDocRef.id;
};

const categories: Category[] = [
  {
    id: '1',
    name: 'Drinks',
  },

  {
    id: '2',
    name: 'Dairy products',
  },
  {
    id: '3',
    name: 'Candies',
  },
];

const products: Product[] = [
  {
    id: '1',
    name: 'Milk',
    price: {
      amount: 10,
      currency: 'Dzd',
    },
    categoryID: '2',
  },
  {
    id: '2',
    name: 'cheese',
    price: {
      amount: 100,
      currency: 'Dzd',
    },
    categoryID: '2',
  },
  {
    id: '3',
    name: 'Yogurt',
    price: {
      amount: 10,
      currency: 'Dzd',
    },
    categoryID: '2',
  },
  {
    id: '4',
    name: 'Butter',
    price: {
      amount: 10,
      currency: 'Dzd',
    },
    categoryID: '2',
  },
  {
    id: '5',
    name: 'jolly rancher candy',
    price: {
      amount: 10,
      currency: 'Dzd',
    },
    categoryID: '3',
  },
  {
    id: '6',
    name: 'milky-way',
    price: {
      amount: 10,
      currency: 'Dzd',
    },
    categoryID: '3',
  },
  {
    id: '7',
    name: 'nestle smarties candy',
    price: {
      amount: 10,
      currency: 'Dzd',
    },
    categoryID: '3',
  },
  {
    id: '8',
    name: 'jus',
    price: {
      amount: 1050,
      currency: 'Dzd',
    },
    categoryID: '1',
  },
  {
    id: '9',
    name: 'water',
    price: {
      amount: 10,
      currency: 'Dzd',
    },
    categoryID: '1',
  },
  {
    id: '10',
    name: 'tea',
    price: {
      amount: 1044,
      currency: 'Dzd',
    },
    categoryID: '1',
  },
  {
    id: '11',
    name: 'Soft drinks',
    price: {
      amount: 1005,
      currency: 'Dzd',
    },
    categoryID: '1',
  },
];

export async function addCategories() {
  const categoriesRef = collection(db, 'categories');

  for (const category of categories) {
    await addDoc(categoriesRef, category);
  }
}

export async function addProducts() {
  const productsRef = collection(db, 'products');

  for (const product of products) {
    await addDoc(productsRef, product);
  }
}

export { auth, db };
export default firebaseApp;
