import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config=
    {
        apiKey: "AIzaSyDplIZb4PpJv5irkxUAf7rOpPTaAfDEiyE",
        authDomain: "crwn-clothing-db-2e206.firebaseapp.com",
        projectId: "crwn-clothing-db-2e206",
        storageBucket: "crwn-clothing-db-2e206.appspot.com",
        messagingSenderId: "628596912759",
        appId: "1:628596912759:web:aa29864321aa5393cecc72",
        measurementId: "G-3QB6CGVBJ2"
      }
firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle=() => auth.signInWithPopup(provider);

export default firebase;
