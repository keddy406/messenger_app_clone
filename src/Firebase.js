import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDoPCZy8ZUWM5TtW-z6gZ0vIpkTeSU2Doc",
  authDomain: "messanger-app-98bff.firebaseapp.com",
  databaseURL: "https://messanger-app-98bff.firebaseio.com",
  projectId: "messanger-app-98bff",
  storageBucket: "messanger-app-98bff.appspot.com",
  messagingSenderId: "980916677424",
  appId: "1:980916677424:web:013c1a1c309ad8a3b1b6f5",
  measurementId: "G-92DPPHPWSV",
});
const db = firebaseApp.firestore();

export default db;
