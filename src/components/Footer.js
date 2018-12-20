import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    topValue: PropTypes.func
  }

  render() {
    return (
      <div className="footer">
        <p
          id="footer-text">
          Top {this.props.title}: {this.props.topValue(`${this.props.title.toLowerCase()}s`)}
        </p>
        <button
          id="footer-addBtn"
          onClick={() => this.props.showModal(this.props.title)}>New {this.props.title}
        </button>
      </div>
    );
  }
}

export default Footer;
