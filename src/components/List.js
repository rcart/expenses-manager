import React from 'react';

class List extends React.Component {

  getData= (items) => {
    return items.map((item, index) => {
      return (
        <li key={item.id}>
          <span id="hidden-id">{item.id}</span>
          <p>
            <span id="list-item-title">{item.title}</span>
            <span id="list-item-amount">${item.amount}</span>
            <button
              onClick={() => this.handleClick(index)}>
              &times;
            </button>
          </p>
          <p id="description">{item.description}</p>
        </li>
      );
    });
  }

  handleClick = (index) => {
    this.props.removeItem(this.props.items, index);
  }

  render() {
    return (
      <ul className={`list-container-${this.props.items}`}>
        {this.props.items === 'incomes' &&
          this.getData(this.props.listItems)
        }
        {this.props.items === 'expenses' &&
            this.getData(this.props.listItems)
        }
      </ul>
    );
  }
}

export default List;
