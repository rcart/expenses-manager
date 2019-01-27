import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    items: PropTypes.string,
    listItems: PropTypes.array,
    handleClick: PropTypes.func,
    removeItem: PropTypes.func
  }

  getData= (items) => {
    return items.map((item) => {
      return (
        <li key={item.key}>
          <p>
            <span id="list-item-title">{item.title}</span>
            <span id="list-item-amount">${item.amount}</span>
            <button
              onClick={() => this.handleClick(item.key)}>
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
