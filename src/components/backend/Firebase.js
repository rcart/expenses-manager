// Main file for my Firebase Database backend
import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAWk_q7qPT6fyPt-gVxHc1RCG7o5BscFfQ",
  authDomain: "expenses-tracker-6e2b8.firebaseapp.com",
  databaseURL: "https://expenses-tracker-6e2b8.firebaseio.com",
  projectId: "expenses-tracker-6e2b8",
  messagingSenderId: "937584653161"
});

const db = firebase.database(app);
const base = firebase.createClass(app);

export default base;
