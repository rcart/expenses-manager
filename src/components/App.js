import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import Modal from './Modal';
// Firebase DB handler
import database from './backend/Firebase';
import auth from './backend/Firebase';

class App extends Component {

  state = {
    incomes: [],
    expenses: [],
    modalVisible: false,
    modalTitle: ''
  };

  // Here I need to get all the items from Firebase and update the app's state
  // once the App component is mounted
  componentWillMount() {
    this.getItemsFromDb('incomes');
    this.getItemsFromDb('expenses');
  }

  getItemsFromDb = (from) => {
    let tmp = [];
    database.ref(`/${from}/`).once('value')
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
    const key = database.ref().child(`${to}`).push(data).key;
    data.key = key;
    let items;
    if (this.state[to].length > 0) items = [ ...this.state[to], data ];
    else items = [ data ];
    this.setState({ [to]: items });

    // Testing
  }

  removeItem = (data, key) => {
    const items = this.state[data].filter(item => item.key !== key);
    this.setState({ [data]: items });
    //Remove data from Firebase
    database.ref(`/${data}/${key}`).remove();
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
    );
  }
}

export default App;
