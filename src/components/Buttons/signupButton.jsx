import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import SignupForm from "../Register/Register";

class SignupButton extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  render() {
    const handleClose = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });

    return (
      <main>
        <Button variant="primary" size="lg" block onClick={handleShow}>
          Register
        </Button>

        <Modal show={this.state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>{<SignupForm {...this.props} />}</Modal.Body>
        </Modal>
      </main>
    );
  }
}

export default SignupButton;
