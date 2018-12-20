import React from 'react';

class List extends React.Component {

  btnRef = React.createRef();

  getData= (items) => {
    return items.map(item => {
      return (
        <li key={item.id}>
          <span id="hidden-id">{item.id}</span>
          <p>
            <span id="list-item-title">{item.title}</span>
            <span id="list-item-amount">${item.amount}</span>
            <button ref={this.btnRef} onClick={this.handleClick}>&times;</button>
          </p>
          <p id="description">{item.description}</p>
        </li>
      );
    });
  }

  handleClick = () => {

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
