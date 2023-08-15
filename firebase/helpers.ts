import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import firebaseConfig from './connect';
// Initialize Firebase
initializeApp(firebaseConfig);
const db: any = getFirestore()

const fetchFirestore = {
  getTimestamp: (timestampInSeconds: any) => {
    return new Date(timestampInSeconds*1000);
  },
  setDoc: async (collectionPath: any, data: any) => {
    const querySnapshot = await addDoc(collection(db, collectionPath), data);
    return querySnapshot;
},
  getDoc: async (collectionPath: any) => {
    const querySnapshot = await getDoc(doc(db, collectionPath));
    return querySnapshot.data();
  },
  getDocs: async (collectionPath: any, callback: any) => {
    const querySnapshot = await getDocs(collection(db, collectionPath));
    return querySnapshot.docs.map(callback);
  }
}

export {db, fetchFirestore};