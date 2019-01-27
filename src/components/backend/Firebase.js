// Main file for my Firebase Database backend
import firebase from 'firebase/app';
import 'firebase/database';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAWk_q7qPT6fyPt-gVxHc1RCG7o5BscFfQ",
  authDomain: "expenses-tracker-6e2b8.firebaseapp.com",
  databaseURL: "https://expenses-tracker-6e2b8.firebaseio.com",
  projectId: "expenses-tracker-6e2b8",
  messagingSenderId: "937584653161"
});

const database = app.database();
// Expenses/Incomes children
try {
  database.ref().child('incomes');
  database.ref().child('expenses');
} catch(e) {
  console.log(e);
}


export default database;
