import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";

class LoginForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={this.handleChange}
            value={this.email}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.password}
          />
        </Form.Group>
        <Modal.Footer>
          <Button type="submit"> Login </Button>
        </Modal.Footer>
      </Form>
    );
  }
}

export default LoginForm;
