import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import Modal from './Modal';

class App extends Component {

  state = {
    incomes: [],
    expenses: [],
    maxId: null,
    modalVisible: false,
    modalTitle: ''
  };

  addItem= (data, to) => {
    let items;
    if (this.state[to].length > 0) items = [ ...this.state[to], data ];
    else items = data;
    this.setState({ [to]: items });
  }

  removeItem = (data, index) => {

  }

  clearAllItems = (data) => {

  }

  totalValues = (from) => {
    const items = [ ...this.state[from] ];
    if (items.length === 0) return false;
    let total = 0;
    for (let i of items) total += i.amount;
    return total;
  }

  topValue = (data) => {

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
          />
          <h2 className="total">Total: <em>${this.totalValues('incomes')}</em></h2>
          <Footer
            title="Income"
            showModal={this.showModal}
          />
        </div>
        <div className="container-expenses">
          <Header title="Expenses"/>
          <List
            items='expenses'
            addItem={this.addItem}
          />
          <h2 className="total">Total: <em>${this.totalValues('expenses')}</em></h2>
          <Footer
            title="Expense"
            showModal={this.showModal}
          />
        </div>
        <Modal
          modalVisible={this.state.modalVisible}
          modalTitle={this.state.modalTitle}
          hideModal={this.hideModal}
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default App;
