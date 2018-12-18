import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import Modal from './Modal';

class App extends Component {

  state = {
    incomes: [],
    expenses: [],
    modalVisible: true
  };

  addItem= (data, to) => {
    const items = [ ...this.state[to], data ];
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
    items.forEach((item, index) => {
      for (let i of item) total += i.amount;
    });
    return total;
  }

  topValue = (data) => {

  }

  // Modal handlers
  showModal = () => {
    this.setState({ modalVisible: true })
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
          <h2 className="total">Total: {this.totalValues('incomes')}</h2>
          <Footer title="Income"/>
        </div>
        <div className="container-expenses">
          <Header title="Expenses"/>
          <List
            items='expenses'
            addItem={this.addItem}
          />
          <h2 className="total">Total: {this.totalValues('expenses')} </h2>
          <Footer
            title="Expense"
            showModal={this.showModal}
          />
        </div>
        <Modal
          modalVisible={this.state.modalVisible}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}

export default App;
