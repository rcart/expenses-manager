import React from 'react';

class Modal extends React.Component {
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
    // Get the max id and add 1
    let id = this.props.getMaxId(this.props.modalTitle.toLowerCase()+'s');
    id = parseInt(id) + 1;

    const item = {
      id,
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
