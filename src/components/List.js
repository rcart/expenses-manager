import React from 'react';
import { incomes, expenses } from '../data.js';

class List extends React.Component {

  componentDidMount = () => {
    // Here I'll update the App's state with the incomes/expenses from data.js
    this.props.addItem(incomes, 'incomes');
    this.props.addItem(expenses, 'expenses');
  }

  getData= (items) => {
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

  render() {
    return (
      <ul className={`list-container-${this.props.items}`}>
        {this.props.items === 'incomes' &&
          this.getData(incomes)
        }
        {this.props.items === 'expenses' &&
            this.getData(expenses)
        }
      </ul>
    );
  }
}

export default List;
