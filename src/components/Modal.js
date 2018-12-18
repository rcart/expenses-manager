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
    this.hide();
  }

  render() {
    return (
      <dialog className="modal" ref={this.dialog}>
        <div className="modal-header">
          <h1>New {this.props.modalTitle}</h1>
        </div>
        <div className="modal-input">
          <input ref={this.titleRef} id="modal-input-title" type="text" placeholder={`Title of your ${this.props.modalTitle}`}/>
          <input ref={this.amountRef} id="modal-input-amount" type="number" placeholder="amount"/>
          <textarea ref={this.descriptionRef} id="modal-input-text" placeholder="Description"></textarea>
        </div>
        <div className="modal-footer">
          <button onClick={this.hide}>Close</button>
          <button onClick={this.handleInput}>Add</button>
        </div>
      </dialog>
    );
  }
}

export default Modal;
