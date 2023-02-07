import 'firebase/firestore';

import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(clientCredentials);
export const db = getFirestore(app);
export const storage = getStorage(app);

const initMyFirebase = () => {
  if (!getApps().length) {
    const app = initializeApp(clientCredentials);
    const auth = getAuth(app);

    console.log('initialize firebase', auth);
  } else {
    console.log('Already initialize firebase');
  }
};

export default initMyFirebase;
