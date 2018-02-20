import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyCbQeoowrOrgvphxXMwFivDubHFPvw0D0U",
  authDomain: "mr-sinister.firebaseapp.com",
  databaseURL: "https://mr-sinister.firebaseio.com",
  projectId: "mr-sinister",
  storageBucket: "mr-sinister.appspot.com",
  messagingSenderId: "83324194011"
}

//the root app just in case we need it
export const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); //the real-time database
export const auth = firebaseApp.auth(); //the firebase auth namespace
