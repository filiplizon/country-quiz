import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB3tp3-SRQNcC3LXHLtWheLuquJd9ra8ps',
  authDomain: 'countryquiz-73f93.firebaseapp.com',
  projectId: 'countryquiz-73f93',
  storageBucket: 'countryquiz-73f93.appspot.com',
  messagingSenderId: '458900104425',
  appId: '1:458900104425:web:3c2698a7d04a6b38cc7c78',
  measurementId: 'G-79WGVTZXVC',
};

const firestore = initializeApp(firebaseConfig);
export const db = getFirestore();

export default firestore;
