import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyBhleD4Wh0kpkv2XZsScWBEfOSBkuHDIQo",
    authDomain: "crwn-db-438bb.firebaseapp.com",
    projectId: "crwn-db-438bb",
    storageBucket: "crwn-db-438bb.appspot.com",
    messagingSenderId: "224687188429",
    appId: "1:224687188429:web:5c007073ff4ecd0e213c84",
    measurementId: "G-98Y1XKC6H6"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }

export const auth = firebase.auth();

export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    // if user does not exist create the  new user
    if (!snapshot.exists) {
      const {displayName, email} = userAuth;
      const createAt = new Date()
      try {
    await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch (e) {
        console.error('error creating user: ' + e.message)
      }

    } 
    return userRef;
    
  }

 export const convertCollectionSnapshotToMap = (collections) => {
    const transoformCollection = collections.docs.map(doc => {
      const {title, items} = doc.data()
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    })
   return  transoformCollection.reduce((accumulator, collection) =>{
   accumulator[collection.title.toLowerCase()] = collection
     return accumulator;
   }
   ,
   {});

  }
   

    export const getCurrentUser = () => {
      return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
          unsubscribe()
          resolve(userAuth)
        }, reject);
      })
    }

    
  googleProvider.setCustomParameters({prompt: 'select_account'});
  export const addCollectionDocuments = async (collectionKey, objectsToAdd)  => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      console.log(newDocRef)
    batch.set(newDocRef, obj);
    });

    await batch.commit();
  }

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
  export default firebase;
