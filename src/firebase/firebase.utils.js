
import { initializeApp} from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";
import { getDoc,doc, setDoc, getFirestore  } from "firebase/firestore"; 
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBhleD4Wh0kpkv2XZsScWBEfOSBkuHDIQo",
    authDomain: "crwn-db-438bb.firebaseapp.com",
    projectId: "crwn-db-438bb",
    storageBucket: "crwn-db-438bb.appspot.com",
    messagingSenderId: "224687188429",
    appId: "1:224687188429:web:5c007073ff4ecd0e213c84",
    measurementId: "G-98Y1XKC6H6"
  };
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();
  export const auth = getAuth();


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    let userRef = doc(db, "users", `${userAuth.uid}`);

    const userSnap = await getDoc(userRef);

    // if user does not exist create the  new user
    if (!userSnap.exists()) {
      const {displayName, email} = userAuth;
      const createAt = new Date()

      try {
      userRef = await setDoc(doc(db, 'users', `${userAuth.uid}`), {
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch (e) {
        console.error('error creating user: ' + e.message)
      }

    } 

    return ({userSnap, id: userRef ? userRef.uid : userAuth.uid });
    
  }

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  
  export const signInWithGoogle = () => signInWithPopup(auth, provider);
  export default app;
