import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBKPMSoXPek0MSbsQrR6MMzhVUDAzkhtx4",
  authDomain: "auroverse-2c305.firebaseapp.com",
  projectId: "auroverse-2c305",
  storageBucket: "auroverse-2c305.appspot.com",
  messagingSenderId: "629878469675",
  appId: "1:629878469675:web:8d9b9eeb823775568c666e",
  measurementId: "G-0DDJMR34TL"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const database = firebaseApp.firestore();
  export const auth = firebaseApp.auth();
  export const storage = firebaseApp.storage();


  export { firebase };
  export default database;