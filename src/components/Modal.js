import React from 'react';

class Modal extends React.Component {
  state = {
    isReady: false
  }

  dialog = React.createRef();

  componentDidMount() {
    this.setState({ isReady: true }, () => {
      if (this.props.modalVisible) this.show();
    });
  }

  show = () => {
    this.dialog.current.showModal();
  }

  hide = () => {
    this.props.hideModal();
    this.dialog.current.close();
  }

  render() {
    return (
      <dialog className="modal" ref={this.dialog} style={{width: '40%'}}>
      <h1>Testing</h1>
      <button onClick={this.hide}>close</button>
      </dialog>
    );
  }
}

export default Modal;
