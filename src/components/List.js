import React from 'react';

class List extends React.Component {

  getData= (items) => {
    return items.map(item => {
      return (
        <li key={item.id}>
          <p>
            <span id="list-item-title">{item.title}</span>
            <span id="list-item-amount">${item.amount}</span>
            <button>&times;</button>
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
          this.getData(this.props.listIncomes)
        }
        {this.props.items === 'expenses' &&
            this.getData(this.props.listExpenses)
        }
      </ul>
    );
  }
}

export default List;
