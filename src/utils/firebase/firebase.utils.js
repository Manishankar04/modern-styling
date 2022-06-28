// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
prompt:"select_account"
});

export const auth =getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db= getFirestore();

export const createUserDocumentFromAuth = async(
  userAuth, 
  additionalInformation={}) =>{
  if(!userAuth)return;
    const userDocRef = doc(db,'users', userAuth.uid);

    const userSnapshot= await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation,
          });
        } catch (error) {
          console.log('error creating the user', error.message);
        }
      }
    
      return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email,password) =>{
  if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)

}
export const signInAuthUserWithEmailAndPassword = async(email,password) =>{
  if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)

}