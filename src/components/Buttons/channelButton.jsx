import React, { Component } from "react";
import ChannelForm from "../../components/Channels/Channels";
import { Modal, Button } from "react-bootstrap";

class ChannelButton extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <main>
        <Button variant="primary" size="lg" block onClick={this.handleShow}>
          Add Channel
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Channel</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {<ChannelForm {...this.props} handleClose={this.handleClose} />}
          </Modal.Body>
        </Modal>
      </main>
    );
  }
}

export default ChannelButton;
