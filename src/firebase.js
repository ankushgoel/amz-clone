import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbdxweTlb1UI9P48aWrJjZCAO0wUYmYQQ",
  authDomain: "amz-clone-c6c8b.firebaseapp.com",
  databaseURL: "https://amz-clone-c6c8b.firebaseio.com",
  projectId: "amz-clone-c6c8b",
  storageBucket: "amz-clone-c6c8b.appspot.com",
  messagingSenderId: "1012051626990",
  appId: "1:1012051626990:web:01f08a4266601654999cff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
