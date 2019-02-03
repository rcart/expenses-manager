import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import Modal from './Modal';
import SocialLogin from './SocialLogin';
// Firebase DB handler
import firebase from 'firebase/app';
import { auth } from './backend/Firebase';
import database from './backend/Firebase';

class App extends Component {

  state = {
    incomes: [],
    expenses: [],
    modalVisible: false,
    modalTitle: '',
    // Firebase related state
    currentUser: 'anonymous'
  };

  // Here I need to get all the items from Firebase and update the app's state
  // once the App component is mounted
  componentWillMount() {
    const user = this.state.currentUser;
    this.getItemsFromDb(user, 'incomes');
    this.getItemsFromDb(user, 'expenses');
  }
  handleGithubSignIn = (platform) => {
    const provider = new firebase.auth[`${platform}AuthProvider`]();
    auth.signInWithPopup(provider)
      .then( res => {
        this.setState({ currentUser: res.user.uid })
        this.getItemsFromDb(res.user.uid, 'incomes');
        this.getItemsFromDb(res.user.uid, 'expenses');
      })
      .catch( err => console.log(err))
  }

  signOutUsers = () => {
    // After login out, I need to clear the app's state
    firebase.auth().signOut().then(() => {
      this.setState({ 
        incomes: [],
        expenses: [],
        currentUser: 'anonymous'
      });
    });
  }

  getItemsFromDb = (user, from) => {
    let tmp = [];
    database.ref(`${user}/${from}/`).once('value')
      .then( snap => {
        snap.forEach( item => {
          tmp.push({
            key: item.key,
            amount: item.val().amount,
            description: item.val().description,
            title: item.val().title
          });
        });
        this.setState({ [from]: tmp });
      })
  }

  addItem= (data, to) => {
    // Saving data to Firebase before pushing to state
    const user = this.state.currentUser;
    const key = database.ref().child(`${user}/${to}`).push(data).key;
    data.key = key;
    let items;
    if (this.state[to].length > 0) items = [ ...this.state[to], data ];
    else items = [ data ];
    this.setState({ [to]: items });

    // This listeners are going to fire the changes from the firebase db into this app
    database.ref(`/${user}/`).on('child_added', snap => {
      console.log('Snap', snap.val());
    });
    database.ref(`/${user}/`).on('child_removed', snap => {
      console.log('Snap', snap.val());
    });
  }

  removeItem = (data, key) => {
    const items = this.state[data].filter(item => item.key !== key);
    this.setState({ [data]: items });
    //Remove data from Firebase
    database.ref(`/${this.state.currentUser}/${data}/${key}`).remove();
  }

  totalValues = (from) => {
    let items;
    if (this.state[from].length > 0) items = [ ...this.state[from] ];
    else items = [];

    if (items.length === 0) return 0;

    let total = 0;
    for (let i of items) total += i.amount;
    return total;
  }

  topValue = (from) => {
    let items;
    if (this.state[from].length > 0) items = [ ...this.state[from] ];
    else items = [];

    if(items.length === 0) return '';

    let topVal;
    topVal = Math.max( ...items.map(item => item.amount));
    for (let i of items) {
      if (i.amount === topVal) return ` ${i.title}, $${topVal}`;
    }
  }

  // Modal handlers
  showModal = (title) => {
    this.setState({ modalVisible: true, modalTitle: title })
  }

  hideModal = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="container-incomes">
            <Header title="Incomes"/>
            <List
              items='incomes'
              addItem={this.addItem}
              removeItem={this.removeItem}
              listItems={this.state.incomes}
            />
            <h2 className="total">Total: <em>${this.totalValues('incomes')}</em></h2>
            <Footer
              title="Income"
              showModal={this.showModal}
              topValue={this.topValue}
            />
          </div>
          <div className="container-expenses">
            <Header title="Expenses"/>
            <List
              items='expenses'
              addItem={this.addItem}
              removeItem={this.removeItem}
              listItems={this.state.expenses}
            />
            <h2 className="total">Total: <em>${this.totalValues('expenses')}</em></h2>
            <Footer
              title="Expense"
              showModal={this.showModal}
              topValue={this.topValue}
            />
          </div>
          <Modal
            modalVisible={this.state.modalVisible}
            modalTitle={this.state.modalTitle}
            hideModal={this.hideModal}
            addItem={this.addItem}
            getMaxId={this.getMaxId}
          />
        </div>
        <SocialLogin 
          handleGithubSignIn={this.handleGithubSignIn}
          signOutUsers={this.signOutUsers}
          currentUser={this.state.currentUser}
        />
      </div>
    );
  }
}

export default App;
