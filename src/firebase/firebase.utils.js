import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: 'AIzaSyCQfYVr3BqK884e_rT0CmpXYuMwcE58fT4',
   authDomain: 'crwn-db-8994d.firebaseapp.com',
   databaseURL: 'https://crwn-db-8994d.firebaseio.com',
   projectId: 'crwn-db-8994d',
   storageBucket: 'crwn-db-8994d.appspot.com',
   messagingSenderId: '960146500200',
   appId: '1:960146500200:web:f9c923db4e0bf66715e9dd',
   measurementId: 'G-5SY2QL1MVE'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
