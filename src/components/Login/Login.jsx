import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import userService from "../../utils/userService";

class LoginForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      email: "",
      password: "",
      error: ""
    };
  }

  isFormValid = () => {
    return this.state.email && this.state.password;
  };

  handleChange = e => {
    this.setState({
      error: "",
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { email, password } = this.state;
      // let creds = { email: email, password: password };
      await userService.login({ email, password });
      this.setState(this.getInitialState(), () => {
        this.props.handleSignupOrLogin();
        this.props.history.push("/dashboard");
        this.props.handleClose();
      });
    } catch (error) {}
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
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

        <Form.Group>
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
          <Button disabled={!this.isFormValid()} type="submit">
            Login
          </Button>
        </Modal.Footer>
      </Form>
    );
  }
}

export default LoginForm;
