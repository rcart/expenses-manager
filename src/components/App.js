import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';

class App extends Component {

  state = {
    incomes: [{
      id: 1,
      title: 'Salary',
      amount: 14000,
      description: 'My monthly salary'
    }],
    expenses: [{
      id: 1,
      title: 'Expenses',
      amount: 14000,
      description: 'My monthly salary'
    }]
  };

  addValue = (data) => {

  }

  removeValue = (data, index) => {

  }

  clearAll = (data) => {

  }

  totalValues = (data) => {
    let tmp = { ...this.state[data] };

    tmp['new'] = {test: 123, name: 'me'};

    console.log(tmp);
  }

  topValue = (data) => {

  }

  render() {
    return (
      <div className="wrapper">
        <div className="container-incomes">
          <Header title="Incomes"/>
          <List items='incomes'/>
          <h2 className="total">Total: {this.totalValues('incomes')}</h2>
          <Footer title="Income"/>
        </div>
        <div className="container-expenses">
          <Header title="Expenses"/>
          <List items='expenses'/>
          <h2 className="total">Total: {this.totalValues('expenses')} </h2>
          <Footer title="Expense"/>
        </div>
      </div>
    );
  }
}

export default App;
