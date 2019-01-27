import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  static propTypes = {
    modalVisible: PropTypes.bool,
    modalTitle: PropTypes.string,
    hideModal: PropTypes.func,
    addItem: PropTypes.func,
    getMaxId: PropTypes.func
  }

  state = {
    isReady: false,
    isVisible: false
  }

  dialog = React.createRef();

  // Modal input refs
  titleRef = React.createRef();
  amountRef = React.createRef();
  descriptionRef = React.createRef();

  componentDidMount() {
    this.setState({ isReady: true }, () => {
      if (this.props.modalVisible) {
        this.setState({ isVisible: true });
        this.show();
      }
    });
  }

  // I need to check if the new props will match the current Modal's state
  componentWillReceiveProps (nextProps) {
    if (nextProps.modalVisible !== this.state.isVisible) {
      this.setState({ isVisible: nextProps.modalVisible}, () => {
        if (this.state.isVisible) this.show();
        else this.hide();
      });
    }
  }

  show = () => {
    this.dialog.current.showModal();
  }

  hide = () => {
    this.props.hideModal();
    this.dialog.current.close();
  }

  handleInput = () => {
    // Validate some fields
    if (this.titleRef.current.value === '' || this.amountRef.current.value === '') {
      alert('Title and Amount are required values');
      return false;
    }

    const item = {
      title: this.titleRef.current.value,
      amount: parseFloat(this.amountRef.current.value),
      description: this.descriptionRef.current.value
    }

    this.props.addItem(item, this.props.modalTitle.toLowerCase()+'s');

    // Clean the input
    this.titleRef.current.value = '';
    this.amountRef.current.value = '';
    this.descriptionRef.current.value = '';
    this.titleRef.current.focus();
  }

  render() {
    return (
      <dialog className="modal" ref={this.dialog}>
        <div className="modal-header">
          <h1>New {this.props.modalTitle}</h1>
        </div>
        <div className="modal-input">
          <input ref={this.titleRef} required id="modal-input-title" type="text" placeholder={`Title of your ${this.props.modalTitle}`}/>
          <input ref={this.amountRef} required id="modal-input-amount" type="number" placeholder="Amount"/>
          <textarea ref={this.descriptionRef} id="modal-input-text" placeholder="Description"></textarea>
        </div>
        <div className="modal-footer">
          <button onClick={this.handleInput}>Add</button>
          <button onClick={this.hide}>Close</button>
        </div>
      </dialog>
    );
  }
}

export default Modal;
