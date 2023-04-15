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
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  available: boolean;
  categoryID: string;
  brands: {
    name: string;
    logo: string;
    description: string;
    variants: {
      name: string;
      volume: string;
      price: {
        amount: number;
        currency: string;
      };
    }[];
  }[];
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
    return { id: document.id, ...document.data() } as Category;
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

const categories: Omit<Category, 'id'>[] = [
  {
    name: 'Drinks',
  },

  {
    name: 'Dairy products',
  },
  {
    name: 'Wheat products',
  },
];

export async function addCategories() {
  const categoriesRef = collection(db, 'categories');

  for (const category of categories) {
    await addDoc(categoriesRef, category);
  }
}

// Define a function to upload a product document to Firestore
async function addProduct(product: Omit<Product, 'id'>) {
  const productsRef = collection(db, 'products');
  await addDoc(productsRef, product);
}

// Define some example data
const fakeProducts: Omit<Product, 'id'>[] = [
  {
    name: 'Soft Drinks',
    description: 'Soft Drinks',
    image: 'https://example.com/cocacola.png',
    available: true,
    categoryID: 'drinks',
    brands: [
      {
        name: 'Coca-Cola',
        logo: 'https://example.com/cocacola-logo.png',
        description: "The world's most popular soda",
        variants: [
          {
            name: 'Coca-Cola',
            volume: '12 oz',
            price: {
              amount: 1.99,
              currency: 'USD',
            },
          },
          {
            name: 'Coca-Cola',
            volume: '20 oz',
            price: {
              amount: 2.49,
              currency: 'USD',
            },
          },
          {
            name: 'Coca-Cola',
            volume: '2 liter',
            price: {
              amount: 3.99,
              currency: 'USD',
            },
          },
        ],
      },

      {
        name: 'Pepsi',
        logo: 'https://example.com/pepsi-logo.png',
        description: 'The choice of a new generation',
        variants: [
          {
            name: 'Pepsi',
            volume: '12 oz',
            price: {
              amount: 1.99,
              currency: 'USD',
            },
          },
          {
            name: 'Pepsi',
            volume: '20 oz',
            price: {
              amount: 2.49,
              currency: 'USD',
            },
          },
        ],
      },
    ],
  },

  {
    name: 'Water',
    description: 'A refreshing drink',
    image: 'https://example.com/water.jpg',
    available: true,
    categoryID: 'drinks',
    brands: [
      {
        name: 'Nestle',
        logo: 'https://example.com/nestle-logo.jpg',
        description: 'A company that produces high-quality water',
        variants: [
          {
            name: '1L',
            volume: '1L',
            price: {
              amount: 1.5,
              currency: 'USD',
            },
          },
          {
            name: '2L',
            volume: '2L',
            price: {
              amount: 2.5,
              currency: 'USD',
            },
          },
        ],
      },
      {
        name: 'Evian',
        logo: 'https://example.com/evian-logo.jpg',
        description: 'A French brand that produces natural mineral water',
        variants: [
          {
            name: '750mL',
            volume: '750mL',
            price: {
              amount: 2.0,
              currency: 'USD',
            },
          },
          {
            name: '1L',
            volume: '1L',
            price: {
              amount: 2.5,
              currency: 'USD',
            },
          },
          {
            name: '1.5L',
            volume: '1.5L',
            price: {
              amount: 3.5,
              currency: 'USD',
            },
          },
        ],
      },
      {
        name: 'Fiji',
        logo: 'https://example.com/fiji-logo.jpg',
        description: 'A brand that produces natural artesian water',
        variants: [
          {
            name: '500mL',
            volume: '500mL',
            price: {
              amount: 1.5,
              currency: 'USD',
            },
          },
          {
            name: '1L',
            volume: '1L',
            price: {
              amount: 2.0,
              currency: 'USD',
            },
          },
          {
            name: '1.5L',
            volume: '1.5L',
            price: {
              amount: 3.0,
              currency: 'USD',
            },
          },
        ],
      },
    ],
  },
  //Dairy products
  {
    name: 'Milk',
    description: 'A dairy product',
    image: 'https://example.com/milk.jpg',
    available: true,
    categoryID: 'dairy',
    brands: [
      {
        name: 'Nestle',
        logo: 'https://example.com/nestle-logo.jpg',
        description: 'A company that produces high-quality milk',
        variants: [
          {
            name: '1L',
            volume: '1L',
            price: {
              amount: 1.5,
              currency: 'USD',
            },
          },
          {
            name: '2L',
            volume: '2L',
            price: {
              amount: 2.5,
              currency: 'USD',
            },
          },
        ],
      },
      {
        name: 'Evian',
        logo: 'https://example.com/evian-logo.jpg',
        description: 'A French brand that produces natural mineral milk',
        variants: [
          {
            name: '750mL',
            volume: '750mL',
            price: {
              amount: 2.0,
              currency: 'USD',
            },
          },
          {
            name: '1L',
            volume: '1L',
            price: {
              amount: 2.5,
              currency: 'USD',
            },
          },
          {
            name: '1.5L',
            volume: '1.5L',
            price: {
              amount: 3.5,
              currency: 'USD',
            },
          },
        ],
      },
    ],
  },
  {
    name: 'cheese',
    description: 'A soft, creamy cheese from Normandy, France.',
    image: 'https://i.imgur.com/eapJbxK.jpg',
    available: true,
    categoryID: 'dairy',
    brands: [
      {
        name: 'President',
        logo: 'https://i.imgur.com/eD1IV7V.png',
        description: 'A French cheese brand founded in 1933.',
        variants: [
          {
            name: 'Camembert',
            volume: '8 oz',
            price: {
              amount: 5.99,
              currency: 'USD',
            },
          },
          {
            name: 'Brie',
            volume: '8 oz',
            price: {
              amount: 6.99,
              currency: 'USD',
            },
          },
        ],
      },
      {
        name: 'Kraft',
        logo: 'https://i.imgur.com/xtIV7O3.png',
        description: 'An American cheese brand founded in 1903.',
        variants: [
          {
            name: 'Camembert',
            volume: '6 oz',
            price: {
              amount: 3.99,
              currency: 'USD',
            },
          },
          {
            name: 'Brie',
            volume: '6 oz',
            price: {
              amount: 4.99,
              currency: 'USD',
            },
          },
        ],
      },
    ],
  },
  {
    name: 'Cheddar',
    description: 'A hard, sharp cheese from England.',
    image: 'https://i.imgur.com/F4MQvyM.jpg',
    available: false,
    categoryID: 'dairy',
    brands: [
      {
        name: 'Tillamook',
        logo: 'https://i.imgur.com/zpCbybP.png',
        description: 'An American cheese brand founded in 1909.',
        variants: [
          {
            name: 'Extra Sharp Cheddar',
            volume: '16 oz',
            price: {
              amount: 9.99,
              currency: 'USD',
            },
          },
          {
            name: 'Sharp Cheddar',
            volume: '16 oz',
            price: {
              amount: 8.99,
              currency: 'USD',
            },
          },
        ],
      },
      {
        name: 'Cabot',
        logo: 'https://i.imgur.com/w1M8M6E.png',
        description: 'An American cheese brand founded in 1919.',
        variants: [
          {
            name: 'Extra Sharp Cheddar',
            volume: '8 oz',
            price: {
              amount: 5.99,
              currency: 'USD',
            },
          },
          {
            name: 'Sharp Cheddar',
            volume: '8 oz',
            price: {
              amount: 4.99,
              currency: 'USD',
            },
          },
        ],
      },
    ],
  },
  //Wheat products
  {
    name: 'Whole Wheat Bread',
    description: 'Made with 100% whole wheat flour and no preservatives.',
    image: 'https://www.example.com/whole-wheat-bread.jpg',
    available: true,
    categoryID: 'wheat',
    brands: [
      {
        name: 'Arnold',
        logo: 'https://www.example.com/arnold-logo.jpg',
        description:
          'Arnold breads are baked with the finest ingredients and contain no high fructose corn syrup.',
        variants: [
          {
            name: 'Whole Wheat',
            volume: '24 oz',
            price: {
              amount: 3.49,
              currency: 'USD',
            },
          },
          {
            name: 'Whole Grains',
            volume: '24 oz',
            price: {
              amount: 3.49,
              currency: 'USD',
            },
          },
        ],
      },
      {
        name: "Nature's Own",
        logo: 'https://www.example.com/natures-own-logo.jpg',
        description:
          "Nature's Own breads are made with premium ingredients, free from artificial preservatives, colors, and flavors.",
        variants: [
          {
            name: '100% Whole Wheat',
            volume: '20 oz',
            price: {
              amount: 2.99,
              currency: 'USD',
            },
          },
          {
            name: 'Honey Wheat',
            volume: '20 oz',
            price: {
              amount: 2.99,
              currency: 'USD',
            },
          },
        ],
      },
    ],
  },
  {
    name: 'Whole Wheat Pasta',
    description: 'Made with 100% whole wheat flour and no additives.',
    image: 'https://www.example.com/whole-wheat-pasta.jpg',
    available: true,
    categoryID: 'wheat',
    brands: [
      {
        name: 'Barilla',
        logo: 'https://www.example.com/barilla-logo.jpg',
        description:
          'Barilla is committed to delivering authentic Italian quality pasta.',
        variants: [
          {
            name: 'Whole Grain',
            volume: '16 oz',
            price: {
              amount: 1.99,
              currency: 'USD',
            },
          },
          {
            name: 'Spaghetti',
            volume: '16 oz',
            price: {
              amount: 1.99,
              currency: 'USD',
            },
          },
        ],
      },
      {
        name: 'De Cecco',
        logo: 'https://www.example.com/de-cecco-logo.jpg',
        description:
          'De Cecco pasta is made from high-quality durum wheat semolina and pure spring water.',
        variants: [
          {
            name: 'Whole Wheat',
            volume: '16 oz',
            price: {
              amount: 2.49,
              currency: 'USD',
            },
          },
          {
            name: 'Fusilli',
            volume: '16 oz',
            price: {
              amount: 2.49,
              currency: 'USD',
            },
          },
        ],
      },
    ],
  },
];
// const productsRef = collection(db, 'products');
// const categoriesRef = collection(productsRef, 'categories');
// export async function createCategories() {
//   for (const category of categories) {
//     const newCategoryRef = doc(categoriesRef);
//     await setDoc(newCategoryRef, {
//       name: category.name,
//     });
//   }
// }
// Upload the example data to Firestore
export async function uploadData() {
  for (const product of fakeProducts) {
    await addProduct(product);
  }
}

export { auth, db };
export default firebaseApp;
