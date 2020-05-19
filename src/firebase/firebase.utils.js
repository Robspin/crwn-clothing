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

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         });
      } catch (error) {
         console.log('error creating user', error.message);
      }
   }

   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
