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

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <main>
        <Button variant="primary" size="lg" block onClick={this.handleShow}>
          Login
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {<LoginForm {...this.props} handleClose={this.handleClose} />}
          </Modal.Body>
        </Modal>
      </main>
    );
  }
}

export default LoginButton;
