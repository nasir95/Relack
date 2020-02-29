import React, { Component } from "react";
import LoginForm from "../../components/Login/Login";
import { Modal, Button } from "react-bootstrap";

class LoginButton extends Component {
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
          Login
        </Button>

        <Modal show={this.state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>{<LoginForm {...this.props} />}</Modal.Body>
        </Modal>
      </main>
    );
  }
}

export default LoginButton;
