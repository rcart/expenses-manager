import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import Modal from './Modal';
// Firebase DB handler
import database from './backend/Firebase';

class App extends Component {

  state = {
    incomes: [],
    expenses: [],
    maxId: null,
    modalVisible: false,
    modalTitle: ''
  };

  // Here I need to get all the items from Firebase and update the app's state
  componentWillMount() {
    database.ref('testing').set('Testing');
  }

  addItem= (data, to) => {
    let items;
    if (this.state[to].length > 0) items = [ ...this.state[to], data ];
    else items = [ data ];
    this.setState({ [to]: items });
  }

  removeItem = (data, index) => {
    const items = this.state[data].filter((i, j) => j !== index);
    this.setState({ [data]: items });
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

  getMaxId = (from) => {
    let items

    if (this.state[from].length > 0) items = [ ...this.state[from] ];
    else items = this.state[from];

    if (items.length === 0) return 0;
    else return Math.max(...items.map(item => item.id));
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
