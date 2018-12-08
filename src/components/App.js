import React, { Component } from 'react';
import Header from './Header';
import List from './List';

class App extends Component {

  state = {
    incomes: [],
    expenses: []
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container-incomes">
          <Header title="Incomes"/>
          <List items='incomes'/>
        </div>
        <div className="container-expenses">
          <Header title="Expenses"/>
          <List items='expenses'/>
        </div>
      </div>
    );
  }
}

export default App;
