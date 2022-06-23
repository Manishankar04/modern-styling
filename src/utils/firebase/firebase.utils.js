// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
} from 'firebase/auth';
import{ 
        getFirestore,
        doc,
        getDoc,
        setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcodWD-7anUAKh0J0Wf9-Rkkb3nh0HTHc",
  authDomain: "modern-styling-db.firebaseapp.com",
  projectId: "modern-styling-db",
  storageBucket: "modern-styling-db.appspot.com",
  messagingSenderId: "271725060296",
  appId: "1:271725060296:web:e8594ea8926d0822b105fd"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
prompt:"select_account"
});

export const auth =getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db= getFirestore();

export const createUserDocumentFromAuth = async(userAuth) =>{
    const userDocRef = doc(db,'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot= await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
          });
        } catch (error) {
          console.log('error creating the user', error.message);
        }
      }
    
      return userDocRef;
};