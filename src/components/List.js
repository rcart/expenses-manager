import React from 'react';
import { incomes, expenses } from '../data.js';

class List extends React.Component {

  getIncomes= (items) => {
    return items.map(item => {
      return (
        <li key={item.id}>
          <p>
            <span id="list-item-title">{item.title}</span>
            <span id="list-item-amount">${item.amount}</span>
            <a href="#">&times;</a>
          </p>
          <p id="description">{item.description}</p>
        </li>
      );
    });
  }

  getExpenses = (items) => {
    return items.map(item => {
      return (
        <li key={item.id}>
          <p>Title: {item.title}</p>
          <p>Amount: {item.amount}</p>
          <p>Description: {item.description}</p>
        </li>
      );
    });

  }

  render() {
    return (
      <ul className={`list-container-${this.props.items}`}>
        {this.props.items === 'incomes' &&
          this.getIncomes(incomes)
        }
        {this.props.items === 'expenses' &&
            this.getIncomes(expenses)
        }
      </ul>
    );
  }
}

export default List;
