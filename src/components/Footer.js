import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <p id="footer-text">Top {this.props.title}: </p>
        <button id="footer-addBtn" onClick={this.props.showModal}>New {this.props.title}</button>
      </div>
    );
  }
}

export default Footer;
