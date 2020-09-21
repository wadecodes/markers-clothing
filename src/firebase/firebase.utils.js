import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAGAo-0vPXyN7nmddnS51ZIt5xC7RN3oT0',
  authDomain: 'markers-clothing.firebaseapp.com',
  databaseURL: 'https://markers-clothing.firebaseio.com',
  projectId: 'markers-clothing',
  storageBucket: 'markers-clothing.appspot.com',
  messagingSenderId: '785697732713',
  appId: '1:785697732713:web:53360914b5cd37b4bf0af8',
  measurementId: 'G-TP3E8VBLQR',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
